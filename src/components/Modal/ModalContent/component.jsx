import classNames from 'classnames';
import { CreateReview } from '../../CreateReview/component';
import styles from './styles.module.css'

export const ModalContent = ({ onClose, className }) => {
    return (
      <div className={classNames(styles.modal, className)}>
        <CreateReview onClose={onClose} />
      </div>
    );
  }
  