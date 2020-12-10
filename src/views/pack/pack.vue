<template>
<div>
    <div v-if="$store.state.activo">
        <div type="warning" class="pa-1 em8 warning" v-if="this.correoV">
            Por favor, la verificacion de correo es obligatoria. <v-btn color="white" @click="x()" flat small class="em8">Reenviar el correo</v-btn>
        </div>
    </div>
    <pack/>
</div>
</template>

<script>
    import pack from '@/components/pack/index.vue';

    export default {
        components:{
            pack
        },
        methods: {
            x(){
                this.$store.dispatch('EnviarCorreo')
            }
        },
        computed: {
            correoV(){
                if(this.$store.state.EmailVerificado == false){
                    return true
                }else{
                    return false
                }
            }
        },
    }
</script>