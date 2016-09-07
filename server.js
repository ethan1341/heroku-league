var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var bcrypt = require('bcrypt');
var async = require('async');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname));

//db settings
var connect = mongoose.connect('mongodb://ethan1341:ethan@ds019826.mlab.com:19826/heroku_tbzwd2cj', function(err) {console.log(err)})
var db = mongoose.connection;

db.once('open', function() {
  console.log('db opened')
});

var championSchema = new mongoose.Schema({
  championObject:Object
});

var itemSchema = new mongoose.Schema({
  itemObject:Object
});

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  salt: String
});

var newuserinfo = mongoose.model('userinformation', userSchema);
var championCollection = mongoose.model('championModel', championSchema);
var itemCollection = mongoose.model('Item', itemSchema);
//itemCollection = representation of collection championModel(s) name of the collection in the database championSchema is the schema of the inputted object
// Loads database with items
function getItems(){
  var options = {
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=all",
    qs: {
      api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
    },
    headers: {
      "User-Agent": "Champions"
    }
  }
  request(options, function(error, response, body) {
    var itemData = JSON.parse(body);
    for( key in itemData.data){
     var itemObject = new itemCollection({itemObject:itemData.data[key]});
      itemObject.save(function(err) {
        console.log(err)
        return success();
      })
    }
  })
}

//function success(){}
//getItems()
//Loads database with items
function getChampions(){
  var options = {
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image,info,stats,spells,tags",
    qs: {
      api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
    },
    headers: {
      "User-Agent": "Champions"
    }
  }
  request(options, function(error, response, body) {
    var championData = JSON.parse(body);
    for(key in championData.data){
      var championObject = new championCollection({championObject:championData.data[key]})
      championObject.save(function(err) {
        console.log(err)
        return success();
      })
    }
  })
}

//getChampions();

app.get('/', function(req,res){
    res.sendFile('index.html');
});

app.get('/champions', function(req,res){
  championCollection.find({},function(error, champions){
    res.send(champions)
  })
})

app.get('/items', function(req,res){
  itemCollection.find({}, function(error, items){
    res.send(items)
  })
})

app.get('/champions/detail/:id', function(req,res) {
  var id = parseInt(req.params.id);
  var query = championCollection.where({'championObject.id': id})
  query.find(function (err, data) {
    res.send(data)
  })
});
//Used to test post requests no longer used
app.post('/post',bodyParser.json(), function(req,res){
console.log(req);
});

//Nested get requests and use of async library...ugly refactor later
app.get('/lookup/matchhistory/:name',bodyParser.json(), function(req,res){
  var username = req.params.name.toLowerCase();
  var useresc = username.replace(/\s+/g, '');
  console.log(useresc)
  getUserId(useresc,res);

  function getUserId(username,res){
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
      if(verifiedUsername[username]){
        getMatchList(verifiedUsername[username].id,res)
      }else {
        //if(verifiedUsername.status.status_code == 404 || verifiedUsername.status.status_code == 403){
        return res.send(verifiedUsername.status.status_code);
      }
    });
  }

  function getMatchList(userId){
    console.log(userId)
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
      if(matchHistory.status == undefined) {
        // match history exists and did not hit API limit
        for(var i = 0; i < 2;i++){
          matchIdList.push(matchHistory.matches[i].matchId)
        }
        async.map(matchIdList, getMatchData, sendHistory);
      }else{
        console.log(matchHistory.status)
        return res.send(matchHistory.status.status_code);
      }
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

  function sendHistory(error,result){
    var error = {};
    error.status = null;
    var wasError = false;
    for(var i = 0; i < result.length;i++){
      if(result[i].status){
        console.log(result[i].status);
        wasError = true;
      }
    }
    if(wasError == true){
      error.status = 429;
      res.send(error.status)
    }else{
      res.send(result)
    }

  }
});

app.listen(process.env.PORT || 5000);




