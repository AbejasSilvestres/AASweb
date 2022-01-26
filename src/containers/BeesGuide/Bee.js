import classNames from 'classnames';

export const Bee = ({ isVisible, species, image, onClick }) => (
  <button
    onClick={onClick}
    className={classNames(
      'bg-neutral-0 p-8 rounded-lg shadow-sm hover:shadow-md focus:shadow-md cursor-pointer transition-shadow',
      isVisible ? 'block' : 'hidden'
    )}
  >
    <span className="block text-xl text-center italic font-semibold">
      {species}
    </span>
    <img src={`/bees-guide/${image}`} alt={species} />
  </button>
);
