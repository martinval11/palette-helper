import { useState, type StateUpdater, useEffect } from 'preact/hooks';
import styles from './colorblock.module.css';

export function ColorBlock({ color }: { color: string }) {
  const [savedColor, setSavedColor] = useState('')
  const [colorToRender, setColorToRender] = useState(color);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setColorToRender(color)
  }, [color])

  return (
    <div
      className={styles.colorBlock}
      style={{ background: `${locked ? savedColor : colorToRender}` }}
    >
      <div className={styles.blockContent}>
        <h3>{locked ? savedColor : colorToRender}</h3>
        <button onClick={() => {
          if (locked) {
            setColorToRender(savedColor)
          }
          
          if (!locked) {
            setSavedColor(color);
          }

          setLocked(!locked)
        }}>
          {locked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </div>
  );
}
