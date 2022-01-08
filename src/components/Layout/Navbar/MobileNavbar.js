import { useState } from 'react';
import Modal from 'react-modal';
import { Menu, Close } from '../../../icons';
import { NavbarLink } from './NavbarLink';
import { links } from './links';
import { IconButton } from './IconButton';

Modal.setAppElement('#__next');

export const MobileNavbar = () => {
  const [isOpen, toggleModal] = useState(false);

  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  return (
    <nav className="block shadow-sm relative">
      <div className="flex items-center">
        <IconButton onClick={openModal}>
          <Menu />
        </IconButton>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={{
          base: 'modal',
          afterOpen: 'modal-opened',
          beforeClose: 'modal-closed',
        }}
        overlayClassName={{
          base: 'overlay',
          afterOpen: 'overlay-opened',
          beforeClose: 'overlay-closed',
        }}
        closeTimeoutMS={200}
      >
        <div>
          <IconButton onClick={closeModal}>
            <Close />
          </IconButton>
          <ul className="text-center flex flex-col gap-6">
            <li>
              <NavbarLink onClick={closeModal} className="h-12" href="/">
                Abejas silvestres
              </NavbarLink>
            </li>
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavbarLink onClick={closeModal} className="h-12" href={href}>
                  {label}
                </NavbarLink>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </nav>
  );
};
