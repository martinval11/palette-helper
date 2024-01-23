import { useState } from 'preact/hooks';
import styles from './colorblock.module.css';

export function ColorBlock({ color }: { color: string }) {
  const [locked, setLocked] = useState(false);

  return (
    <div
      className={styles.colorBlock}
      style={{ background: `${color} ${locked ? '!important' : ''}` }}
    >
      <div className={styles.blockContent}>
        <h3>{color}</h3>
        <button onClick={() => setLocked(!locked)}>
          {locked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </div>
  );
}
