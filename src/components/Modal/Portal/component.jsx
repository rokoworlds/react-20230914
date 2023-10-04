import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from '../ModalContent/component';
import { Button } from '../../Button/component';
import styles from './styles.module.css'


export const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <Button className={styles.button} title='Create review' onClick={() => setShowModal(true)} />
      {showModal && createPortal(
        <ModalContent className={styles.modal} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}
