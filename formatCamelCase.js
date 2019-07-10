// Formats any text in camel case to a spaced text and makes the first letter capital

function formatCamelCase(text){
    if (text) {
      const textObject = text.split('').map((txt, j, arr) => {
        return {txt: txt, i: arr.indexOf(txt)};
      });

      const upperCaseLetters = textObject.filter((txt, i, arr) => {
        return arr[i].txt === arr[i].txt.toUpperCase();
      });

      let output = '';
      output = text.charAt(0).toUpperCase() + text.slice(1, upperCaseLetters[0].i);

      upperCaseLetters.map((txt, j) => {
        
        if (j <= upperCaseLetters.length && j + 1 <= upperCaseLetters.length - 1) {
            output += ' ' + text.slice(upperCaseLetters[j].i, upperCaseLetters[j + 1].i);
        }
        if (j + 1 > upperCaseLetters.length - 1) {
          output += ' ' + text.slice(upperCaseLetters[j].i);
        }
        
      });

      return output;
    }
  }
