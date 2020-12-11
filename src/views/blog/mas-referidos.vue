<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Como convertir mas con mi enlace de afiliacion</h1>
            <p>Compartir tu link en redes sociales no es necesario y te dire porque.</p>
        </div>
        <section>
            <div>
                <h2 class="my-4">"No quiero que vean quien soy"</h2>
                <p>Porque piensas eso, el error de muchas o la mayoria de personas es querer copiar un link y compartirlo pero no querer que le vean la cara.</p>
                <p>Pero <b>Ponte a analizar,</b> La gran cantidad de personas que estan buscando comprar un producto, quieren saber no solo del producto. <br>
                Quieren saber quien lo vende, o quien lo recomienda. Haste esta pregunta: <b>Porque los youtubers si ganan y tu no?</b>.</p>
                <p>No, no es por sus seguidores, y si asi lo fuera, tambien es porque <b>Ellos se graban</b>, ellos dan la cara y no tienen pena o miedo de vender en internet. <br>
                Creando confianza entre las personas y no solo le hacen vender mas, sino que tambien se ganan seguidores.</p>
                
                <div>
                    <h3 class="my-3">"Pero como? nadie vera mis videos"</h3>
                    <p>Un video es lo mas cercano que puedes estar a la otra persona que se encuentra en la otra perte del mundo. <br>
                    Hablo de su <b>Confianza</b>. O acaso no has visto que los estafadores no tienen cuentas oficiales, no tienen fotos, no tienen nada.</p>
                    <p>Evita que te estafen, pero sobre todo, <b>No des esa imagen de ti.</b> Se diferente, atrevete a hacer un video y subirlo para que te conozcan. <br>
                    La manera mas efectiva de ganar usuarios es hablandoles a travez de un video.</p>
                </div>
            </div>
            <div>
                <h2 class="my-4">"Como lo sabes?"</h2>
                <p>La pagina de <router-link to="/">Dobledolar</router-link> Me ha convertido mucho (mucho para mi), y es porque las personas estan viendo quien soy. <br>
                Lo que hago, a que me dedico, mis redes sociales. <b>Todo de mi en bandeja de plata.</b> Y todo para ganar su confianza (o la tuya) y poder hacer que esa persona termine comprando en mi plataforma.</p>
                <p>Ademas, no cuenta con muchos videos. Pero si tienen muchas vistas. Desde youtube he conseguido conversiones, unas 100 personas que han comprado aqui son de youtube. <br>
                Y todo porque me atrevi a hacer un video y subirlo. <b>Atrevete! Empieza a generar dinero en internet.</b></p>
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