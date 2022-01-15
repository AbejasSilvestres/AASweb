import ReactModal from 'react-modal';
import modalStyles from './modal.module.css';

ReactModal.setAppElement('#__next');

export const Modal = (props) => (
  <ReactModal
    className={{
      base: modalStyles.modal,
      afterOpen: modalStyles.opened,
      beforeClose: modalStyles.closed,
    }}
    overlayClassName={{
      base: modalStyles.overlay,
      afterOpen: modalStyles.opened,
      beforeClose: modalStyles.closed,
    }}
    closeTimeoutMS={200}
    {...props}
  />
);
