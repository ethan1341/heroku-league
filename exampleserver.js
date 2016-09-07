// Match History
//Parses the username
//Get Request gives name returns player ID
//Get Request player ID gives match History
//Pulls multiple match IDS adds them to an array
//maps get request for match details



function getUserId(username){
    var options = {
        method: "GET",
        url: "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + username,
        qs: {
            api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
        },
        headers: {
            "User-Agent": "usernames"
        }
    }

    request(options, function(error, response, body) {
        var verifiedUsername = JSON.parse(body);
        var userid = verifiedUsername[useresc].id;
    });
}

function getMatchList(userId){
    // Will hit no errors
    var option = {
        method: "GET",
        url: "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/" + userId,
        qs: {
            api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
        },
        headers: {
            "User-Agent": "userid"
        }
    }
    request(option, function(error, response, body) {
        var matchIdList = [];
        var matchHistory = JSON.parse(body);
        for(var i = 0; i <= 0;i++){
            matchIdList.push(matchHistory.matches[i].matchId)
        }
        async.map(matchIdList, getMatches, sendHistory);
    })
}

function getMatchData(matchId, callback){
    var options = {
        method: "GET",
        url: "https://global.api.pvp.net/api/lol/na/v2.2/match/"+matchId,
        qs: {
            api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
        },
        headers: {
            "User-Agent": "Champions"
        }
    }
    request(options, function(error, response, body) {
        var matchData = JSON.parse(body);
        callback(null,matchData)
    })
}

