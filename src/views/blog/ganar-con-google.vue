<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Gana 100$ diarios Con google traslate?</h1>
            <p>Analiza este video donde este chico te dice que ganaras 100$ con google traductor. Pero... Sera cierto?</p>
        </div>
        <section>
            <div>
                <h2 class="my-4">Lo primero que tienes que tener en mente es...</h2>
                <p><b>Las pruebas</b>: toda persona que te este presentando algun tipo de negocio, tiene que presentarte pruebas de que el ha ganado dinero con ese metodo. <br>
                Pero <b>No pruebas de paypal</b>, ya que estas son editables. Tiene que ser pruebas donde el mismo este ganando dinero o por lo menos un video donde el te muestra como lo ha hecho paso a paso.</p>
                <p><b>Te dice que el lo ha hecho o que imagina hacerlo</b>: Tienes que hacer que esa persona diga <b>Esta es la manera porque asi lo he hecho yo</b> en ves de <b>Si haces esto asi, ganaras mas de 200$ al dia</b>. <br>
                Porque digo esto? porque muchas personas se basan en lo que podria pasar, <b>En una teoria</b> y no en lo que pasa o ha pasado.</p>
                <div class="d-flex  align-center">
                    <div class=" align-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_zmubA5W18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <h3 class="my-3">Entonces, Le crees o no?</h3>
                    <p>A mi parecer no dice la verdad, el no se ha puesto en los zapatos de otras personas, solo es un <b>Creador de contenido mas</b>. <br>
                    No cumple con los requisitos para creerle, te apuesto a que si haces eso que el te esta diciendo <b>Perderas el tiempo.</b></p>
                    <p>Pero te digo como no puedes perder el tiempo? <b>Con <router-link to="/">Dobledolar</router-link></b> Cree en las cosas verdaderas, no en cosas falsas.</p>
                </div>
            </div>
        </section>
        <section>
            <Menu></Menu>
        </section>
    </div>
</template>
<script>
    import Menu from '@/components/blog/menu'
    export default {
        components:{
            Menu
        },
        data (){
            return {
                item:4
            }
        }
    }
</script>