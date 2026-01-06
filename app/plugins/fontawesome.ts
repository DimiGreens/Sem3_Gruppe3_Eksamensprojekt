import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons (du har dem allerede)
import { fas } from '@fortawesome/free-solid-svg-icons'

// Brand icons (Facebook, Instagram, TikTok osv.)
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// Tilføj både solid og brand ikoner
library.add(fas, fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
