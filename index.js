const SMTPServer =  require('smtp-server').SMTPServer;
// we imported SMTPServer class from smtp-server module, why .SMTPServer? because SMTPServer is a class in smtp-server module

const server = new SMTPServer({
// we created a object of SMTPServer class and passed a object with some properties
    
    allowInsecureAuth: true,
    // allowInsecureAuth is a property of SMTPServer class, it is a boolean value, if it is true then it will allow insecure authentication, by default it is false
    authOptional: true,
    // authOptional is a property of SMTPServer class, it is a boolean value, if it is true then it will allow authentication to be optional, by default it is false

    onConnect(session,callback){
        // session is a object which contains the information of the session, it is a object of SMTPServerSession class
        // callback is a function which is used to accept the connection
        console.log(`onConnect`,session.id)
        console.log('A new connection has been established');
        callback(); // accepting the connection 
    },
    onMailFrom(address,session,callback){
        // address is a object which contains the information of the address, it is a object of Address class
        // can I name it anything? yes, you can name it anything

        console.log(`onMailFrom`,address.address,session.id);
        callback(); // accepting the mail from
    },
    onRcptTo(address,session,callback){
        console.log(`onRcptTo`,address.address,session.id);
        callback(); // accepting the mail to
    },
    onData(stream,session,callback){
         // stream is a object which contains the information of the stream, it is a object of Stream class, stream example: a file stream, a network stream, a buffer stream, stream means data? yes, stream means data

        stream.on('data',(data)=>{
        // on is a method of stream object, it is used to listen to the data event, data is a event of stream object, it is emitted when the stream is ready to read, when the stream is ready to read, it will emit the data event
        // data in () is a callback function, it is used to handle the data event, it is a arrow function, it is a function which is used to handle the data event, it is a callback function, it is a arrow function, it is a function which is used to handle the data event
        // can we remove arrow function and write simple one  
            console.log(`onData,${data.toString()}`);
            // data is a buffer, so we need to convert it into string, buffer means binary data

            stream.on('end',()=>{
                console.log('End of message');
                callback(); // accepting the message
            })
        })
    }

})

server.listen(25,()=>console.log('Server is running on port 25'))