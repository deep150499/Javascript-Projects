const generate = () => {
    var quotes = {
        '― Aaron Lauritsen' : '“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”',

        '― C.S. Lewis' : '“I was not born to be free---I was born to adore and obey.”',

        '― John Galsworthy' : '“Life calls the tune, we dance.”',

        '― Jenny Valentine, Broken Soup' : '“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”'
    }

    var authors = Object.keys(quotes)
    var author = authors[Math.floor(Math.random()*authors.length)]


    var quote = quotes[author]

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}