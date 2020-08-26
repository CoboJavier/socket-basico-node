var socket = io();
socket.on('connect', function() {
    console.log('Conectado con el servidor')
});

socket.on('disconnect', function() {
    console.log('Conexion con el servidor perdida')
});

//Envian informaicon

socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp)
});

//escuhar al servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje)
});