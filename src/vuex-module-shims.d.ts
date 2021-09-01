import { Store } from 'vuex'

// https://github.com/championswimmer/vuex-module-decorators/issues/265
declare module 'vuex-module-decorators/dist/types' {
  interface VuexModule {
    store: Store<any>
  }
}
