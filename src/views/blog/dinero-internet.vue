<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Como ganar dinero en internet</h1>
            <p>Te dire como ganar dinero por internet a partir de ahora.</p>
        </div>
        <section>
            <div>
                <h2 class="my-4">AFILIACION</h2>
                <p>En internet hay muchas formas de ganar dinero. Desde ser afiliado (Como esta plataforma), hasta hacer encuestas.</p>
                <p>La mejor manera y la mas rapida es el sistema de afiliacion. Ese negocio donde te dan algo a vender (un producto) y por cada venta tu ganas un porcentaje de dinero.</p>
                <p><b>Te explico</b> , en la pagina de <router-link to="/">Dobledolar</router-link> Vendemos un curso donde explicamos como ganar dinero por internet y algunos consejs de como puedes hacerlo de manera eficiente y rapida.</p>
                <p>Puedes <router-link to="/entrar">loguearte</router-link> y comprar tu cuenta, esto te dara acceso al grupo, pero tambien te dara acceso a <b>Tu link de referidos</b>.</p>
                <div>
                    <h3 class="my-3">Que hacer con ese link?</h3>
                    <p>La plataforma te da la opcion de compartirlo en las redes sociales y por email, esto te dara acceso a muchas posibilidades de que alguien se interese en el curso o plataforma y <b>Termine comprando</b>.</p>
                    <p>Lo que hara que tu ganes una comision de <b>0.35$</b> por cada venta.</p>
                    <p>No puede ser con un curso, tambien puede ser con un producto, vendiendo por internet un producto de una tienda, amazon, cuentas, o algo parecido.</p>
                </div>
            </div>
            <div>
                <h2 class="my-4">VENTAS POR INTERNET</h2>
                <p>Esto requiere de conocimientos de <b>Marketing digital</b> Pues vender tu producto por internet requiere de bastante trabajo.</p>
                <p>Es algo parecido a la primera pero con <b>mas trabajo.</b> Porque mas trabajo? porque tienes que crear tu marca, hacer cuentas oficiales en redes sociales, crear marca, logos, entre otras cosas que llevan mas trabajo.</p>
                <h3 class="my-3">Es rentable?</h3>
                <p>La verdad es que si no tienes buena pasta en el bolsillo, y cuando digo <b>Buena pasta me refiero a una grande cantidad de dinero</b> entonces no lo intentaria.</p>
                <p>Aunque puedes vender cosas basicas por redes sociales y eso, pero si no son tus productos propios entonces es igual a decir que es por <b>AFILIACION</b></p>
            </div>
            <div>
                <h2 class="my-4">Con paginas web</h2>
                <p>Por experiencias propias, esta opcion es muy buena pero es a <b>largo plazo y con un conocimiento base.</b> Quiero decir que si buscas ganar dinero rapido con este metodo entonces <b>no lo creo.</b></p>
                <p><b>Te explico</b>: Para hacer una pagina web tienes que contar con conocimiento de programacion o minimo de worpress. 
                Este ultimo es un <b>CMS</b> que lo usa muchisimas personas (el mas usado). Pero aun asi tienes que tener conocimientos basicos de seo, dominios, de google adsense y otros.</p>
                <h3 class="my-3">Es rentable?</h3>
                <p>Depende, si haces una pagina web con tematica de <b>pajaros lindos</b> y tienes unas 10mil visitas al mes, posiblemente al mes ganes <b>5$</b> dependiendo de que parte de la geofrfia de tupublico.</p>
                <p>Si en cambio haces una <b>Aplicacion web</b>, (asi como <router-link to="/">Dobledolar</router-link>), que habla de dinero y vende cursos etc...</p>
                <p><b>Ganaras un poco mas</b> Pero depende de la cantidad de tu publico. <b>EJEMPLO:</b></p>
                <p>A <b>Dobledolar</b> Entran 20 personas diarias, es muy baja la audiencia por lo tanto, la ganancia es poca. Pero alta relativamente en comparacion con una web que hable de <b>Pajaros lindos</b> teniendo en cuenta que entren la misma cantidad de personas.</p>
                <p>Ademas que tambien hay posibilidad (baja, por la cantidad de personas) de que las pocas personas que esten entrando a la aplicacion, compre el curso y compartan su link de referidos. Esto se reduce a que aparte de la <b>publicidad, se gana tambien por ventas.</b></p>
            </div>
            <div>
                <h2 class="my-4">Conclusion</h2>
                <p>Ganar dinero por internet es posible, pero lleva esfuerzo y dedicacion y un poco de dinero.</p>
                <p>Lo mejor para empezar es por <b>Afiliacion</b>. y para ello la pagina de <router-link to="/">DOBLEDOLAR</router-link> Es una buena opcion para empezar a hacerte de conocimiento y saber como funcionan las cosas de este mundo.</p>
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