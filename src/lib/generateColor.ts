import { randomColor } from './randomColor';

export function generateColor() {
  return {
    id: 1,
    color: randomColor(),
  };
}
