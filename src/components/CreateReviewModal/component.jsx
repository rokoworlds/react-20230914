import { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.css'
import { CreateReview } from '../CreateReview/component';
import { Button } from '../Button/component';


export const CreateReviewModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <Button className={styles.button} title='Create review' onClick={() => setShowModal(true)} />
        {showModal && createPortal(
            <CreateReview className={styles.modal} onClose={() => setShowModal(false)} />,
            document.getElementById('modal-container')
      )}
    </div>
  );
}
