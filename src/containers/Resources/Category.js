import { Icon } from '../../components';

const categoryContent = {
  Guide: {
    icon: Icon.BookOpen,
    title: 'Guías',
  },
  Video: {
    icon: Icon.VideoCamera,
    title: 'Videos',
  },
  Infographics: {
    icon: Icon.ChartSquareBar,
    title: 'Infográficos',
  },
};

export const Category = ({ name, children }) => {
  const Icon = categoryContent[name].icon;
  return (
    <div className="mb-20">
      <div className="flex items-center mb-6">
        <div className="w-20 flex-shrink-0">
          <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center text-3xl text-primary-500">
            <Icon />
          </div>
        </div>
        <h3 className="text-3xl">{categoryContent[name].title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
