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

  const halfLength = Math.ceil(sortedLetters.length / 2);
  const firstHalf = sortedLetters.slice(0, halfLength);
  const secondHalf = sortedLetters.slice(halfLength);

  return (
    <section>

      <h2>Letter Frequency</h2>
      {firstHalf.map((letter, index) => (
        <div className="grid grid-cols-2" key={index}>
          <table className="table-fixed">
            <tbody>
              <tr>
                <td>
                  {letter}: {letterCounts[letter]} ({Math.floor((letterCounts[letter] * 100 / (text.replace(/\s+/g, "").length)))}%)
                </td>
              </tr>
            </tbody>
          </table>
          {secondHalf[index] && (
            <ul>
              <li>{secondHalf[index]}: {letterCounts[secondHalf[index]]}
                ({Math.floor((letterCounts[secondHalf[index]] * 100 / (text.replace(/\s+/g, "").length)))}%)
              </li>
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}


export default LetterFrequency;
