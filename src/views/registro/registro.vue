<template>
    <v-img  dark src="../img/portada.png" class="mp-none mb-4 portada" alt="portada" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">

        <v-layout row wrap class="d-flex justify-center align-center">
            
                <v-flex hidden-xs-only sm8 md3 lg3 px-2>
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
            <v-flex xs12 sm6 md5 d-flex align-center>
                <!--  -->
                <v-layout row wrap class="white pa-2 redondo">
                    <!--  -->
                    <!-- <h1 class="caption mb-2 white--text">Registrate gratis y gana dinero</h1> -->
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field value="" label="Nombre" color="info" v-model.trim="nombre"></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field value="" label="Apellido" color="info" v-model.trim="apellido"></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field value="" label="Pais" color="info" v-model.trim="pais"></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field value="" label="Correo" type="email" color="info" v-model.trim="correo"></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field
                                v-model.trim="password"
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
                    <v-flex xs12 sm6 lg4>
                        <div class="px-1">
                            <v-text-field
                                v-model.trim="password2"
                                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                :rules="[rules.required, rules.min]"
                                :type="show2 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Repite tu contraseña."
                                hint="Perfecto, contiene mas de 8 caracteres."
                                counter
                                @click:append="show2 = !show2"
                                color="info"
                            ></v-text-field>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <div class="text-xs-right">
                            <small class="pa-1 warning" v-if="this.$store.state.coreoExisente">Este correo ya esta en uso.</small>
                            <small class="pa-1 black--text">Al registrarte aceptas los <router-link to="/terminos-y-condiciones" class="black--text">Terminos y condiciones</router-link>. <br>
                            y las <router-link to="/politica-de-cookies" class="black--text">Politica de cookies</router-link></small>
                            <v-btn color="info" @click="anadirUsuario()" small><span class="em8">Registrar</span></v-btn>
                        </div>
                    </v-flex>
                    <v-dialog v-model="dialog" max-width="280" >
                        <v-card>
                            <v-card-title class="caption error--text">Error</v-card-title>

                            <v-card-text>
                                <ul>
                                    <li>Combre o apellidos son invalidos</li>
                                    <li>Sus contraseñas no coinciden o son menores a 8 caracteres</li>
                                    <li>Su correo no es valido</li>
                                    <li>Recuerde haber registrado su correo anteriormente</li>
                                </ul>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="info" flat="flat" @click="dialog = false" small>
                                <span class="em8">Entiendo</span>
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <!--  -->
                    <!-- <v-flex xs12 mt-4>
                        <v-card class="">
                            <div class="px-1">
                                <small>Contraseña</small>
                            </div>
                            <div class="px-1">
                                <small>Repetir contraseña</small>
                                <small class="error--text" v-if="noCoincide">Las contraseñas no coinciden.</small>
                            </div>
                        </v-card>
                    </v-flex> -->
    
                </v-layout>
    
            </v-flex>
    
        </v-layout>
  
      </v-img>

</template>
<script>
  export default {
      created() {
        //   if (this.$store.state.idreferido) {
            // }
        if (this.$route.params.id == 'none') {
            this.$store.commit('referidoid', 'none' )
        }else{
            this.$store.commit('referidoid', this.$route.params.id )
        }
        if (this.$store.state.idReferido != 'none') {
            // console.log('es distindo a none')
            this.$router.push(`/registro/${this.$store.state.idReferido}`)
        }else{
            // console.log('es none')
            this.$router.push('/registro/none')
        }

        if (this.$store.state.activo  == true) {
            this.activoV = true;
            this.$router.push('/pack')
        }
      },
    data () {
      return {
            activoV:false,
            dialog:false,
            show1: false,
            show2: false,
            nombre:'',
            apellido:'',
            pais:'',
            correo:'',
            password: '',
            password2: '',
            rules: {
            required: value => !!value || 'Requerido.',
            min: v => v.length >= 8 || 'Minimo 8 caracteres',
            emailMatch: () => ('The email and password you entered don\'t match')
            }
      }
    },
    watch: {
        '$route' (to, from) {
            if (this.$route.params.id== 'none') {
                this.$store.commit('referidoid', 'none')
                }else{
                this.$store.commit('referidoid', this.$route.params.id )
            }

        }
    },
    computed:{
        activo(){
            const x = this.$store.state.activo
            return x
        },
        confirm_activo(){
            if (this.$store.state.activo) {
                if(this.$store.state.activo == true){
                    this.$router.push('/pack')
                    return true
                }else{
                    return false
                }
            }
        },
        
    },
    methods:{
        anadirUsuario(){
            this.correo = this.correo.toLowerCase()
            this.nombre = this.nombre.toLowerCase()
            this.apellido = this.apellido.toLowerCase()
            this.pais = this.pais.toLowerCase()
            if (this.password != this.password2 || this.password.length < 8 || this.password == '') {
                // las contrasenas no son iguales
                this.dialog = true
            }else{
                if ( this.nombre.length < 3  || this.apellido.length < 3) {
                    this.dialog = true
                }else{
                    if (this.correo.includes('@gmail.com') || this.correo.includes('@hotmail.com')) {
                        this.$store.dispatch('crearUsuario',{
                            nombre: this.nombre,
                            apellido: this.apellido,
                            pais: this.pais,
                            correo:this.correo,
                            password:this.password,
                            password2:this.password2,
                            referido:{
                                id:this.$route.params.id
                            }
                        })
                        
                    }else{
                        this.dialog = true;
                    }
                }
            }
        }
    }
  }
</script>
