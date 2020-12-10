<template>
  <div>
    <v-layout wrap >
      <!--  -->
      <v-flex xs12>
        <!--  -->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class=" pa-2">
                <v-layout row wrap justify-center>
                    <v-flex xs12>
                        <v-layout row wrap align-center py-1 grey--text>
                            <v-flex xs11>
                                <span class="caption">Tus pagos</span>
                            </v-flex>
                            <v-flex xs1 class="d-flex justify-end">
                                <i class="fa fa-dollar-sign"></i>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <!--  -->
        
        <v-layout row wrap>
          <v-flex xs12>
            <div class="text-xs-center mt-1" v-if="!$store.state.PagosRespuesta">
                <span class="caption pa-1 error redondo">Aun no tienes pagos</span>
            </div>
            <!-- <v-card class="pa-2 mb-1"> -->
            <v-card class="pa-2 mb-1" v-else>
              <v-layout row wrap>
                <v-flex xs12 text-xs-center v-for="(pago, index) in $store.state.PagosRespuesta" :key="index">
                  <v-layout row wrap class="grey mb-1 redondo">
                      <v-flex xs6 text-xs-center>
                        <div class="white--text">
                            <v-btn color="white" flat small><span class="caption">{{pago.nombre}}</span></v-btn>
                        </div>
                      </v-flex>
                      <v-flex xs6 text-xs-center>
                        <div class="white--text">
                            <v-btn color="white" flat small><span class="caption">{{pago.monto}}</span><i class="fa fa-dollar-sign"></i></v-btn>
                        </div>
                      </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <!--  -->
      </v-flex>
      <!--  -->
      <v-dialog v-model="dialog" width="500" >

        <v-card>

          <div>
            <v-card-title v-if="false" class="headline amber" primary-title >
              Pago fallido.
            </v-card-title>

            <v-card-title v-else class="headline success text-white" primary-title >
              Pago solicitado.
            </v-card-title>
          </div>

          <div>
            <v-card-text v-if="false">
              <div>
                Por favor, tiene que alcanzar el minimo de pado que es $50.
              </div>
            </v-card-text>

              <v-card-text v-else>
              <div>
                El pago se ha solicitado, un pago de $50 se enviara a la cuenta paypal en un plazo de 3 dias.
              </div>
            </v-card-text>

          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="false" color="error" flat @click="dialog = false" >
              Cerrar
            </v-btn>

            <v-btn v-else color="info" flat @click="dialog = false" >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-layout>
  </div>
</template>

<script>
  export default {
    created() {
      this.solicitarPagos
      this.$store.dispatch('PedirPagos')
    },
    data: () => ({
      dialog: false,
    }),
    methods:{
    },
    computed:{
        // solicitarPagos(){
        //   var x = this.$store.state.rutas
        //   var y = this.$store.state.activo
        //   var z = this.$store.state.PagosRespuesta
        //   if (((x == '/mis-pagos' && y) || (y && x =='/mis-pagos/')) && !z ) {
        //     this.$store.dispatch('PedirPagos')
        //     }else{
        //   }
        //   return x
        // },
        mis_pagos(){
          return this.$store.state.PagosRespuesta
        },
    },
  }
</script>