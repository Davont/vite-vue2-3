import Tag from './src/index.vue'

const TagInstall = {
  install(app:any) {
    app.component('Tag', Tag)
  }
}

export default TagInstall

export { Tag }
