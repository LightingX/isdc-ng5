/**
 * Created by Watermelon1gugu on 2017/8/15.
 */
import 'rxjs/Rx';

export class Matrix {
  public matrix: number[][];
   public row: number;
   public col: number;

  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.row = matrix.length;
    this.col = matrix[0].length;
  }

  print() {
    console.log(this.matrix);
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

  getMatrix() {
    return this.matrix;
  }
}
