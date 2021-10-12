const prod = process.env.NODE_ENV === 'production';

export default function Image({ src, alt, ...props }) {
  return <img src={prod ? `/AASweb${src}` : src} alt={alt} {...props} />;
}
