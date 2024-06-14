import { ModuleTypes } from 'constants/index';
import NotFoundModule from './NotFoundModule';
import Banner from './Banner';

function EditModule() {
  const type = 'banner';

  switch (type) {
    case ModuleTypes.BANNER:
      return <Banner />;
    default:
      return <NotFoundModule />;
  }
}

export default EditModule;
