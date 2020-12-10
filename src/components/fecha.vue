<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
                reactive
                >
                <v-text-field slot="activator" v-model="date" label="Fecha de pago" color="success" prepend-icon="event" readonly/>
                <v-date-picker v-model="date" no-title scrollable value="h">
                <v-spacer></v-spacer>
                <v-btn flat color="success" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="success" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
            </v-menu>
        </v-flex>
    </v-layout>
</template>

<script>

  export default {
      created() {
          this.$store.state.fechas = this.date
      },
      updated() {
          this.$store.state.fechas = this.date
      },
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu:false,
    }),
    computed:{
        fecha(){
            var x = this.date
            this.$store.state.fechas = this.date
            return x

        }
    }
  }
</script>
