import { DEFAULT_PROFILE_IMAGE } from './constant';

const handleBrokenImage = (e): void => {
  e.target.src = DEFAULT_PROFILE_IMAGE;
  e.target.onerror = null;
  // onerror = null로 하는 이유는?
};

export default handleBrokenImage;
