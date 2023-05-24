const LetterFrequency = ({ text }) => {
  const letterFrequency = {};

  for (let i = 0; i < text.length; i++) {
    const letter = text.charAt(i).toLowerCase();

    if (/[a-z]/.test(letter)) {
      if (letter in letterFrequency) {
        letterFrequency[letter]++;
      } else {
        letterFrequency[letter] = 1;
      }
    }
  }

  return Object.entries(letterFrequency).map(([letter, count]) => (
    <div key={letter}>
      {letter.toUpperCase()} = {count}
    </div>
  ));
};

export default LetterFrequency;
