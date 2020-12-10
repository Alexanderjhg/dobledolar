<template>
        <v-layout row wrap justify-center class="mp-n">
            <!--  -->
            <v-flex xs12>
                <v-card class=" pa-2">
                    <v-layout row wrap align-center py-1 grey--text>
                            <v-flex xs11>
                                <span class="caption">Videos</span>
                            </v-flex>
                        <v-flex xs1 class="d-flex justify-end">
                            <i class="fab fa-youtube"></i>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12> 
                <v-layout row wrap justify-center class="mp-n">
                    <v-flex xs12 sm6 mb-1 pa-1>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/u4bWxbUREHc" allowfullscreen></iframe>
                        </div>
                    </v-flex>
                </v-layout>
                
                 <v-layout row  wrap justify-center class="mp-n">
                    <v-flex xs12>
                        <v-card class=" pa-2">
                            <v-layout row wrap align-center py-1 >
                                <v-flex xs11>
                                    <span class="caption success--text" v-if="$store.state.datos.cuenta ==2">Consejos y tips</span>
                                    <span class="caption error--text" v-else>Activa tu cuenta para acceder a los videos</span>
                                </v-flex>
                                <v-flex xs1 class="d-flex justify-end">
                                    <i class="fab fa-youtube grey--text"></i>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
                
                
                <v-layout row wrap justify-center v-if="$store.state.datos.cuenta ==2" class="mp-n">
                    
                    <v-flex xs12 sm6  mb-1 pa-1>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QmQ8JNn1B3M" allowfullscreen></iframe>
                        </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/k2ziuA_DBs4" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oAALP0mbszw" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/b1HUs-WVJc8" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5L3GArEeTlQ" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/4kd7viwlg8k" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0yQ6M9jPSzw" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QmQ8JNn1B3M" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                </v-layout>
                
                <v-layout row wrap justify-center v-else>
                    
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Az34T15QDy8" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ai0mYOUz_Qs" allowfullscreen></iframe>
                                </div>

                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qFlIAagIAGo" allowfullscreen></iframe>
                                </div>

                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CWnl5a36f5o" allowfullscreen></iframe>
                                </div>

                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/i1yGaaelNOc" allowfullscreen></iframe>
                                </div>

                    </v-flex>
                    <!--  -->
                    <v-flex xs12 sm6  mb-1 pa-1>
                            <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/--kss4SIYxE" allowfullscreen></iframe>
                                </div>
                    </v-flex>
                </v-layout>
                

                
            </v-flex>
        </v-layout>
</template>
 <script>
     export default {
         data(){
             return {
                 VideosPro:false,
             }
         }
     }  
 </script>

 <style>
 
 .mp-n{
     margin: 0px;
     padding: 0px;
 }
 .embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}
 .embed-responsive::before{display:block;content:""}
 .embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}
 .embed-responsive-21by9::before{padding-top:42.857143%}
 .embed-responsive-16by9::before{padding-top:56.25%}
 .embed-responsive-4by3::before{padding-top:75%}
 .embed-responsive-1by1::before{padding-top:100%}
 
 </style>
