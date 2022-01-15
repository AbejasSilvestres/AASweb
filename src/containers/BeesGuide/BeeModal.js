import classNames from 'classnames';
import { useState } from 'react';

import { Icon, IconButton, Modal } from '../../components';
import { getBasePath } from '../../lib/utils';

export const Bee = ({ isVisible, species, image }) => {
  const [isModalOpen, toggleModal] = useState(false);

  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  const imgSrc = `${getBasePath()}/bees-guide/${image}`;

  return (
    <>
      <button
        onClick={openModal}
        className={classNames(
          'bg-neutral-0 p-8 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow',
          isVisible ? 'block' : 'hidden'
        )}
      >
        <span className="block text-xl text-center italic font-semibold">
          {species}
        </span>
        <img src={imgSrc} alt={species} />
      </button>
      <Modal onRequestClose={closeModal} isOpen={isModalOpen}>
        <IconButton onClick={closeModal}>
          <Icon.Close />
        </IconButton>
        <div className="flex items-center justify-center h-full pb-40">
          <img src={imgSrc} alt={species} className="max-h-full" />
        </div>
      </Modal>
    </>
  );
};
