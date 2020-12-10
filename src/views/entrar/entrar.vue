<template>
        <v-img  dark src="../img/portada.png" class="mp-none mb-4 portada" alt="portada" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">

            <v-layout justify-center row wrap class="align-center">
                
                <v-flex xs12 sm8 md5 lg6 px-2>
                    <div class="">
                        <v-layout row wrap justify-center>
                            <div class="info icon-card elevation-4 my-1 title">
                                <i class="fab fa-paypal white--text"></i>
                            </div>
                        </v-layout>
                        <v-layout row wrap justify-center>
                            <div>
                                <span class="subheading font-weight-medium white--text">Gana dinero online</span>
                            </div>
                        </v-layout>
                        <div class=" px-2 text-xs-center">
                            <p class="caption white--text">Para ganar dinero online tienes que practicar, hazlo con el menor costo sin miedo a perder.</p>
                        </div>
                    </div>
                </v-flex>
                <v-flex xs12 sm8 md5 d-flex justify-center align-center>
                    <!--  -->
                    <v-layout row wrap justify-center class="white pa-2 redondo mp-none">
                        <!--  -->
                        <!-- <h1 class="caption mb-2 white--text">Registrate gratis y gana dinero</h1> -->
                        <v-flex xs12 sm6>
                            <div class="px-1">
                                    <v-text-field value="" label="Correo" color="info" v-model.trim="correo"></v-text-field>
                            </div>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <div class="px-1">
                                    <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Introduce una contraseña segura."
                                    hint="Perfecto, contiene mas de 8 caracteres."
                                    counter
                                    @click:append="show1 = !show1"
                                    color="info"
                                ></v-text-field>
                            </div>
                        </v-flex>
                        <v-flex xs12>
                            <div class="text-xs-right">
                                <v-btn small class="em8" color="info" :to="`/registro/${$store.state.idReferido}`">Registro</v-btn>
                                <v-btn small class="em8" color="info" @click="logearse()">Entrar</v-btn>
                            </div>
                        </v-flex>

                    </v-layout>
        
                </v-flex>
                <v-dialog v-model="error" persistent max-width="290">
                    <v-card>
                        <v-card-title class="caption error--text">Error</v-card-title>
                        <v-card-text>
                            <ul>
                                <li>Que su <b>correo sea correcto.</b></li>
                                <li>Que su <b>contraseña sea correcta.</b></li>
                                <li>Recuerde si fue <b>HOTMAIL</b> o <b>GMAIL</b>.</li>
                                <li>Recuerde si se a registrado antes en esta plataforma.</li>
                            </ul>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="info" flat @click="cerrarError()" small class="em8">Aceptar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
      
          </v-img>

</template>
<script>
  export default {
    data () {
      return {
        show1: false,
        password: '',
        correo:'',
        rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }

    },
    methods:{
        logearse(){
            this.$store.dispatch('loguearse',{
                correo:this.correo,
                contrasena:this.password
            })
        },
        cerrarError(){
            this.$store.state.errorEntrar = false;
        }
    },
    created() {
        this.redirect
    },
    computed:{
        // redirect(){
        //     if(this.$store.state.datos){
        //         this.$router.push('/pack/')
        //     }
        // },
        activo(){
            const x = this.$store.state.activo
            return x
        },
        error(){
            if (this.$store.state.errorEntrar) {
                return true

            }else{
                return false

            }
        }
    }
  }
</script>