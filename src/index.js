const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrTen = expr.match(/.{1,10}/g);
    let strMorse = '';
    for (let i = 0; i < arrTen.length; i++) {
        let strDec = '';
        if (arrTen[i] == '**********') {
            strMorse = strMorse + ' ';
        }
        else {
            let arrWithoutNull = (arrTen[i]).match(/.{1,2}/g);
            
            for (let j = 0; j < arrWithoutNull.length; j++) {
                
                if (arrWithoutNull[j] == '10') {
                    strDec = strDec + '.';
                }
                else if (arrWithoutNull[j] == '11') {
                    strDec = strDec + '-';
                }                
            }
            
            for (key in MORSE_TABLE)  {
                if (key === strDec) {strMorse += MORSE_TABLE[key]};
                }            
        }   
       
    }
    
   return strMorse;
}

module.exports = {
    decode
}

