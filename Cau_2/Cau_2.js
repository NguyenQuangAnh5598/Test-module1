let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nu = prompt("Nhập số cần tìm vào đây");
nu = parseInt(nu);

function findNumber(num, n) {

    for (let i = 0; i < n.length; i++) {
        if (num === n[i]) {
            return ("Số " + num + " nằm ở vị trí " + i);
        }
    }
    return ("không có số cần tìm trong mảng");
}

let write = findNumber(nu, number);
document.write(write);