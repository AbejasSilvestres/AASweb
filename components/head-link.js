import { getBasePath } from '../lib/utils';

export default function Image({ href, alt, ...props }) {
  return <link href={`${getBasePath()}${href}`} {...props} />;
}
