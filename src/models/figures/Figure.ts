import logo from '../../assets/black-king.png'
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = 'Фигура', // от нее будут наследоваться все фигуры
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this; // add figure in the cell like this object
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell): void {
    console.log(20);
  }
}