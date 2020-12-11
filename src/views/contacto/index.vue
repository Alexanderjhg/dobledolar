<template>
    <div>
        <v-layout row wrap mt-4 pa-4>
        <v-flex xs12 sm5 px-2>
          <v-img src="/img/yo.jpg" class="redondo"></v-img>
        </v-flex>
            <v-flex xs12 sm5 px-2 d-flex align-center text-xs-center>
          <div class="py-2">
            <v-layout row wrap mt-2 justify-center>
              <div>
                <span class="title font-weight-medium">¿Quien soy?</span>
              </div>
            </v-layout>
            <div class="py-1 ">
              <p class="caption grey--text">Mi nombre es <b>Alexander Hurtado</b>, creador de la plataforma
                <u>DobleDolar</u>. <br>
                Por mucho tiempo me dedique a <strong>generar dinero por internet</strong> y tambien me dedicaba a la
                programacion, se me ocurrio juntar las dos cosas en una sola y ha nacido <u>DobleDolar.</u> <br>
                Me esfuerzo mucho, cada cada dia para hacer el mejor programa con la mejor transparencia.</p>
              <v-btn class="em9" small outline color="info"
                href="https://www.linkedin.com/in/alexander-hurtado-b43216169/" target="_BLANK"><span class="em9">Ver
                  Perfil</span></v-btn>
            </div>
          </div>
        </v-flex>

        </v-layout>
        <Menu></Menu>
    </div>
</template>

<script>
  import Menu from "@/components/blog/menu"
  export default {
    components:{
      Menu
    } 
  }
</script> 