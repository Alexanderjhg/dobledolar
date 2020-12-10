<template>
  <div class="about">
    
      <v-layout row wrap justify-center>
          <v-flex xs3 px-2 mt-4 pt-3 hidden-sm-and-down>
              <v-list class="redondo info" outline>
                  <v-list-tile avatar to="/pack/">
                    <i class="fa fa-home white--text"></i>
                      <v-list-tile-content>
                          <span class="caption white--text ml-2">
                              Casa
                          </span>
                      </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar href="/paypal-chekout/" rel="noopener noreferrer" v-if="$store.state.datos.cuenta == 1">
                        <i class="fab fa-paypal white--text"></i>
                        <v-list-tile-content>
                            <span class="caption white--text ml-2">
                                Activar tu cuenta
                            </span>
                                
                        </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar to="/pack/mis-pagos/">
                        <i class="fa fa-dollar-sign white--text"></i>
                        <v-list-tile-content>
                            <span class="caption white--text ml-2">
                                Mis pagos
                            </span>
                        </v-list-tile-content>
                  </v-list-tile>
                <v-list-tile avatar to="/pack/videos/">
                    <i class="fab fa-youtube white--text"></i>
                    <v-list-tile-content>
                        <span class="caption white--text ml-2">
                            Videos
                        </span>
                    </v-list-tile-content>
                </v-list-tile>
                  <v-list-tile avatar @click="$store.dispatch('salir')">
                        <i class="fa fa-sign-out-alt white--text"></i>
                        <v-list-tile-content>
                            <span class="caption white--text ml-2">
                                Salir
                            </span>
                        </v-list-tile-content>
                  </v-list-tile>
              </v-list>
          </v-flex>
          <v-flex xs12 md7>
              
              <v-layout row wrap justify-center>
                  <v-flex xs12 class="mb-2">
                      <v-layout row wrap justify-center>
                          <!--  -->
                          <v-layout row wrap justify-space-between>
                              <v-flex xs12 md6 lg4 mt-4 pt-3 pr-1>
                                  <v-card>
                                      <v-layout row wrap align-center>
                                          <v-flex xs12 md5 lg3 class="card-design pl-2">
                                              <v-card height="70" class="d-flex align-center text-xs-center elevation-3 info redondo" flat >
                                                  <i class="fab fa-paypal white--text"></i>
                                              </v-card>
                                          </v-flex>
                                          <v-flex class="text-xs-right pr-2">
                                              <div>
                                                  <span class="success--text em8">Saldo</span>
                                              </div>
                                              <div>
                                                  <span class="caption success--text">{{this.Misaldo}}$</span>
                                              </div>
                                              <div>
                                                  <div>
                                                      <span class="grey--text em8">Solicitar pago</span>
                                                  </div>
                                                  <div>
                                                      <span class="caption success--text hover" v-if="this.solicitarPago" @click="$store.dispatch('enviarMensajeSolicitud')"><u>Solicitar</u></span>
                                                      <span class="caption grey--text" v-else>No disponible</span>
                                                  </div>
                                              </div>
                                          </v-flex>
                                      </v-layout>
                                  </v-card>
                                  
                              </v-flex>
                              <v-flex xs12 md6 lg4 mt-4 pt-3 pr-1>
                                  <v-card>
                                      <v-layout row wrap align-center>
                                          <v-flex xs12 md5 lg3 class="card-design pl-2">
                                              <v-card height="70" class="d-flex align-center text-xs-center elevation-3 info redondo" flat >
                                                  <i class="fa fa-copy white--text"></i>
                                              </v-card>
                                          </v-flex>
                                          <v-flex class="text-xs-right pr-2">
                                              <div>
                                                  <div>
                                                      <span class="success--text em8">Enlace de referido</span>
                                                  </div>
                                                  <div>
                                                      <span class="caption success--text hover" v-if="this.textoCompra" @click="copiar()"><u><b>Click aqui para copiar</b></u></span>
                                                      <span class="caption success--text hover" v-else><u><a href="/paypal-chekout/"  rel="noopener noreferrer">Click para activar</a></u></span>
                                                  </div>
                                              </div>
                                              <div>
                                                  <div>
                                                      <span class="grey--text em8">Puedes ver videos</span>
                                                  </div>
                                                  <div>
                                                      <span class="caption grey--text hover"><u><router-link to="/pack/videos/" class="grey--text">Click para ver los videos</router-link></u></span>
                                                  </div>
                                              </div>
                                          </v-flex>
                                      </v-layout>
                                  </v-card>
                                  
                              </v-flex>
                              
                              <v-flex xs12 md6 lg4 mt-4 pt-3 pr-1>
                                  <v-card>
                                      <v-layout row wrap align-center>
                                          <v-flex xs12 md5 lg3 class="card-design pl-2">
                                              <v-card height="70" class="d-flex align-center text-xs-center elevation-3 info redondo" flat >
                                                  <i class="fa fa-layer-group white--text"></i>
                                              </v-card>
                                          </v-flex>
                                          <v-flex md7 lg9 class="text-xs-right pr-2 text-truncate">
                                              <div>
                                                  <div>
                                                      <span class="success--text em8">Referidos</span>
                                                  </div>
                                                  <div class="text-truncate">
                                                      <span class="caption success--text">{{$store.state.datos.saldo}}</span>
                                                  </div>
                                              </div>
                                              <div class="text-truncate">
                                                  <div class="text-truncate">
                                                      <span class="grey--text em8">Todos tus referidos desde siempre</span>
                                                  </div>
                                                  <div>
                                                      <span class="caption grey--text">{{$store.state.datos.referidos}}</span>
                                                  </div>
                                              </div>
                                          </v-flex>
                                      </v-layout>
                                  </v-card>
                                  
                              </v-flex>
                          </v-layout>
                          
                      </v-layout>
                  </v-flex>
                  <!--  -->
                  <v-flex xs12 class="d-flex justify-center"  v-if="this.$store.state.miContenido">
                      <router-view></router-view>
                      
                  </v-flex> 
              </v-layout>
          </v-flex>
      </v-layout>
    <!--  -->
    <v-layout row justify-center>
        <v-dialog v-model="$store.state.dialogPago" persistent max-width="290">
            <v-card>
                <v-card-title class="caption success--text">Ha solicitado un pago exitoso</v-card-title>
                <v-card-text class="caption">Su pago sera emitido lo mas rapido posible, <b>Maximo una semana</b>. Por favor, no solicite otro pago de lo contrario sera suspendido de la plataforma para siempre.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" flat @click="$store.state.dialogPago = false" small><span class="em8">Entiendo</span><i class="fab fa-paypal grey--text"></i></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
    <!--  -->
    <v-snackbar color="dark" v-model="snackbar" bottom="bottom" :timeout="3000" >
      Link copiado
    </v-snackbar>
  </div>
</template>


<script>
   
    export default {
    created() {
        this.tipo = this.$store.state.datos.cuenta
        this.pedirComputed
    },
    data:()=>({
        paypal: {
            sandbox: 'AViwI6X-BNTxaW019Ub14RfGxMEHRIIR4y2olaMUpkra3q9saM-Sb7dtxVmxs-b0a7jtuJgo5jJAecj_',
            production: 'EB5k8raKIh6ZiK_GYzGc7zP_cWcZLtfVTW6ez_vzOZpHQcYpFXsiJMshM2oazDXSvXTJWeICd-WEt6kZ'
        },
        snackbar:false,
        Videos:false,
        dialogPago:false,
        packTextos:'',
        packgrupos:'',
        packImagenes:'',
        
        grupos:[],
        textos:[],
        imagenes:[],
        
        tipo:2,
    }),
    created() {
        this.$store.getters.rutasCandado
        this.$store.dispatch('contenido')
    },
    methods:{
        copiar(){

            // Crea un campo de texto "oculto"
            var aux = document.createElement("input");

            // Asigna el contenido del elemento especificado al valor del campo
            aux.setAttribute("value", `https://dobledolar.firebaseapp.com/registro/${this.$store.state.datos.id}`);

            // Añade el campo a la página
            document.body.appendChild(aux);

            // Selecciona el contenido del campo
            aux.select();

            // Copia el texto seleccionado
            document.execCommand("copy");

            // Elimina el campo de la página
            document.body.removeChild(aux);
            this.snackbar = true
        },
        pedir(){
            var x = this.$store.state.rutas
            var y = this.$store.state.activo
            var z = this.$store.state.miContenido
            if (((x == '/pack' && y) || (y && x =='/pack/')) && !z ) {
                    this.$store.dispatch('contenido')
                }else{
                }
            return x
            
        },
    },
    computed:{
        
        Misaldo(){
            return this.$store.state.datos.saldo * 0.35
        },
        solicitarPago(){
            if (this.Misaldo<1.4) {
                return false
            }else{
                return true
            }
        },
        MiContenido(){
            return this.$store.state.miContenido
        },
        textoCompra(){
            if (this.$store.state.datos.cuenta == 1) {
                return false
            }else{
                return true
            }
        }
    },
    
}
</script>
<style>
    .btn-paypal{
        height: 30px;
    width: auto;
    opacity: 0;
    }
.icono{
    height: 30;
    width: 30px;
    border-radius: 50%;
}
.icono-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.em-07{
    font-size: 0.7em;
}
.none{
    margin: 0px;
    padding: 0px;
}
.tabla{
    display: flex;
    justify-content: start;
}
.card-design{
    position: relative;
    top: -30px;
}
</style>