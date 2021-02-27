/**
 * 
 * @param {Array} A 
 */
function solution (A) {
    //A = [1, 3, 6, 4, 1, 2]
    let result = 1;
    let setArray = new Set(A);

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= 0) continue;

        if (A[i] - 1 > 0 && !setArray.has(A[i] - 1)) {
            if (result < A[i] - 1 && !setArray.has(result)) {
                continue;
            }
            result = A[i] - 1;
            continue;
        }

        if (A[i] > 0 && !setArray.has(A[i])) {
            if (result < A[i] && !setArray.has(result)) {
                continue;
            }
            result = A[i];
            continue;
        }

        if (A[i] + 1 > 0 && !setArray.has(A[i] + 1)) {
            if (result < A[i] + 1 && !setArray.has(result)) {
                continue;
            }
            result = A[i] + 1;
            continue;
        }

    }

    return Number(result);
    
}