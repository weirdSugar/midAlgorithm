/**
给定一个 m x n 的矩阵，如果一个元素为 0，
则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:
输入:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]


示例 2:
输入:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
 */




 /**
  *  两个for遍历 如果是0 就将其所在行列非0的置为 true
  *  然后再两个for 将是true的全部变0
  */


/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var setZeroes = function (matrix) {
        let collen=matrix[0].length,
            rowlen=matrix.length
        function mark(i,j){
            for(let a=0;a<collen ;a++){
            if(matrix[i][a]!=0)matrix[i][a]=true
        }
            for(let b=0;b<rowlen;b++){
                if(matrix[b][j]!==0)matrix[b][j]=true
            }
        }

        for(let i=0;i<rowlen;i++)
            for(let j=0;j<collen;j++){
                if(matrix[i][j]===0)
                    mark(i,j)
            }

        for(let i=0;i<rowlen;i++)
            for(let j=0;j<collen;j++){
                if(matrix[i][j]===true)matrix[i][j]=0
            }
};





/**
 *  用首行首列记录所要变 0的行列
 * 
 *  因为首行列用作记录 所以这俩单独处理
 *  先遍历首行列 有0 则记录 flag
 *  然后从(1,1)开始两个for遍历 是0 就在相应首行的列 和相应首列的行记录
 *  然后根据记录清理
 */

var setZeroes = function (matrix) {
    var rowFlag = false;
    //判断首行
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            rowFlag = true;
            break;
        }
    }

    var colFlag = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            colFlag = true;
            break;
        }
    }

    // 从(1,1)开始 在首行列相应列行记录
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 根据第一行记录 清理列 
    for (let i = 1; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }

    // 根据第一列的记录 清理列 
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    if (rowFlag) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
    if (colFlag) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
}