<template>
    <div class=" my-2">
        <div class="text-xs-center my-4">
            <h1 class="mb-4">Quieres leer un poco e informarte que es lo mejor para ti?</h1>
            <p>He aqui unos post que te serviran mucho para el autoconocimiento de <b>Ganar dinero por internet</b></p>
        </div>
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