<template>
  <v-app>
    <!--  -->
    <!-- <v-navigation-drawer fixed clipped class="grey lighten-4" app v-model="drawer" v-if="this.activo"> -->
      <v-navigation-drawer fixed clipped class="grey lighten-4 hidden-md-and-up"  v-model="drawer">
          <v-list class="redondo" outline>
              <v-list-tile avatar to="/pack/">
                <i class="fa fa-home grey--text"></i>
                  <v-list-tile-content>
                      <span class="caption grey--text ml-2">
                          Casa
                      </span>
                  </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar href="/paypal-chekout/">
                    <i class="fab fa-paypal grey--text"></i>
                    <v-list-tile-content>
                        <span class="caption grey--text ml-2">
                            Activar tu cuenta
                        </span>
                    </v-list-tile-content>
              </v-list-tile>
              <v-list-tile avatar to="/pack/mis-pagos/">
                    <i class="fa fa-dollar-sign grey--text"></i>
                    <v-list-tile-content>
                        <span class="caption grey--text ml-2">
                            Mis pagos
                        </span>
                    </v-list-tile-content>
              </v-list-tile>
            <v-list-tile avatar to="/pack/videos/">
                <i class="fab fa-youtube grey--text"></i>
                <v-list-tile-content>
                    <span class="caption grey--text ml-2">
                        Videos
                    </span>
                </v-list-tile-content>
            </v-list-tile>
              <v-list-tile avatar @click="$store.dispatch('salir')">
                    <i class="fa fa-sign-out-alt grey--text"></i>
                    <v-list-tile-content>
                        <span class="caption grey--text ml-2">
                            Salir
                        </span>
                    </v-list-tile-content>
              </v-list-tile>
          </v-list>
    </v-navigation-drawer>
<!-- //  -->
    <v-toolbar color="white" app  clipped-left height="40">
      <v-toolbar-side-icon @click.native="drawer = !drawer" v-if="this.activo" class="hidden-md-and-up"></v-toolbar-side-icon>
      <!-- <span class="title ml-3">DobleDolar</span> -->
      <!-- <v-toolbar-title>DobleDolar</v-toolbar-title> -->
      <v-avatar size="30" color="grey" >
        <img src="/img/icons/favicon-32x32.png" alt="alt">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down ">
        <v-btn small flat color="grey" class="em8" to="/">Casa</v-btn>
        <v-btn small flat color="grey" class="em8" to="/comisiones-y-pagos">Comisiones y pagos</v-btn>
        <v-btn small flat color="info" class="em8" to="/pack/" v-if="this.activo">Mi cuenta</v-btn>
        <v-btn small flat color="grey" class="em8"  v-if="!this.activo" to="/entrar">Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn icon small>
          <router-link to="/" class="grey--text"><i class="fa fa-home grey--text"></i></router-link>
        </v-btn>

        <v-btn icon small>
            <router-link to="/comisiones-y-pagos" class="grey--text"><i class="fa fa-list-ol grey--text"></i></router-link>
          </v-btn>

        <v-btn icon small  v-if="this.activo" @click="$store.dispatch('salir')">
            <i class="fa fa-sign-out-alt grey--text"></i>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      
      <router-view/>
      <v-dialog v-model="this.$store.state.loadRegistro"  persistent width="300">
          <v-card color="info" dark >
              <v-card-text>
                <div class="text-xs-center">
                  <v-img height="52" contain src="https://firebasestorage.googleapis.com/v0/b/dobledolar.appspot.com/o/iconosDeLaAplicacion%2Fcoin.png?alt=media&token=adc6ac32-162a-4bca-9c32-0d74751f10a0"/>
                </div>
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
          </v-card>
      </v-dialog>
    </v-content> 

    <v-footer height="auto" color="white lighten-1" >
        <v-layout justify-center row wrap >
            <v-btn  color="info" flat round  v-for="(link, index) in links" :key="index" @click="$router.push(link.to)">
            {{ link.text }}
          </v-btn>
          
          <v-flex white lighten-2 py-3 text-xs-center xs12 >
            <strong>DobleDolar</strong>
          </v-flex>
        </v-layout>
      </v-footer>
  </v-app>
</template>

<script>
import{ mapState} from 'vuex';
export default {
  name: 'App',
  created() {
      this.$store.state.rutas = this.$route.path
      this.$store.dispatch('online')
  },
  data () {
    return {
      load:false,
      cuentaTipo:'',
      drawer: null,
      items: [
        { divider: true },
        { icon: 'home', text:'Inicio',link:'/pack'},
        { icon: 'video_library', text:'Videos',link:'/pack/videos'},
        { icon: 'done', text:'Mis pagos',link:'/pack/mis-pagos'},
      ],
      links: [
        {to:'/' ,text:'Casa'},
        {to:'/comisiones-y-pagos' ,text:'Comisiones y pagos'},
        {to:'/terminos-y-condiciones' ,text:'Terminos y condiciones'},
      ],
      rutas:'',
    }
  },
  watch: {
    '$route' (to, from) {
      
      this.$store.commit('estadoRuta',this.$route.path)
      if ((this.$store.state.rutas.includes('registro') && this.$store.state.activo) || (this.$store.state.rutas.includes('entrar') && this.$store.state.activo)) {
        // this.$store.state.idReferido = this.$route.params.id
        this.$router.push('/pack')
      }else{
          
        }
    }
  },
  computed:{
    activo(){
      var x = this.$store.state.activo;
      if (x && this.$route.path == '/entrar' || x && this.$route.path.includes('registro')) {
      this.$router.push('/pack')
      }
      return x
    },
    datos(){
      var x = this.$store.state.datos
      return x
    },
    tipoDeCuenta(){
      var x = this.$store.state.datos
      var y = 'Gratis';
      if (x.cuenta == 1) {
        y = 'Gratis'
        return y
        
      }else{
        if (x.cuenta == 2) {
          y = 'Pro'
          return y
        }else{

        }
      }
    },
  }
}
</script>
<style>
.redondo{
  border-radius: 3px;
  color: white
}
.mp-none{
  margin: 0px;
  padding: 0px;
}
.false-toolbar{
  height: 50px;
  margin: 10px 0px;
  widows: 100%;
}
.btn-toolbar{
  font-size: 0.8em;
  height: 20px;
  width: auto
}
.text-success{
  color: #4caf50
}
.rounded{
  border-radius: 10px
}
.em9{
  font-size: 0.9rem;
}
.em8{
  font-size: 0.8rem
}
.hover:hover{
  cursor: pointer;
}
</style>
