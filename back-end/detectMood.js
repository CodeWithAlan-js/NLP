import natural from 'natural';
const tokenizer = new natural.WordTokenizer();
const analyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");
const stemmer = natural.PorterStemmer;

export default function detectMood(text) {
    const tokens = tokenizer.tokenize(text);
    const stems = tokens.map(token => stemmer.stem(token));
    const score = analyzer.getSentiment(stems);
    if (score > 0) {
        return 'positive';
    } else if (score < 0) {
        return 'negative';
    } else {
        return 'neutral';
    }
}
