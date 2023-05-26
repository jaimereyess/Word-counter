const LetterFrequency = ({ text }) => {
  const countLetters = () => {
    const letterCounts = {};
    const letters = text.toUpperCase().match(/[A-Z]/g);

    if (letters) {
      letters.forEach((letter) => {
        if (letterCounts.hasOwnProperty(letter)) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      });
    }

    return letterCounts;
  };

  const letterCounts = countLetters();

  const sortedLetters = Object.keys(letterCounts).sort(
    (a, b) => letterCounts[b] - letterCounts[a]
  );

  return (
    <div>
      <h2>Letter Frequency</h2>
      <ul>
        {sortedLetters.map((letter) => (
          <li key={letter}>
            {letter}: {letterCounts[letter]} ({Math.floor((letterCounts[letter] * 100 / (text.length)))}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LetterFrequency;