import { useState } from 'react';
import { createPortal } from 'react-dom';

import { CreateReview } from '../CreateReview/component';
import { Button } from '../Button/component';


export const CreateReviewModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <Button size={'medium'} onClick={() => setShowModal(true)} >Create review</Button>
        {showModal && createPortal(
            <CreateReview onClose={() => setShowModal(false)} />,
            document.getElementById('modal-container')
      )}
    </div>
  );
}
