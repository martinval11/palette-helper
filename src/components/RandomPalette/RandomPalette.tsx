import { useState } from 'preact/hooks';
import { generateColor } from '../../lib/generateColor';

import { ColorBlock } from '../ColorBlock/ColorBlock';
import styles from './randomPalette.module.css';

interface RColor {
  id: number;
  color: string;
}

export function RandomPalette() {
  const [randomColors, setRandomColors] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      ...generateColor(),
      id: i + 1,
    }))
  );

  function genFiveRandomColors() {
    setRandomColors(
      Array.from({ length: 5 }, (_, i) => ({
        ...generateColor(),
        id: i + 1,
      }))
    );
  }

  return (
    <main className={styles.container}>
      <section className={styles.blocksContainer}>
        {randomColors.map((rColor: RColor) => (
          <ColorBlock key={rColor.id} color={rColor.color} />
        ))}
      </section>

      <button
        className={styles.randomColorsButton}
        onClick={genFiveRandomColors}
        autoFocus
      >
        Random Colors
      </button>
    </main>
  );
}
