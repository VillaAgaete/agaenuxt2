import { createApp } from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

export default function (context, inject) {
  const app = createApp(context.app)
  app.use(VuePlyr, {
    plyr: {}
  })
}