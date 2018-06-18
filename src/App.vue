<template>  
  <div id="app">    
    <div class="container-fluid my-col">
      <router-view></router-view>                     
    </div>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {     
      show: true     
    }
  },
  computed: {
    isShown() {
      return this.show
    },
    loadedCategory() {
      return this.$store.getters.loadedCategory
    },
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },    
    edited() {
      return this.$store.getters.showEdit 
    } 
  }
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .mycol {  
    margin-top: 180px;
  } 
}

.a1-enter {
  opacity: 0;
  transform: scaleY(0);

}
.a1-enter-to {
  transform: scaleY(1);
  animation: an1 1s cubic-bezier(.17,.67,.06,.99) forwards;
  opacity: 1;  
}
.a1-enter-active {  
  transition: opacity .4s;
  
}
.a1-leave {
  transform: scaleY(1);
  animation: an2 1s cubic-bezier(.17,.67,.06,.99) forwards;
  opacity: 1;
} 
.a1-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
.a1-leave-active {
  transition: all .4s;
}
.a1-move {
  transition: transform .4 ease;
}

.a2-enter {
  opacity: 0;
  transform: scaleX(0);  

}
.a2-enter-to {
  transform: scaleX(1);
  transform-origin: 50% 50%;
  opacity: 1;  
}
.a2-enter-active {  
  transition: all .4s;
  
}
.a2-leave {
  transform: scaleX(1);
  opacity: 1;
} 
.a2-leave-to {
  opacity: 0;
  transform: scaleX(0);
  transform-origin: 50% 50%; 
}
.a2-leave-active {
  transition: all .4s;
}
.move-to {
  transition: transform .4 ease;
}

.t1-enter {
  opacity: 1;
  transform: translateY(100%);
}
.t1-enter-to {
  transform: translateY(0);
}
.t1-enter-active {
  transition: all .3s;
  position: absolute;
} 
.t1-leave {  
  opacity: 0;
}
.t1-leave-to {
  opacity: 1;
  transform: translateY(100%);
}
.t1-leave-active {
}
*/
@keyframes movedown {
  0% {
      transform: translateY(0);
  }
  100% {
      transform: translateY(10px);
  }  
}

@keyframes moveup {
  0% {
      transform: translateY(0);
  }
  100% {
      transform: translateY(-10px);
  }  
}

@keyframes an1 {
  0% {
      transform: translateY(-100%);
  }
  100% {
      transform: translateY(0);
  }  
}
@keyframes an2 {
  0% {
      transform: translateY(0);
  }
  100% {
      transform: translateY(100%);
  }
}

</style>
