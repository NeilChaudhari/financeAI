const Twitter = require('twitter-lite');
/*
const apiKey = "i9moqkO9rZWyKGyl06PlmyXRR"
const secretKey = "UzU6MSLSIGMXOuQ4HojZgn08ltN2J2DQyvLDwDCOdb8fCft7uv"
*/
(async function() {
    const user = new Twitter({
        consumer_key: "i9moqkO9rZWyKGyl06PlmyXRR",
        consumer_secret: "UzU6MSLSIGMXOuQ4HojZgn08ltN2J2DQyvLDwDCOdb8fCft7uv",
    });

    try {
        let response = await user.getBearerToken();
        const app = new Twitter({
            bearer_token: response.access_token,
        });

        // Search for recent tweets from the twitter API
        response = await app.get(`/search/tweets`, {
            q: "AAPL", // The search term
            lang: "en",        // Let's only get English tweets
            count: 100,        // Limit the results to 100 tweets
        });

        // Loop over all the tweets and print the text
        for (tweet of response.statuses) {
            console.dir(tweet.text);
        }
    } catch(e) {
        console.log("There was an error calling the Twitter API");
        console.dir(e);
    }
})();