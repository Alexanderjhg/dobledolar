import Vue from 'vue'
import Vuetify , {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  transitions
} from 'vuetify/lib'

import 'vuetify/src/stylus/app.styl'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components:{
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VToolbar,
    transitions
  },
  directives: {
    Ripple
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#90ceff',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md',
})
