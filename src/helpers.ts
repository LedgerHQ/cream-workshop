import { table } from "table";

function rotateMatrix90CCW(source: number[][]) {
    // get the dimensions of the source matrix
    const M = source.length;
    const N = source[0].length;

    // create a new NxM destination array
    const destination = new Array(N);
    for (let i = 0; i < N; i++) {
        destination[i] = new Array(M);
    }

    // start copying from source into destination
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            destination[i][j] = source[j][N - i - 1];
        }
    }

    // return the destination matrix
    return destination;
}

export function printGameState(grid: number[][]): void {
    // print a nice formated grid
    console.log(table(rotateMatrix90CCW(grid)));
}
