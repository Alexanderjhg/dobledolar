<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/dobledolar.png" ></v-img>

                <v-card-title><h2>Como funciona dobledolar</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Es posible generar dinero con esta plataforma?</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/como-funciona-dobledolar/" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/ganar-dinero.png" ></v-img>

                <v-card-title><h2>Opciones para ganar dinero</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Cual es la mejor manera de ganar dinero en internet</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/ganar-dinero-por-internet" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/clipclaps.png" ></v-img>

                <v-card-title><h2>Gana 1 dolar gratis con una app</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Ganate 1 dolar y retira inmediatamente 0.10$ gratis.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/clipclaps" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/estafadores.png" ></v-img>

                <v-card-title><h2>Detectar estafadores</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Gana dinero con google 100$ diarios. Falso?</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/detectar-estafadores" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/referidos.png" ></v-img>

                <v-card-title><h2>Ganar mas dinero por afiliacion</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Hacer las cosas muy bien, es ganar mas dinero</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/mas-referidos" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg4 pa-1>
            <v-card class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="/img/blog/criptos.png" ></v-img>

                <v-card-title><h2>Son rentables las criptomonedas?</h2></v-card-title>

                <v-card-text>
                    <div class="mx-0" >
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                    </div>
                    <div>Mi opinion sobre las criptomonedas</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                <v-btn color="secondary lighten-2" to="/blog/mi-opinion-sobre-las-criptomonedas/" >Ver ahora</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data (){
            return {
                item:2
            }
        }
    }
</script>