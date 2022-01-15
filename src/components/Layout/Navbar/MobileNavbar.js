import { useState } from 'react';

import { Icon } from '../../Icon';
import { IconButton } from '../../IconButton/IconButton';
import { Modal } from '../../Modal/Modal';
import { links } from './links';
import { NavbarLink } from './NavbarLink';

export const MobileNavbar = () => {
  const [isOpen, toggleModal] = useState(false);

  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  return (
    <nav className="block shadow-sm relative">
      <div className="flex items-center">
        <IconButton onClick={openModal}>
          <Icon.Menu />
        </IconButton>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          <IconButton onClick={closeModal}>
            <Icon.Close />
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
