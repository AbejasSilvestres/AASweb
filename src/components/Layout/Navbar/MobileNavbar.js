import { useState } from 'react';
import Modal from 'react-modal';
import { Menu } from '../../../icons';
import { NavbarLink } from './NavbarLink';
import { links } from './links';

Modal.setAppElement('#__next');

export const MobileNavbar = () => {
  const [isOpen, toggleModal] = useState(false);

  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  return (
    <nav className="block shadow-sm relative">
      <div className="flex items-center">
        <button
          onClick={openModal}
          className="h-16 px-4 focus:ring-inset focus:ring-4 focus:ring-primary-100 transition-shadow"
        >
          <Menu className="text-4xl text-neutral-800" />
        </button>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <ul className="text-center flex flex-col gap-2">
          <li>
            <NavbarLink className="h-16 px-8" href="/">
              Abejas silvestres
            </NavbarLink>
          </li>
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavbarLink className="h-16 px-8" href={href}>
                {label}
              </NavbarLink>
            </li>
          ))}
        </ul>
      </Modal>
    </nav>
  );
};
