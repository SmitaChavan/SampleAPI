var express= require('express');
var app= express();
var port= process.env.port || 1337

app.get('/product', function(request, response)
{
    response.json({'Message':'Welcome'})
});

app.listen(port, function (params) {
    var datetime = new Date();
    var message = 'server running' +  port + 'date : ' + datetime;
    console.log(message);
    
})
