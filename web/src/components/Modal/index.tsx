import React, { useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (status: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  useEffect(() => {
    if (openModal) {
      const body = document.getElementsByTagName('body').item(0);

      if (body) {
        document.getElementsByTagName('html').item(0)?.scroll({
          top: 0,
          behavior: 'smooth',
        });
        body.style.overflow = 'hidden'
      };

      setTimeout(() => {
        setOpenModal(false);

        if (body && body.style) body.style.overflow = 'auto';
      }, 3000);
    }
  }, [openModal, setOpenModal]);

  return (
    <div className={openModal? 'modal' : 'modal-hidden'}>
      <main>
        <FiCheckCircle />
        <h1>Cadastro concluído</h1>
      </main>
    </div>
  )
};

export default Modal;