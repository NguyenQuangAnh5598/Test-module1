let sentence = prompt("Nhâp câu vào đây");

function findVowel(string) {
    let vowel = ['a', 'o', 'e', 'u', 'i'];
    let count = 0;
    for (let i = 0; i < vowel.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (vowel[i] === string[j]) {
                count++;
            }
        }
    }
    if (count === 0) {
        return false;
    } else {
        return count;
    }
}

if (findVowel(sentence) === false) {
    document.write("Không có nguyên âm nào trong câu");
} else {
    document.write("Trong câu có " + findVowel(sentence) + " nguyên âm cần tìm.");
}