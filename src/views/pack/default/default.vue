<template>
        <v-layout row wrap justify-center>
            <!--  -->
            <v-flex xs12 class="pa-2 mb-2 white elevation-1">
                <v-layout row wrap align-center py-3>
                    <v-flex xs11>
                        <span class="grey--text caption"><b>GRUPOS DE FACEBOOK</b></span>
                    </v-flex>
                    <v-flex xs1 class="d-flex justify-end">
                        <v-icon icon flat color="grey" small>group</v-icon>
                    </v-flex>
                </v-layout>
                <!--  -->
                <v-layout row wrap align-center py-3>
                    <v-flex xs12 md4 lg3 class="icono-container tabla" v-for="(grupo, index) in this.MiContenido.grupos" :key="index">
                        <div class="d-flex align-center">
                            <v-btn flat icon :href="grupo.link" target="_blank">
                                <v-img contain  height="30" :src="grupo.icon" />
                            </v-btn>
                            <div class="mx-2">
                                <a :href="grupo.link" class="info--text em-07" target="_blank">{{grupo.name}}</a>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 class=" pa-2 mb-2 white elevation-1">
                <v-layout row wrap align-center py-3>
                    <v-flex xs11>
                        <span class="grey--text caption"><b>IMAGENES PARA DESCARGAR</b></span>
                    </v-flex>
                    <v-flex xs1 class="d-flex justify-end">
                        <v-icon icon flat color="grey" small>collections</v-icon>
                    </v-flex>
                </v-layout>
                <!--  -->
                <v-layout row wrap align-center class="none">
                    <v-flex class="none" xs12 sm6 md4 lg3 v-for="(imagen, index) in this.MiContenido.imagenes" :key="index">
                        <v-img class="ma-1" height="200" :src="imagen.url" alt="imagen de descarga"/>
                        <div class="text-xs-center">
                            <a class="grey--text" :href="imagen.url" target="_blank">Descargar imagen</a>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!--  -->
        </v-layout> 
</template>

<script>
        export default {
            created() {
                this.tipo = this.$store.state.datos.cuenta
                this.pedirComputed
            },
            data:()=>({
                Videos:false,
        
                packTextos:'',
                packgrupos:'',
                packImagenes:'',
                
                grupos:[],
                textos:[],
                imagenes:[],
        
                tipo:2,
            }),
            created() {
                this.$store.dispatch('contenido')
            },
            methods:{
                },
            computed:{
                MiContenido(){
                    return this.$store.state.miContenido
                },
            },
        
        }
        </script>