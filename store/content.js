import { state as articles } from '~/store/articles.js'
import { state as projects } from '~/store/projects.js'
import { state as talks } from '~/store/talks.js'

export const state = () => ({
  list: projects().list.concat(articles().list.concat(talks().list))
})
