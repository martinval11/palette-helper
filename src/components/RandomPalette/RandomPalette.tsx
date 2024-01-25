import { useCallback, useEffect, useState } from 'react';

import { RotateCw } from 'lucide-react';
import { Howl } from 'howler';

import { generateColor } from '../../lib/generateColor';

import { ColorBlock } from '../ColorBlock/ColorBlock';
import styles from './randomPalette.module.css';

interface RColor {
  id: number;
  color: string;
}

export function RandomPalette() {
  const [playing, setPlaying] = useState(false);

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault(); // Prevent unexpected scroll jumps when space is pressed
      genFiveRandomColors();
    }
  }, []);

  const [randomColors, setRandomColors] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      ...generateColor(),
      id: i + 1,
    }))
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  function genFiveRandomColors() {
    setRandomColors(
      Array.from({ length: 5 }, (_, i) => ({
        ...generateColor(),
        id: i + 1,
      }))
    );
  }

  function playSound() {
    const sound = new Howl({
      src: ['button-click.mp3'],
    });

    // Reproduce el sonido
    sound.play();

    // Actualiza el estado para cambiar la apariencia del botón
    setPlaying(true);

    // Después de un tiempo, restablece el estado
    setTimeout(() => {
      setPlaying(false);
    }, 300);
  }

  return (
    <main className={styles.container}>
      <nav>
        <button
          className={styles.randomColorsButton}
          onClick={(event) => {
            genFiveRandomColors();
            playSound();

            // Unfocus button
            event.currentTarget.blur();
          }}
          id={playing ? 'playing' : ''}
        >
          <RotateCw />
          Random Colors
        </button>
      </nav>
      <section className={styles.blocksContainer}>
        {randomColors.map((rColor: RColor) => (
          <ColorBlock key={rColor.id} color={rColor.color} />
        ))}
      </section>
    </main>
  );
}
