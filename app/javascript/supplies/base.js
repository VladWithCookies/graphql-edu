import { Supply } from 'vue-supply'
import apolloProvider from '../apollo'

export default {
  extends: Supply,
  apolloProvider,
  apollo: {
    $skipAll () {
      return !this.active
    }
  }
}
