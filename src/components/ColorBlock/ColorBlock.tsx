import { useState, useEffect } from 'react';
import styles from './colorblock.module.css';
import { Lock, Unlock, Clipboard } from 'lucide-react';

export function ColorBlock({ color }: { color: string }) {
  const [savedColor, setSavedColor] = useState('');
  const [colorToRender, setColorToRender] = useState(color);
  const [locked, setLocked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setColorToRender(color);
  }, [color]);

  function blockColor() {
    if (locked) {
      setColorToRender(savedColor);
    }

    if (!locked) {
      setSavedColor(color);
    }

    setLocked(!locked);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(colorToRender);
    setCopied(!copied);
  }

  return (
    <div
      className={styles.colorBlock}
      style={{ background: `${locked ? savedColor : colorToRender}` }}
    >
      <div className={styles.blockContent}>
        <h3>{locked ? savedColor : colorToRender}</h3>

        <div className={styles.actions}>
          <button onClick={blockColor} title={locked ? 'Unlock' : 'Lock'}>{locked ? <Lock /> : <Unlock />}</button>

          <button onClick={copyToClipboard} title={copied ? 'Copied' : 'Copy'}>{copied ? 'Copied' : <Clipboard />}</button>
        </div>
      </div>
    </div>
  );
}
