import { Icon, IconButton, Modal } from '../../components';

export const BeeModal = ({ isOpen, onRequestClose, species, image }) => (
  <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
    <IconButton onClick={onRequestClose}>
      <Icon.Close />
    </IconButton>
    <div className="flex items-center justify-center h-full pb-40">
      <img src={`/bees-guide/${image}`} alt={species} className="max-h-full" />
    </div>
  </Modal>
);
