const WordsFrequency = ({ text }) => {
  const countWords = () => {
    const wordsCounts = {};
    const words = text.split(/\s+/g);

    if (words) {
      words.forEach((word) => {
        if (wordsCounts.hasOwnProperty(word)) {
          wordsCounts[word]++;
        } else {
          wordsCounts[word] = 1;
        }
      });
    }

    return wordsCounts;
  };

  const wordCounts = countWords();

  return (
    <div>
      <h2>Words Frequency</h2>
      <ul>
        {Object.keys(wordCounts).map((word) => (
          <li key={word}>
            {word}: {wordCounts[word]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordsFrequency;
