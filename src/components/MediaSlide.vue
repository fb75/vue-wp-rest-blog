<template>
<transition-group name="a2" mode="out-in" tag="div">
	<div class="col" :key="loadedMedia.length">
		<h3>Featured Medias From the Blog</h3>
		<div class="container">			
			<carousel			  
			  :loop="true" 
			 	:perPage="3"
			 	:paginationEnabled="true"
			 	:navigationEnabled="false"
			 	:autoplay="true"
			 	:paginationColor="'#EEE0CB'"
			 	:easing="'ease-in-out'">		 	
				  <slide id="slide" v-for="media in loadedMedia" :key="media.guid.rendered">
		  			<img class="card-img-top"
		  			v-if="media.guid.rendered"
		  			:key="media.guid.rendered" 	  			
	      		:src="media.guid.rendered">
	      		<h3 v-else>no image found</h3>
					</slide>			
			</carousel>
		</div>
	</div>		
</transition-group>	
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
	computed: {
		loadedMedia() {
			return this.$store.getters.loadedMedia
		}
	}
}
	
</script>

<style scoped>
h3 {	
	font-family: 'Amatic SC', cursive;	
	font-size: 40px;
	color: #839788;
}
img {
	width: 250px;
	height: 150px;
	margin: 20px;	
}

.a2-enter {
  opacity: 0;
  transform: scaleY(0) translateX(-200px);
}
.a2-enter-to {
  transform: scaleY(1) translateX(0);
  transform-origin: center;
  opacity: 1;  
}
.a2-enter-active {  
  transition: all .4s;  
}
.a2-leave {
  transform: scaleY(1);
  opacity: 1;
} 
.a2-leave-to {
  opacity: 0;
  transform: scaleY(0) translateX(-200px);
  transform-origin: center; 
}
.a2-leave-active {
  transition: all .4s;
}
.a2-move {
	transition: all .4s;
}

</style>