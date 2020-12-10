
firebase.initializeApp({
    apiKey: "AIzaSyD0EK3QwPfCnj3eG9pSaqirpoucBYxyG5o",
    authDomain: "dobledolar.firebaseapp.com",
    databaseURL: "https://dobledolar.firebaseio.com",
    projectId: "dobledolar",
    storageBucket: "dobledolar.appspot.com",
    messagingSenderId: "690018507415"
  });
  var db = firebase.firestore();
  import Vue from 'vue';
  import Vuex from 'vuex';
  import router from './router'
  Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datos:false,//datos del usuario
    activo:false,//en linea
    loadRegistro:false,//barra de carga
    
    errorEntrar:false,//error al entrar

    EmailVerificado:false,//email

    coreoExisente:false,//reguistro fallido, correo existente.

    PagosRespuesta:null,//pa pestana de "mis-pagos necesita estos datos aparte"
    
    idReferido:'none',//referido

    dialogPago:false,//

    misReferidos:[],
    // 
    

    miContenido:false,//mi pack e imagenes y grupos

    
    alert_paypal:false,

    // rutas
    rutas:router.currentRoute.path,
    
  },
  mutations: {
    referidoid(state, x){
      if (x == 'none') {
        state.idReferido = 'none'
        console.log('none')
      }else{
        state.idReferido = x
        if (state.idReferido != 'none' && state.idReferido != null) {
          console.log(state.idReferido)
          
        }
      }
    },
    
    referidosSolicitados(state , x){
      state.misReferidos.push(x)
      state.loadRegistro = false;
    },
    estadoRuta(state,x){
      state.rutas = x

      if (x == '/registro' || x == '/registro/') {
        router.push('registro/none')
      }
      if ((x == '/entrar' && state.activo) || (x == '/entrar/' && state.activo) ) {
        router.push('/pack')
      }
    },

  },
  getters:{
    // entrar:state=>{
    //   if(state.rutas.includes('entrar')){
    //     router.push('/pack/')
    //   }
    // },
    ruta:state=>{
      return state.idReferido
    },
    rutasCandado:state=>{
      const y = state.rutas;
      firebase.auth().onAuthStateChanged(function(user) {//preguntar a firebase si el usuario esta en linea aun.
        if (user) {
          // {
          if(y.includes('entrar') || y.includes('registro')){
            router.push('/pack/')
          }else{

          }
          // }
        }else{
          router.push('/')
          if(y.includes('paypal-chekout')){
            router.push('/')
          }else{

          }
        }
      })
    }
  },
  actions: {
    paypal(context){
      console.log(context.state.datos.referido.id)
      const x ={
        id_referido:context.state.datos.referido.id,
        id:context.state.datos.id
      }
      db.runTransaction(function(transaction) {
          return transaction.get(db.collection("users").doc( x.id_referido )).then(function(sfDoc) {
              if (!sfDoc.exists) {
                  throw "Document does not exist!";
              }
  
              var newReferido = sfDoc.data().saldo + 1;
              transaction.update(db.collection("users").doc( x.id_referido ), { saldo: newReferido });
          });
      }).then(function() {
          console.log('se le a;adio un referido y saldo a el')
          // console.log("Transaction successfully committed!");
      })
      
      // Set the "capital" field of the city 'DC'
      db.collection("users").doc(x.id).update({
          cuenta: 2
      })
      .then(function() {
        console.log('Cuenta cambiada')
        context.state.alert_paypal = true
      })
      .catch(function(error) {
        console.log('error en cambiar cuenta')
      });
      // 


    },
    salir(context){//funcion de salir de la plataforma
      context.state.loadRegistro = true//activar barra de carga
      const x= context.state.rutas
      firebase.auth().signOut().then(function() {//si se salio correctamente
        router.push('/entrar')
        context.state.loadRegistro = false//quitar barra de carga
        context.state.datos = false;
      }).catch(()=>{
        context.state.loadRegistro = false
      })
    },
    enviarMensajeSolicitud(context){
      context.state.loadRegistro = true
      db.collection("mensajes-solicitud").add({
        correo:context.state.datos.correo,
        fecha:new Date().toISOString().toString(),
        mensaje:'He solicitado un pago.',
        nombre: context.state.datos.nombre,
        tipo:1,
        cuenta: context.state.datos.cuenta,
        titulo:'Pago',
        saldo:context.state.datos.saldo,
        id:context.state.datos.id,
        referido:context.state.datos.referido.id
      }).then(()=>{
        context.state.loadRegistro = false
        context.state.dialogPago = true
      }).catch(()=>{
        context.state.loadRegistro = false
      })
      
    },
    EnviarCorreo(context){
      var userx = firebase.auth().currentUser;
      userx.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {

        // An error happened.
      });
    },
    crearUsuario(context , x){
      context.state.loadRegistro = true;//activa la barra de carga
      var y = x;//obtiene los datos que le estamos pasando desde el registro
      firebase.auth().createUserWithEmailAndPassword(y.correo, y.password).then(function(x){//registrar usuario
        
        db.collection("users").doc(x.uid).set({//obtener la "uid" del nuevo usuario y escribirla en "firestore"
            id:x.uid,
            nombre : y.nombre,
            apellido : y.apellido,
            pais : y.pais,
            correo : y.correo,
            clave : y.password,
            cuenta:1,// 1 = gratis, 2 = pro
            estado:'activo',
            // mensaje:true,
            saldo:0,
            referidos:0,
            active:{
              'sesiones' : 0,
              'emailVerified':false
            },
            fecha: new Date().toISOString().toString(),
            mes: 0,
            dia: new Date().getDate(),
            anno: new Date().getFullYear(),
            referido:{
              id:y.referido.id
            },
            sesiones:0
          })
          .then(function(docRef) {//si es escribe correctamente
                context.state.loadRegistro = false//la brra de carga se quita
                // 
                if (y.referido.id == 'none' || y.referido.id == 'none/') {
                  
                }else{
                  db.collection("users").doc(y.referido.id).collection("referidos").add({
                    id:y.referido.id,
                    fecha:new Date().toISOString().toString()
                  })

                  // Se le a#ade un referido mas al contador de referidos.
                  var referidodir = db.collection("users").doc( y.referido.id );
                  return db.runTransaction(function(transaction) {
                      return transaction.get(referidodir).then(function(sfDoc) {
                          if (!sfDoc.exists) {
                              throw "Document does not exist!";
                          }

                          var newReferido = sfDoc.data().referidos + 1;
                          transaction.update(referidodir, { referidos: newReferido });
                      });
                  }).then(function() {
                      // console.log("Transaction successfully committed!");
                  }).catch(function(error) {
                      // console.log("Transaction failed: ", error);
                  });
                  
                  
                }
                  var userx = firebase.auth().currentUser;
                  userx.sendEmailVerification().then(function() {
                    // Email sent.
                  }).catch(function(error) {

                    // An error happened.
                  });
                // 
          }).catch(function(error) {//si hay un error
              context.state.loadRegistro = false//la barra de carga se quita
            });

      }).catch(function(error) {//si hay problema con el usuario nuevo
        if (error.code) {
          context.state.coreoExisente = true//correo existente
        }
        context.state.loadRegistro = false//quitar barra de carga
      });
    },

    loguearse(context, x){//funcion para iniciar sesion
      context.state.loadRegistro = true;//barra de carga activa
      firebase.auth().signInWithEmailAndPassword(x.correo,x.contrasena).then((x)=>{//si el registro fue un exito
        var Direccion = db.collection("users").doc(x.uid);
        db.runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(Direccion).then(function(respuesta) {
                if (!respuesta.exists) {
                    throw "Document does not exist!";
                }

                var nuevaEntrada = respuesta.data().sesiones + 1;
                transaction.update(Direccion, { sesiones: nuevaEntrada });
            });
        })
        context.state.loadRegistro = false;//ocultar barra de carga
        router.push('/pack/')
        context.state.activo = true//el usuario est activo
      }).catch(function(error) {//si hay un error
        context.state.loadRegistro = false;//ocultar barra de carga
        context.state.errorEntrar = true;//alerta de inicio de sesion fallida
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });
    },
    contenido(context){
      context.state.loadRegistro = true
      if (context.state.datos.cuenta == 1) {
        db.collection("gratuito").doc("RCw2X9DCTkhKchyASaAF").get().then((doc) => {//preguntar los datos del usuario en la bse de datos
          if (doc.exists) {//si a lo que nos referimos existe...
            context.state.loadRegistro = false
            context.state.miContenido = doc.data()//guardar los datos en la variable "datos"
          } else {//si no existe
            
            context.state.loadRegistro = false
            //escribir condiciones
          }
        }).catch((x)=>{//si no se ha podido preguntar nada//
          //escribir condiciones
          
          context.state.loadRegistro = false
        })
        
      }else{
        if(context.state.datos.cuenta == 2){
          db.collection("pro").doc("87x7oCidDMTTu5u1USTt").get().then((doc) => {//preguntar los datos del usuario en la bse de datos
            if (doc.exists) {//si a lo que nos referimos existe...
              context.state.loadRegistro = false
              context.state.miContenido = doc.data()//guardar los datos en la variable "datos"
            } else {//si no existe
              
              context.state.loadRegistro = false
              //escribir condiciones
            }
          }).catch((x)=>{//si no se ha podido preguntar nada//
            //escribir condiciones
            
            context.state.loadRegistro = false
          })

        }else{
          
          context.state.loadRegistro = false

        }
      }
    },
    online(context){
      firebase.auth().onAuthStateChanged(function(user) {//preguntar a firebase si el usuario esta en linea aun.
        if (user) {
          context.state.activo = true
          
          context.state.EmailVerificado = user.emailVerified
          db.collection("users").doc(user.uid).get().then((doc) => {
            
            context.state.datos = doc.data()
          }).then(()=>{
            
            context.dispatch('contenido')
          })
        }else{
          context.state.activo = false
        }
      })
    },
    PedirPagos(context){
      context.state.loadRegistro = true
      context.state.PagosRespuesta = []
      db.collection("users").doc(context.state.datos.id).collection("pagos").orderBy("fecha", "desc").get().then((x) => {//
        x.forEach((doc)=>{
          // context.commit('pagosSolicitados' , doc.data())
          context.state.PagosRespuesta.push(doc.data())
          console.log(doc.data())
        })
        context.state.loadRegistro = false
      }).catch((x)=>{//si no se ha podido preguntar nada//
        // context.commit('pagosSolicitados', false)
        context.state.loadRegistro = false
        //escribir condiciones
      })
    },
  },
});
