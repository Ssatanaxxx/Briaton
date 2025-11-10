import { ReactNode } from 'react';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthModal = ({ isOpen, onClose, children, title, subtitle }: AuthModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={`auth-modal-overlay ${isOpen ? 'auth-modal-overlay--active' : ''}`} onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        
        <div className="auth-modal__header">
          <h2 className="auth-modal__title">{title}</h2>
          {subtitle && <p className="auth-modal__subtitle">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthModal;