import introStyles from './intro.module.css';

export const Intro = ({ content }) => (
  <div
    className={introStyles['markdown']}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
