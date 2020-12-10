<template>
    <div class="about portada">
        <v-layout row wrap justify-center align-center>
            <v-flex xs12 sm8 md7 lg5 text-xs-center>
                <div class="mb-4">
                    <h1 class="title grey--text">DOBLEDOLAR | PAGO SEGURO</h1>
                </div>
                <span class="caption success--text">{{$store.state.datos.nombre}} Estas apunto de hacer el pago para activar tu cuenta. <br>
                    aparte de eso tendras acceso a mas videos y acceso a funciones de la plataforma.</span>
                <div id="paypal-button-container"></div>
                <span class="caption success--text">Si no puedes hacer el pago, comunitate con <a href="mailto:contact.doble.dolar@gmail.com">Nosotros aqui</a>.</span>
            </v-flex>
        </v-layout>
        <v-dialog v-model="$store.state.alert_paypal" persistent max-width="290">
            <v-card>
                <v-card-title class="caption success--text">Listo</v-card-title>
                <v-card-text class="caption grey--text">Tu cuenta ha sido activada con exito, Ahora has desbloqueado tu enlace de referidos. Preparate para ganar dinero por internet.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" flat href="/" small class="em8">Ir a mi cuenta</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '1.00'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                // console.log(store)
                // alert('Transaction completed by ' + details.payer.name.given_name);
                store.dispatch('paypal')
            });
        }
    }).render('#paypal-button-container');
    
    import store from '../../store'
    export default {

        created() {
            this.$store.dispatch('online')
            this.$store.getters.rutasCandado
        },






    }




</script>