
// const fs = require("fs");
// const readline = require("readline");

// async function processLineByLine(fileName) {
//     let lines = [];
//     const fileStream = fs.createReadStream(fileName);

//     const rl = readline.createInterface({
//         input: fileStream,
//         crlfDelay: Infinity,
//     });
//     // Note: we use the crlfDelay option to recognize all instances of CR LF
//     // ('\r\n') in input.txt as a single line break.

//     for await (const line of rl) {
//         // Each line in input.txt will be successively available here as `line`.
//         // console.log(`Line from file: ${line}`);
//         lines.push(JSON.parse(line));
//     }
//     return new Promise((resolve, reject) => {
//         resolve(lines);
//     });
// }
// async function hamada() {
//     const lines = await processLineByLine("text.txt");
//     lines.forEach((element) => {
//         console.log(solution(element));
//     });
// }
// hamada();

function solution(A) {
    let B;
    A.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1) {
            B = A.slice(i);
            for (let i = 0; i < B.length; i++) {
                if (i < B.length && B[i] + 1 !== B[i + 1] && B[i] !== B[i + 1]) {
                    if(B[0] !== 1){
                        return 1;
                    }
                    return B[i] + 1;
                }
            }
        }
    }
    return 1;    
}
console.log(solution([-5, -3, -2, -5, -10, -1, -2]));

// var A = [1, 3, 6, 4, 1, 2];
// console.log(A[6]);
