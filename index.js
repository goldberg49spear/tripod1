var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

app.use(express.static(__dirname +'/styles.css'));
//app.use(express.static(__dirname +'/bootstrap-3.3.7//dist/js/bootstrap.min.css'));
//app.use(express.static(__dirname +'/bootstrap-3.3.7//dist/js/bootstrap.min.js'));
app.use(express.static(__dirname +'/samplehtml.html'));


app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    //var result = 'App is running'
    response.sendFile(__dirname+'/samplehtml.html');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

//app.get('/', function(request, response) {
//  response.render('samplehtml.html')
//});

//app.get('/update', function(req, res) {
//  pg.connect(process.env.DATABASE_URL, function (err, conn, done) {
        // watch for any connect issues
//        if (err)  
//		{console.log(err);
//			 res.status(400).json({error: err.message});}
        
                
 //               else {
//
//					alert("working");
//					conn.query(
//          'SELECT firstName,LastName,Phone,MobilePhone from salesforce14.Contact'            
//              );
					
					
//              done();
//             res.json(result);
//           }
//    }
//   );
//  });


//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});
