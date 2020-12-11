<template>
    <div class="about">
      <v-img  dark src="/img/portada.png" class="mp-none mb-4 portada" alt="portada" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
        <v-layout align-center column justify-center class="mp-none">
          <div class="text-xs-center pa-4 ">
            <h1 class="display-1 font-weight-bold mb-3 white--text">DOBLEDOLAR | COMISIONES Y PAGOS</h1>
            <h4 class="subheading white--text">Lo que tienes que saber.</h4>
            <v-btn class="em9" small outline color="white" to="/entrar/">Aprende</v-btn>
          </div>
        </v-layout>
  
      </v-img>
  
      <v-container fluid grid-list-xs>
        <v-layout row wrap class="justify-center">
            <v-flex xs12 sm10 md10 lg10 class="my-3 text-xs-center">
              <h2>COMISIONES</h2>
            </v-flex>
            <!--  -->
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                  <div class="info icon-card elevation-4 my-1 title">
                    <i class="fab fa-paypal white--text"></i>
                  </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">Comision de PayPal</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                  <p class="caption grey--text">Al comprar tu cuenta, paypal se queda con una comision de <b>0.35$</b>.</p>
                </div>
              </div>
            </v-flex>
  
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                    <div class="info icon-card elevation-4 my-1 title">
                        <i class="fa fa-percentage white--text"></i>
                    </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">0.35$ Para ti</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                  <p class="caption grey--text">La comision que se te otorga a ti es de <b>0.35$</b>, esa cantidad va a tu saldo.</p>
                </div>
              </div>
            </v-flex>
  
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                    <div class="info icon-card elevation-4 my-1 title">
                        <i class="fa fa-mitten white--text"></i>
                    </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">0.30$ Para mi</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                  <p class="caption grey--text">La plataforma se queda con la mas pequeña comision de <b>0.30$</b> por ser el internediario.</p>
                </div>
              </div>
            </v-flex>
  
            
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap class="justify-center">
  
          <v-flex xs12 sm10 md10 lg10 class="my-3 text-xs-center">
            <h2>PAGOS</h2>
          </v-flex>
            <!--  -->
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                  <div class="info icon-card elevation-4 my-1 title">
                    <i class="fas fa-chart-pie white--text"></i>
                  </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">Minimo de pago</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                  <p class="caption grey--text">Podras solicitar cuando alcances un minimo de <b class="white--text info pa-1 redondo">1.4$</b> en el saldo de la plataforma.</p>
                </div>
                
              </div>
            </v-flex>
  
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                    <div class="info icon-card elevation-4 my-1 title">
                        <i class="fa fa-check white--text"></i>
                    </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">Minimo recomendado</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                    <p class="caption grey--text">Recomiendo un minimo de pago de <b class="white--text info pa-1 redondo">5.00$</b> debido a las comisiones de paypal cobra por su servicio.</p>
                </div>
                
              </div>
            </v-flex>
  
            <v-flex xs12 sm5 md3 lg3 px-2 pb-3 >
              <div class=" py-2">
  
                <v-layout row wrap justify-center>
                    <div class="info icon-card elevation-4 my-1 title">
                        <i class="fab fa-cc-paypal white--text"></i>
                    </div>
                </v-layout>
                <v-layout row wrap justify-center>
                  <div>
                    <span class="subheading font-weight-medium">Tu pagas tu comision</span>
                  </div>
                </v-layout>
                <div class="py-1 px-2 text-xs-center">
                  <p class="caption grey--text">Cuando es depositado el dinero a tu cuenta, paypal se encarga de cobrarte la comision <b>a ti</b>.</p>
                </div>
                
              </div>
            </v-flex>
  
            
        </v-layout>
      </v-container>
      
    </div>
  </template>
  <script>
  export default {
    metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    }
  }
</script> 
  <style>
  
    .text-black{
      color: black
    }
    .transparenteN{
      background: #000000ad
    }
    .card-alto{
      height: 430px;
    }
    .portada{
      height: 100vh;
      display: flex;
      align-items: center;
    }
  
    .new-card{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .icon-card{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>