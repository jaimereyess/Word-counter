const WordsFrequency = ({ text }) => {
  const countWords = () => {
    const wordsCounts = {};
    const words = text.split(/([^\w\s])|\s+/g).filter(Boolean);

    if (words === "") {
      return wordsCounts;
    } else {
      words.forEach((word) => {
        if (word.length >= 2 && word !== "." && word !== "," && word !== '"') {
          const FinalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          if (wordsCounts.hasOwnProperty(FinalWord)) {
            wordsCounts[FinalWord]++;
          } else {
            wordsCounts[FinalWord] = 1;
          }
        }
      });
      return wordsCounts;
    }
  };

  const wordCounts = countWords();

  const sortedWords = Object.keys(wordCounts).sort(
    (a, b) => wordCounts[b] - wordCounts[a]
  ).slice(0, 10);

  return (
    <div>
      <h2 className="ml-8">Words Frequency</h2>
      <ul>
        {sortedWords.map((word) => (
          <li key={word}>
            {word}: {wordCounts[word]}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default WordsFrequency;
