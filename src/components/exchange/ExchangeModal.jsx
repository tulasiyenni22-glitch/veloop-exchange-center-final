import { useEffect, useRef } from 'react';
import { ArrowDown, X } from 'lucide-react';
import gemArtwork from '../../assets/gem.png';
import styles from './Exchange.module.css';

export default function ExchangeModal({ option, balances, processing, onClose, onConfirm }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const modal = modalRef.current;
    modal?.querySelector('button:not(:disabled)')?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !processing) onClose();
      if (event.key !== 'Tab' || !modal) return;
      const controls = [...modal.querySelectorAll('button:not(:disabled)')];
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose, processing]);

  if (!option) return null;
  const enough = balances.gems >= option.requiredGems;
  return <div className={styles.overlay} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && !processing && onClose()}>
    <section ref={modalRef} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <button className={styles.close} aria-label="Close confirmation" onClick={onClose} disabled={processing}><X /></button>
      <img className={styles.modalGemArtwork} src={gemArtwork} alt="Purple Gem" />
      <h2 id="confirm-title">Confirm Conversion</h2>
      <p>Review your reward conversion before confirming.</p>
      <div className={styles.modalFlow}><strong>{option.requiredGems} Gems</strong><ArrowDown /><strong>+{option.receiveVEs} VEs</strong></div>
      <div className={styles.after}>
        <span>Gems after conversion <b>{enough ? balances.gems - option.requiredGems : balances.gems}</b></span>
        <span>VEs after conversion <b>{enough ? balances.ves + option.receiveVEs : balances.ves}</b></span>
      </div>
      {!enough && <p className={styles.warning}>You need {option.requiredGems - balances.gems} more Gems to unlock this conversion.</p>}
      <div className={styles.modalActions}>
        <button onClick={onClose} disabled={processing}>Cancel</button>
        <button className={styles.primary} onClick={onConfirm} disabled={processing || !enough}>{processing ? 'Converting...' : 'Confirm Conversion'}</button>
      </div>
    </section>
  </div>;
}
