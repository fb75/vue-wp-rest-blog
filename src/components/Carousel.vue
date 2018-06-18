<template>
	<div class="col-sm">
		<carousel 
			id="main" 
		  :loop="true" 
		 	:perPage="1"
		 	:navigationEnabled="false"
		 	:autoplay="true"
		 	:paginationColor="'#CCC'"
		 	:easing="'ease-in-out'">
		  <slide v-for="post in posts" :key="post.id">
	  		<div class="col">
  				<img v-if="post.better_featured_image" class="card-img-top ml-1 mr-1" 
      		:src="post.better_featured_image.source_url" 
      		alt="No Post Image" :key="post.id">
      		<p v-else>No Featured Image Found</p>
	  		</div>		
			</slide>			
		</carousel>		
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {	
	computed: {
		posts () {
			return this.$store.state.posts		
		}
	}
}
	
</script>

<style scoped>
.car {
	margin-bottom: 5%;	
}
#main {
	height: 100%;
	width: 100%;
	padding: 3px;	
}
img {
	height: 350px;
	background-size: cover;	
}

</style>