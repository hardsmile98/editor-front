/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useTelegram } from 'hooks';
import { envs } from 'constants/index';
import {
  Profile,
} from './pages';
import { isDev } from './helpers';
import { useGetProfileQuery } from './services';

function App() {
  const tg = useTelegram();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isTgLoading, setTgLoading] = useState(true);
  const [isTgReady, setTgReady] = useState(false);

  const {
    isLoading: isGetProfileLoading,
    isError,
  } = useGetProfileQuery(undefined, { skip: !isTgReady });

  const isLoading = isTgLoading || isGetProfileLoading;

  useEffect(() => {
    const tgInitData = isDev() ? envs.testInitData : tg.initData;
    window.localStorage.setItem('tgData', tgInitData);
    setTgLoading(false);
    setTgReady(true);
  }, [tg]);

  useEffect(() => {
    tg.expand();
    tg.SettingsButton.hide();
    tg.backgroundColor = '#000000';
    tg.headerColor = '#000000';
  }, [tg]);

  useEffect(() => {
    if (pathname !== '/') {
      tg.BackButton.show();
      tg.BackButton.onClick(() => navigate(-1));
    } else {
      tg.BackButton.hide();
    }
  }, [tg, navigate, pathname]);

  return (
    <Routes>
      <Route path="/*" element={<Profile />} />
    </Routes>
  );
}

export default App;
