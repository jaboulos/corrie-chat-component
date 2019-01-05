
const Sentencer = require('sentencer');

//OBJECT FULL OF EMOTE PHRASES

const emotes = {
  streamerEmotes: {
    lfsl: '',
    lfsOMG: '',
    lfsFP: '',
    lfsG: '',
    lfsK: '',
    lfsWT: 'this is just first line of his emotes'
  },
  globalEmotes: {
    JKanStyle: '',
    OptimizePrime: '',
    StoneLightning: '',
    TheRinger: '',
    RedCoat: '',
    Kappa: '',
    JonCarnage: '',
    MrDestructoid: '',
    BCWarrior: '',
    GingerPower: '',
    DansGame: '',
    SwiftRage: '',
    PJSalt: '',
    KevinTurtle: '',
    Kreygasm: '',
    SSSsss: '',
    PunchTrees: '',
    ArsonNoSexy: '',
    SMOrc: '',
    FrankerZ: '',
    OneHand: '',
    HassanChop: '',
    BloodTrail: '',
    DBstyle: '',
    AsianGlow: '',
    BibleThump: '',
    ShazBotstix: '',
    PogChamp: '',
    PMSTwin: '',
    FUNgineer: '',
    ResidentSleeper: '',
    '4Head': '',
    HotPokket: '',
    FailFish: '',
    DAESuppy: '',
    WholeWheat: '',
    ThunBeast: '',
    TF2John: '',
    RalpherZ: '',
    Kippa: '',
    Keepo: '',
    BigBrother: '',
    SoBayed: '',
    PeoplesChamp: '',
    GrammarKing: '',
    PanicVis: '',
    ANELE: '',
    BrokeBack: '',
    PipeHype: '',
    YouWHY: '',
    RitzMitz: '',
    EleGiggle: '',
    TheThing: '',
    HassaanChop: '',
    BabyRage: '',
    panicBasket: '',
    PermaSmug: '',
    BuddhaBar: '',
    WutFace: '',
    PRChase: '',
    Mau5: '',
    HeyGuys: '',
    NotATK: '',
    mcaT: '',
    TTours: '',
    PraiseIt: '',
    HumbleLife: '',
    CorgiDerp: '',
    ArgieB8: '',
    ShadyLulu: '',
    KappaPride: '',
    CoolCat: '',
    DendiFace: '',
    NotLikeThis: '',
    riPepperonis: '',
    duDudu: '',
    bleedPurple: '',
    twitchRaid: '',
    SeemsGood: '',
    MingLee: '',
    KappaRoss: '',
    KappaClaus: '',
    OhMyDog: '',
    OSFrog: '',
    SeriousSloth: '',
    KomodoHype: '',
    VoHiYo: '',
    MikeHogu: '',
    KappaWealth: '',
    cmonBruh: '',
    SmoocherZ: '',
    NomNom: '',
    StinkyCheese: '',
    ChefFrank: '',
    FutureMan: '',
    OpieOP: '',
    DoritosChip: '',
    PJSugar: '',
    VoteYea: '',
    VoteNay: '',
    RuleFive: '',
    DxCat: '',
    DrinkPurple: '',
    TinyFace: '',
    PicoMause: '',
    TheTarFu: '',
    DatSheffy: '',
    UnSane: '',
    copyThis: '',
    pastaThat: '',
    imGlitch: '',
    GivePLZ: '',
    TakeNRG: '',
    BlargNaut: '',
    DogFace: '',
    Jebaited: '',
    TooSpicy: '',
    WTRuck: '',
    UncleNox: '',
    RaccAttack: '',
    StrawBeary: '',
    PrimeMe: '',
    BrainSlug: '',
    BatChest: '',
    CurseLit: '',
    Poooound: '',
    FreakinStinkin: '',
    SuperVinlin: '',
    TriHard: '',
    CoolStoryBob: '',
    ItsBoshyTime: '',
    KAPOW: '',
    YouDontSay: '',
    UWot: '',
    RlyTho: '',
    SoonerLater: '',
    PartyTime: '',
    NinjaGrumpy: '',
    MVGame: '',
    TBAngel: '',
    TheIlluminati: '',
    BlessRNG: '',
    MorphinTime: '',
    ThankEgg: '',
    ArigatoNas: '',
    BegWan: '',
    BigPhish: '',
    InuyoFace: '',
    Kappu: '',
    KonCha: '',
    PunOko: '',
    SabaPing: '',
    TearGlove: '',
    TehePelo: '',
    TwitchLit: '',
    CarlSmile: '',
    CrreamAwk: '',
    Squid1: '',
    Squid2: '',
    Squid3: '',
    Squid4: '',
    TwitchUnity: '',
    TPcrunchyroll: '',
    EntropyWins: '',
    LUL: '',
    PowerUpR: '',
    PowerUpL: '',
    HSCheers: '',
    HSWP: '',
    DarkMode: '',
    TwitchVotes: '',
    TPFufun: '',
    RedTeam: '',
    GreenTeam: '',
    HappyJack: '',
    AngryJack: '',
    PurpleStar: '',
    FBtouchdown: '',
    PopCorn: '',
    TombRaid: '',
    EarthDay: '',
    PartyHat: '',
    MercyWing1: '',
    MercyWing2: '',
    PinkMercy: '',
    BisexualPride: '',
    LesbianPride: '',
    GayPride: '',
    TransgenderPride: '',
    AsexualPride: '',
    PansexualPride: '',
    TwitchRPG: '',
    IntersexPride: '',
    MaxLOL: '',
    NonBinaryPride: '',
    GenderFluidPride: '',
    FBRun: '',
    FBPass: '',
    FBSpiral: '',
    FBBlock: '',
    FBCatch: '',
    FBChallenge: '',
    FBPenalty: '',
    PeteZaroll: '',
    PeteZarollOdyssey: '',
    PixelBob: '',
    GunRun: '',
    HolidayCookie: '',
    HolidayLog: '',
    HolidayOrnament: '',
    HolidayPresent: '',
    HolidaySanta: '',
    HolidayTree: '',
    AquamanGG: ''
  }
};

//HELPER FUNCTIONS FOR CHAT GENERATOR

const generateRandomNumber = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

const globalEmoteArray = Object.keys(emotes.globalEmotes);

var randomBoolean = () => {
  let output = Math.random();
  return output >= 0.5;
};

const randomGlobalEmote = () => {
  const randomEmoteIndex = generateRandomNumber(0, 214);
  return globalEmoteArray[randomEmoteIndex];
};

const globalEmoteSpamGenerator = (repeatNum = 1) => {
  return `${randomGlobalEmote()} `.repeat(repeatNum);
};

const interjections = ['lmao', 'hahahahahahaha', 'wth', 'huzzah', 'whyyyy', 'aha', 'ahem', 'ahh', 'ahoy', 'alas', 'arg', 'aw', 'bam', 'bingo', 'blah', 'boo', 'bravo', 'brr', 'cheers', 'congrats', 'congratulations', 'dang', 'drat', 'darn', 'duh', 'eek', 'eh', 'encore', 'eureka', 'fiddlesticks', 'gadzooks', 'gee', 'gee whiz', 'golly', 'goodbye', 'goodness', 'good grief', 'gosh', 'haha', 'hah', 'hallelujah', 'hello', 'hey', 'hmm', 'holy buckets', 'holy cow', 'holy smokes', 'hon hon hon', 'hot dog', 'huh', 'humph', 'hurray', 'oh', 'oh dear', 'oh my', 'oh well', 'oops', 'ouch', 'ow', 'phew', 'phooey', 'pooh', 'pow', 'rats', 'shh', 'shoo', 'thanks', 'there', 'tut-tut', 'uh-uh', 'uh-oh', 'ugh', 'uhhh', 'wahoo', 'well', 'whoa', 'whoops', 'wow', 'yeah', 'yes', 'yikes', 'yippee', 'yo', 'yuck'];

const randomCasing = (string) => {
  return randomBoolean() ? string.toUpperCase() : string;
};

const randomPhraseGenerator = () => {
  const randomInterjection = interjections[generateRandomNumber(0, interjections.length - 1)];
  return randomCasing(randomInterjection);
};

const randomStatementGenerator = () => {
  const pronouns = ['you are', 'u r', 'he is', 'she is', 'they are', 'them is', 'this is', 'I am', 'we are', 'it is', 'that is'];
  const randomInterjection = interjections[generateRandomNumber(0, interjections.length - 1)];
  const randomPronoun = pronouns[generateRandomNumber(0, pronouns.length - 1)];
  const randomSentence = Sentencer.make('{{ adjective}}');
  return `${randomPronoun} ${randomCasing(randomSentence)}`;
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
    '10': `${randomStatementGenerator()} ${randomGlobalEmote()}`
  };
  return optionObj[generateRandomNumber(1, 10).toString()];
};

export const twitchChatGenerator = () => {
  return {
    chat: randomChatGenerator().trim(),
    user_id: generateRandomNumber(1, 501)
  };
};
