import timelineItemStyles from './timeline-item.module.css';

export const TimelineItem = ({ label, content, last }) => (
  <div className="flex gap-10 relative pb-10">
    {!last && (
      <div className="w-1 bg-primary-200 absolute top-0 bottom-0 left-1.5" />
    )}
    <div className="w-4 h-4 shrink-0 bg-primary-200 rounded-full" />
    <div className="-mt-2.5">
      <h3 className="font-semibold text-2xl text-neutral-800 mb-1">{label}</h3>
      <div
        className={timelineItemStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </div>
);
