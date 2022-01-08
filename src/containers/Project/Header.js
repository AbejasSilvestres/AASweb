export const Header = ({ title, coverImage }) => (
  <div className="mt-20 mb-8 md:mb-16 h-96 flex justify-center">
    <img src={coverImage} className="max-h-full object-contain" alt={title} />
  </div>
);
