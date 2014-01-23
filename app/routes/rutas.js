
module.exports = function(app){
    
    app.get('/', function(req, res){
        console.log('Método Get')
    res.sendfile('./public/index.html');
    
        });
    
    app.post('/', function (req, res){
        console.log('Método Post ')    
    });
    
    
}
   