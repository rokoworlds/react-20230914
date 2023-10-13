import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CreateReview } from '../CreateReview/component';
import { Button } from '../Button/component';
import styles from './styles.module.css'


export const CreateReviewModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    {showModal && <div className={styles.overlay} /> }
      <div>
          <Button style={'medium'} onClick={() => setShowModal(true)} >Create review</Button>
          {showModal && createPortal(
              <CreateReview onClose={() => setShowModal(false)} />,
              document.getElementById('modal-container')
        )}
      </div>
    </>
  );
}
