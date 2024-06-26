import { useEffect, useRef, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useTelegram } from 'hooks';
import { envs } from 'constants/index';
import { ErrorPage, LoaderPage } from 'components';
import {
  AddModules,
  AddSchool,
  Profile,
  Shcool,
  SchoolMenu,
  ModulesPosition,
  EditModule,
} from './pages';
import { isDev } from './helpers';
import { useGetProfileQuery } from './services';

function App() {
  const tg = useTelegram();

  const navigate = useRef(useNavigate());
  const { pathname } = useLocation();

  const [isTgLoading, setTgLoading] = useState(true);
  const [isTgReady, setTgReady] = useState(false);

  const {
    isLoading: isGetProfileLoading,
    isError: isGetProfileError,
  } = useGetProfileQuery(undefined, { skip: !isTgReady });

  const isLoading = isTgLoading || isGetProfileLoading;

  useEffect(() => {
    const tgInitData = isDev() ? envs.testInitData : tg.initData;
    window.localStorage.setItem('tgData', tgInitData);
    setTgLoading(false);
    setTgReady(true);
  }, [tg]);

  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.backgroundColor = '#000000';
    tg.headerColor = '#000000';
  }, [tg]);

  useEffect(() => {
    if (pathname !== '/') {
      tg.BackButton.show();
      tg.BackButton.onClick(() => navigate.current(-1));
    } else {
      tg.BackButton.hide();
    }
  }, [tg, pathname]);

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isGetProfileError) {
    return <ErrorPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/addSchool" element={<AddSchool />} />
      <Route path="/school/:id" element={<Shcool />} />
      <Route path="/school/:id/addModules" element={<AddModules />} />
      <Route path="/school/:id/menu" element={<SchoolMenu />} />
      <Route path="/school/:id/position" element={<ModulesPosition />} />
      <Route path="/school/:id/edit/:moduleId" element={<EditModule />} />
    </Routes>
  );
}

export default App;
