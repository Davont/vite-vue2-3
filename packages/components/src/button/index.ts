import Button from './src/index.vue'

const ButtonInstall = {
  install(app:any) {
    app.component('Btutton', Button)
  }
}

export default ButtonInstall
export { Button }
