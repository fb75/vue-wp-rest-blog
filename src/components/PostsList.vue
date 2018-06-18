<template>
	<div class="menu p-2">																				
      <div class="nav flex-column">
      	<h2 class="text-center">Featured Posts</h2>		 		        		
 				<transition-group name="a2"
 				mode="out-in"
 				tag="li">
    		<ul v-for="(post, index) in posts" :key="post.id" class="list-group" style="list-style: none;">
    			<!-- <hr style="width: 100%"> -->
      		<div class="row">			        		  			        			
      			<div class="col-sm">
	      			<ul class="list-group">
	      				<router-link tag="li"      			
	      				:to="{ name: 'Post', params: {id: post.id}}" 
	      				style="cursor: pointer;" 
	      				class="list-group list"><a>
								<img class="card-img-top" 						  		
						  		v-if="post.better_featured_image != undefined" 
						  		:src="post.better_featured_image.source_url">									  	
									<p v-else>no image found</p>
	      				</a>
						  	</router-link>	
	      			</ul>      														  	
						</div>										
						<div class="col-sm">
							<small>{{post.title.rendered}}</small>
							<br>
					  	<small v-if="post.name" 
					  	style="cursor: pointer; font-weight: bold; color: rgba(0, 20, 200, .5)" 
							@click.prevent="selectCat(post.categories[0])"
							>{{ post.name }}</small>					  	
					  	<small style="color: rgba(0,0,0,.3)" v-else>no category</small>									  	
						</div>
      		</div>						        						  
				</ul>			    								
  			</transition-group>				        		
   		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {	
	computed: {
		posts() {
			return this.$store.getters.loadedPosts
		}
	},	
	methods: {
		selectCat(id) {
			this.$store.dispatch('catFilter', id)
		}	
	}
}

</script>

<style scoped>
h1, h2, h3 {	
	font-family: 'Amatic SC', cursive;	
}
h1 {
	font-size: 48px;
}
h3 {
	font-size: 42px;
}
button, input, li, p, small {
	font-family: 'Andika', sans-serif;
}

.list {
	width: 100%;
	height: auto;
	cursor: pointer;
	padding-bottom: 15px;	
}
.list img{
	padding-bottom: 0;
}
.a2-enter {
  opacity: 0;
  transform: scaleX(0); 
}
.a2-enter-to {
  transform: scaleX(1);
  transform-origin: center;
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
  transform-origin: right; 
}
.a2-leave-active {
  transition: all .4s;
}
.a2-move {
	transition: all .4s;
}	
	
</style>