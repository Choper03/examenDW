const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/colegio');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexion'));
db.once('open', function(){
    console.log('conexion exitosa'); 
}); 

