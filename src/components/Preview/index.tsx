import { ModuleTypes } from 'constants/index';
import { Settings } from 'services/api';
import Banner from './Banner';

export type PreviewProps = {
  type: string | undefined
  properties: Settings['properties'] | undefined
};

function Preview({ type, properties }: PreviewProps) {
  if (!type || !properties) {
    return null;
  }

  switch (type) {
    case ModuleTypes.BANNER:
      return <Banner properties={properties} />;
    default:
      return null;
  }
}

export default Preview;
