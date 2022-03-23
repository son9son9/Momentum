const quotes = [
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa"
    },
    {
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author : "Albert Einstein"
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero"
    },
    {
        quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author : "Bernard M. Baruch"
    },
    {
        quote : "Art is never finished, only abandoned.",
        author : "Leonardo da Vinci"
    },
    {
        quote : "The heaviness of being successful was replaced by the lightness of being a beginner again.",
        author : "Steve Jobs"
    },
    {
        quote : "To live is the rarest thing in the world. Most people exist, that is all.",
        author : "Oscar Wilde"
    },
    {
        quote : "It is better to be hated for what you are than to be loved for what you are not.",
        author : "Andre Gide"
    },
    {
        quote : "I have not failed. I've just found 10,000 ways that won't work.",
        author : "Thomas A. Edison"
    },
    {
        quote : "The man who does not read has no advantage over the man who cannot read.",
        author : "Mark Twain"
    },
]
// element variables
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
let copyQuote;

// quote index 가져오기, 인자 비어 있으면 랜덤으로 가져옴.
function quoteShuffler() {
    const ran = Math.floor((Math.random() * quotes.length));
    return quotes[ran];
}

// quote와 기존 quote 검사 후 반환
function getQuote() {
    let quote = quoteShuffler();

    while (quote == copyQuote) {
        //console.log(`${quote.author}, ${copyQuote.author}`);
        quote = quoteShuffler();
    }

    copyQuote = quote;
    return quote;
}

// 가져온 quote를 HTML에 출력
function displayQuote(q) {
    quote.innerHTML = `"${q.quote}"`;
    author.innerHTML = `- ${q.author}`;
}

displayQuote(getQuote());
setInterval(function() {
    document.querySelector("#quote").classList.add("fade-in");
    displayQuote(getQuote());
}, 10000);