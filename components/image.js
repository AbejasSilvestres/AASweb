import { getBasePath } from '../lib/utils';

export default function Image({ src, alt, ...props }) {
  return <img src={`${getBasePath()}${src}`} alt={alt} {...props} />;
}
