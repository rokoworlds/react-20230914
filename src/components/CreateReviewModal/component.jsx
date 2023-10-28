import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/component';
import styles from './styles.module.css'
import { CreateReviewContainer } from '../CreateReview/container';


export const CreateReviewModal = ({restaurantId}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    {showModal && <div className={styles.overlay} /> }
      <div>
          <Button style={'medium'} onClick={() => setShowModal(true)} >Create review</Button>
          {showModal && createPortal(
              <CreateReviewContainer onClose={() => setShowModal(false)} restaurantId={restaurantId} />,
              document.getElementById('modal-container')
        )}
      </div>
    </>
  );
}
