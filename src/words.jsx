const WordsFrequency = ({ text }) => {
  const countWords = () => {
    const wordsCounts = {};
    const words = text.split(/([^\w\s])|\s+/g).filter(Boolean);

    if (words == "") {

    } else {
      words.forEach((word) => {
        if (word !== '.' && word !== ',') {
          if (wordsCounts.hasOwnProperty(word)) {
            wordsCounts[word]++;
          } else {
            wordsCounts[word] = 1;
          }
        }
      });
    }

    return wordsCounts;
  };

  const wordCounts = countWords();

  const sortedWords = Object.keys(wordCounts).sort(
    (a, b) => wordCounts[b] - wordCounts[a]
  );

  return (
    <div>
      <h2>Words Frequency</h2>
      <ul>
        {sortedWords.map((word) => (
          <li key={word}>
            {word}: {wordCounts[word]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordsFrequency;
