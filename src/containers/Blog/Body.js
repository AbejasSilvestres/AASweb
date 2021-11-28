import postStyles from './post.module.css';

export const Body = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={postStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);
