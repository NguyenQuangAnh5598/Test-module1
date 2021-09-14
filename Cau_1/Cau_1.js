let num1 = prompt("nhập số a");
let num2 = prompt("nhập số b");
num1 = parseInt(num1);
num2 = parseInt(num2);

function countSimpleEquation(a, b) {
    if (a === 0 && b === 0) {
        alert("Phương trình bậc nhất có vô số nghiệm");
    }
    if (a === 0 && b !== 0) {
        alert("Phương trình bậc nhất vô nghiệm");
    }
    if (a !== 0) {
        alert("Phương trình bậc nhất có ngiệm x = " + ((-b) / a));
    }
}

countSimpleEquation(num1, num2);