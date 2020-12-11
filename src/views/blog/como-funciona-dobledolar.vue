<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Como funciona la plataforma de dobledolar?</h1>
            <p>Es cierto que puedo ganar dinero con esta plataforma? que vende? que hace? como es? como gano?</p>
        </div>
        <section>
            <div>
                <h2 class="my-4">Lo primero que tienes que tener en mente es...</h2>
                <p>La plataforma vende un curso, este curso trata sobre como conseguir referidos. Y te da la opcion de aplicar lo aprendido justo con la plataforma.</p>
                <p>Bien, empecemos por el principio, <b>Esta pagina</b> habla sobre como puedes invertir un dolar pero en que? en donde? <br>
                Tu estas <b>Invirtiendo en el curso, en conocimiento sin invertir grandes cantidades de dinero</b>.</p>
                <div class="d-flex  align-center">
                    <div class=" align-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_zmubA5W18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <h3 class="my-3">"La plataforma me dice que puedo ganar dinero aqui!"</h3>
                    <p><b>Si, completamente cierto.</b> Eso te dicen, pero <b>Como pudes hacerlo?</b> <br>
                    La plataforma cuenta con un <b>enlace de afiliados</b>, osea que al comprar el curso, se te va a desbloquear ese enlace de afiliados. <br>
                    Y puedas poner a prueba ese curso que has comprado. Es decir, la plataforma te ha de vender un curso de marketing de afiliados y te da la opcion de que puedas llevarlo a la practica inmediatamente.</p>
                </div>
                <div>
                    <h3 class="my-3">Como funciona ese link?</h3>
                    <p>Una ves tengas acceso al link, puedes copiarlo y pegarlo en donde tu quieras, lo importante es conseguir trafico. <br>
                    Estas personas entran a travez de tu link de afiliados y compran el curso tambien. <b>Asi acabas ganando dinero con la plataforma.</b></p>
                </div>
                <div>
                    <h3 class="my-3">Pero, cuanto puedes llegar a ganar?</h3>
                    <p>La cantidad de personas a buscar <b>son ilimitadas</b>. Osea que puedes compartir tu link de afiliados y ganar mucho dinero como sea posible. <br>
                    Tienes un minimo de pago que cumplir, y es de 1.4$ USD. Esto es totalmente visible en tu <router-link to="/pack">panel de control.</router-link>.</p>
                    <p>Como puedes ver en la <router-link to="/">pagina de inicio</router-link> Hay capturas de pantalla donde varias personas se les ha cancelado <b>hasta mas de 5$.</b></p>
                </div>
                <div>
                    <h3 class="my-3">Cuantos usuarios tengo que tener para ganar 5$</h3>
                    <p>En la <router-link to="/comisiones-y-pagos/">Pagina de comisiones y pagos</router-link> Te dicen cuanto ganas por cada usuario que compre el curso.</p>
                    <p>Pero supongamos que lo que quieres saber es <b>cuanto necesitas para generar 5$</b>.</p>
                    <p>Cada usuario que <b>compre o active su cuenta</b> te dejara una ganancia de <b>0.35$.</b>. Facil de poner en tu calculadora (5 / 0.35) y te dara un resultado de <b>15 personas</b>.</p>
                </div>
                <div>
                    <h3 class="my-3">Es dificil conseguir 15 personas?</h3>
                    <p>Para ello es el curso, ademas que donde les digas a la personas que solo <b>Necesitan de un dolar paypal solamente</b>, lo encontraran mas atractivo que si le dices que necesitan de 5$ para invertir. <br>
                    Las personas quieren un negocio real, y para ello tienen que invertir, pero como invertir grandes cantidades de dinero si no estan seguros aun?</p>
                    <p>Es alli donde entra Dobledolar, la plataforma online donde no te arriesgas a perder mucho dinero. <br>
                    Donde haces un curso y lo pones en practica, si es de ser para ti. entonces te sera facil hacer muchas ventas en internet y esto quiere decir mas dinero. <br>
                    De lo contrario, solo habras perdido 1 solo dolar y no mas a diferencia de otras paginas webs.</p>
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