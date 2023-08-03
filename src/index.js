const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    return expr.match(/(.{10}|.)/g).reduce((bacc, bel) => {
        return bacc + (bel === '**********' ? ' ' : MORSE_TABLE[bel.match(/(.{2}|.)/g).reduce((acc, el) => {
            return acc + (el === '00' ? '' : (el === '11' ? '-' : '.'));
        }, '')]);
    }, '')
}

// КОДИРОВАНИЕ
// const MORSE_TABLE_INVERSE = Object.fromEntries(Object.entries(MORSE_TABLE).map(([key, value]) => [value, key]));

// let bin_morse_code = expr.split(' ').reduce((acc, el) => {
//     let bin_word = el.split('').reduce((wacc, wel) => {
//         console.log(MORSE_TABLE_INVERSE[wel]);
//         let bin_morse_code_word = MORSE_TABLE_INVERSE[wel].split('').reduce((bacc, bel) => {
//             return bacc + (bel == '-' ? '11' : '00')
//         }, '').padStart(10, '0');
//         return wacc + bin_morse_code_word;
//     }, '');
//     return acc + bin_word + '*'.repeat(10);
// }, '');
// return bin_morse_code.slice(0, -10);

module.exports = {
    decode
}