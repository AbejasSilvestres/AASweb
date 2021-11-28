import projectStyles from './project.module.css';

export const Body = ({ content }) => (
  <div className="max-w-2xl mx-auto my-20">
    <div
      className={projectStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);
