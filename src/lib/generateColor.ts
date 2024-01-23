import { randomColor } from './randomColor';

export function generateColor() {
  return {
    color: randomColor(),
  };
}
