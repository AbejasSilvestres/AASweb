export const Posts = ({ children }) => (
  <section className="mt-24 mb-32">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
      {children}
    </div>
  </section>
);
