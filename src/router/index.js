import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import PostsGrid from '../components/PostsGrid.vue'
import PostEdit from '../components/PostEdit.vue'
import Post from '../components/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', 
      components: {
        default: Home
      },
      children: [ 
        {
          name: 'posts',
          component: PostsGrid,
          path: '/posts'
        },
        {
          name: 'Post',
          path: '/posts/:id',
          component: Post,
          props: true
        },
        {        
          name: 'postedit',        
          path: '/postedit',       
          component: PostEdit
        }
      ]
    }
  ],
  mode: 'history'
})
