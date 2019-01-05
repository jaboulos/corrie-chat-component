import { randomAdjectiveGenerator } from './adjectiveGenerator.js';
import { emotes } from './emotesObject.js';


//HELPER FUNCTIONS FOR CHAT GENERATOR

export const generateRandomNumber = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

const globalEmoteArray = Object.keys(emotes.globalEmotes);

const randomBoolean = () => {
  const output = Math.random();
  return output >= 0.5;
};

const randomGlobalEmote = () => {
  const randomEmoteIndex = generateRandomNumber(0, 213);
  return globalEmoteArray[randomEmoteIndex];
};

const globalEmoteSpamGenerator = (repeatNum = 1) => {
  return `${randomGlobalEmote()} `.repeat(repeatNum);
};

const interjections = ['woooooooooow', 'lol', 'lmao', 'hahahahahahaha', 'wth', 'huzzah', 'whyyyy', 'aha', 'ahem', 'ahh', 'ahoy', 'alas', 'arg', 'aw', 'bam', 'bingo', 'blah', 'boo', 'bravo', 'brr', 'cheers', 'congrats', 'congratulations', 'dang', 'drat', 'darn', 'duh', 'eek', 'eh', 'encore', 'eureka', 'fiddlesticks', 'gadzooks', 'gee', 'gee whiz', 'golly', 'goodbye', 'goodness', 'good grief', 'gosh', 'haha', 'hah', 'hallelujah', 'hello', 'hey', 'hmm', 'holy buckets', 'holy cow', 'holy smokes', 'hon hon hon', 'hot dog', 'huh', 'humph', 'hurray', 'oh', 'oh dear', 'oh my', 'oh well', 'oops', 'ouch', 'ow', 'phew', 'phooey', 'pooh', 'pow', 'rats', 'shh', 'shoo', 'thanks', 'there', 'tut-tut', 'uh-uh', 'uh-oh', 'ugh', 'uhhh', 'wahoo', 'well', 'whoa', 'whoops', 'wow', 'yeah', 'yes', 'yikes', 'yippee', 'yo', 'yuck'];

const randomCasing = (string) => {
  return randomBoolean() ? string.toUpperCase() : string;
};

const randomPhraseGenerator = () => {
  const randomInterjection = interjections[generateRandomNumber(0, interjections.length - 1)];
  return randomCasing(randomInterjection);
};

const randomStatementGenerator = () => {
  const pronouns = ['you are', 'ur', 'he is', 'she is', 'they are', 'this is', 'I am', 'we are', 'it is', 'that is'];
  const randomInterjection = interjections[generateRandomNumber(0, interjections.length - 1)];
  const randomPronoun = pronouns[generateRandomNumber(0, pronouns.length - 1)];
  const randomSentence = randomAdjectiveGenerator();
  return `${randomPronoun} ${randomSentence}`;
};

const randomChatGenerator = () => {
  const optionObj = {
    '1': randomPhraseGenerator(),
    '2': randomStatementGenerator(),
    '3': randomGlobalEmote(),
    '4': globalEmoteSpamGenerator(generateRandomNumber(1, 30)),
    '5': `${randomPhraseGenerator()} ${randomStatementGenerator()}`,
    '6': `${randomPhraseGenerator()} ${randomStatementGenerator()} ${randomGlobalEmote()}`,
    '7': `${randomPhraseGenerator()} ${randomStatementGenerator()} ${globalEmoteSpamGenerator(generateRandomNumber(1, 3))}`,
    '8': `${randomPhraseGenerator()} ${randomStatementGenerator()} ${randomGlobalEmote()} ${randomGlobalEmote()}`,
    '9': `${randomPhraseGenerator()} ${globalEmoteSpamGenerator(generateRandomNumber(1, 10))}`,
    '10': `${randomStatementGenerator()} ${randomGlobalEmote()}`,
    '11': `${randomCasing(randomAdjectiveGenerator())}`,
  };
  return optionObj[generateRandomNumber(1, 13).toString()];
};

export const twitchChatGenerator = () => {
  return {
    chat: randomChatGenerator(),
    user_id: generateRandomNumber(1, 501)
  };
};
