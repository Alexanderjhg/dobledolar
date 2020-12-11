<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Es conveniente invertir en criptomonedas?</h1>
            <p>Si y no, Te dare mi opinion y tu decides si invertir o no.!</p>
        </div>
        <section>
            <div>
                <h2 class="my-4">La volatilidad</h2>
                <p>Yo no he invertido en criptomonedas (por ahora) porque no se muy vien del tema, pero lo que he podido investigar es que es un mercado <b>Muy volatil</b> <br>
                Que quiero decir con eso? en pocas palabras tienes que tener alto conocimientos de trading o sino puede ser arriesgado o estas jugando a la suerte.</p>
                <div>
                    <h3 class="my-3">"Pero algunas se mantienen"</h3>
                    <p>A eso me refiero, si te has hecho esta pregunta es porque te hace falta conocimiento, porque si has de tener no harias esa pregunta. <br>
                    Para entender esta simple pregunta. tienes que saber dos cosas:</p>
                </div>
            </div>
            <div>
                <h2 class="my-4">Debes investigar mucho</h2>
                <p>Tienes que saber en que invertir y tus conocimientos te diran eso. <b>Pero donde obtengo esos conocimientos?</b> <br>
                Puede ser de youtube (si los quieres gratis), con un curso basico de youtube de trading, puedes entender como funciona este mundo.</p>
                <p>Asi puedes saber porque algunas cripto se mantienen, y sabras que si lo hacen es porque la empresa ha tomado buenas decisiones. <br>
                Hablo de que la empresa ha sabido invertir, tiene buenas ventas, se mantiene <b>Estable</b> a lo que lleva que s cripto o la cripto se mantenga estable o suba de precio.</p>
            </div>
            <div>
                <h2 class="my-4">Tener mucho dinero</h2>
                <p>Si es cierto que algunas plataformas te dicen que puedes invertir desde unos pocos dolares. <b>Pero es rentable de esta forma?</b>. <br>
                No, no lo es, si inviertes poco ganas muy poco. pero muchisimo poco. yo recomendaria empezar con <b>200$ o 400$</b> porque si haces una buena inversion, estaras ganando buena pasta.</p>
            </div>
            <div>
                <h2 class="my-4">Conclusion</h2>
                <p>Yo no invierto en esto porque simplemente no tengo altos conocimientos en este tema. <br>
                Quizas y logre subir un curso en <router-link to="/">Dobledolar</router-link> y asi puedas obtener esos conocimientos de trading. <br>
                Mientras tanto quedemonos con las dudas y mejor invertimos en <router-link to="/registro/none">Dobledolar</router-link>, es mas seguro y no perdere tanto dinero.</p>
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