let map =
       ['XOOO',
        'XOXO',
        'XOXO',
        'OOXX',
        'OOOO'];
let num_row = map.length;
let num_column = map[0].length;
let   perimeter=0;
for (let i = 0; i < num_row; i++)
    for (let j = 0; j < num_column; j++)
        if (map[i][j]==='X') {
            perimeter += (4 - numOfNeighbour(map, i, j, num_row, num_column));
        }
function numOfNeighbour( map,  i,  j,num_row,num_column)
{
    let count = 0;
    if (i > 0  && map[i - 1][j]==='X')
        count++;

    if (j > 0  && map[i][j - 1]==='X')
        count++;
    if (i < num_row-1  && map[i + 1][j]==='X')
        count++;
    if (j < num_column-1 && map[i][j + 1]==='X')
        count++;

    return count;
}
console.log(perimeter);