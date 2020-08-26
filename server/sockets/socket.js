const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado')

    //Envian info al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta App'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado')
    });

    //escuhar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data)

        client.broadcast, emit('enviarMensaje', data)


        /*
                if (mensaje.usuario) {
                    callback({
                        respuesya: 'TODO OK'
                    });
                } else {
                    callback({
                        respuesya: 'TODO MAL'
                    });
                }
        */

    });


});