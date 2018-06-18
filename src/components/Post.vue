<template>
	<div class="row mt-5" :key="post.id">
		<div class="col-sm-10 offset-sm-1">
			<div class="jumbotron single">
			  <div class="col text-center mt-2 mb-3">
					<router-link to="/posts" 
					tag="button" 
					class="btn btn-outline-secondary">
					View All Posts</router-link>
				</div>
			<transition name="slide" mode="out-in" appear>	
			<h3 class="card-title mt-4 lead" v-if="post.title">{{ post.title.rendered }}</h3>		  					
			</transition>
			<transition name="fade" mode="out-in" appear>
			<img :key="post.id"
			class="card-img-top mt-3 p-2"
			v-if="post.better_featured_image" 
			:src.lazy="post.better_featured_image.source_url">
			<div v-else :key="post.id" class="col-sm-4 offset-sm-4 text-center" 
			style="width: 100%; height: 100%;
			background-color: rgba(131, 151, 136, .2)">
				<transition name="a2" mode="out-in" appear>
					<h5>No Image found</h5>
				</transition>			
			</div>								 				
			</transition>
  		<div class="col mt-2">    	
    		<div class="card-body">	  			
	  			<p style="font-weight: bold;">{{ post.name }}</p>
	  			<p v-if="post.content" class="card-text"><span v-html="post.excerpt.rendered"></span></p>		
				</div>	
  		</div>			
		</div>
		</div>		
	</div>			        	 			
</template>

<script>
	import axios from 'axios'
	export default {
		props: {
			id: Number
		},
		data() {
			return {
				post: []				
			}
		},
		beforeRouteUpdate (to, from, next) {	    
			console.log(to)
	    axios.get(`wp/v2${to.fullPath}`)
	    .then(res => {
	    	this.post = res.data
	      next()
	    })
	    .catch(err => console.log(err))	    			
		},
		created() {
			axios.get(`wp/v2/posts/${this.id}`)
    	.then(res => {
      	console.log(res.data)
      	this.post = res.data
  		})
  		.catch(error => alert(error))
  		console.log(this.post)
		}
	}	
</script>

<style scoped>
h1, h2, h3, h5 {	
	font-family: 'Amatic SC', cursive;
	color: #011627;		
}
h1 {
	font-size: 42px;
}
h3 {
	font-size: 50px;
}
button, input, li, p, small {
	font-family: 'Andika', sans-serif;
}
jumbotron {
	position: absolute;	
}
.single {
  background-color: #EEE0CB;
	color: #011627;
	border: none;
	-webkit-box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);
	box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);	
}
.a2-enter {
  opacity: 0;
  transform: scaleY(0);  
}
.a2-enter-to {  
  opacity: 1; 
  transform: scaleY(1);
  transform-origin: bottom; 
}
.a2-enter-active {  
  transition: all .4s;  
}
 
.a2-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: right; 
}
.a2-leave-active {
  transition: all .4s;
}
.a2-move {
	transition: all .4s;
}
.slide-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-enter-to {
		
}
.slide-enter-active { 
	opacity: 1;
  transition: all .4s ease-in-out;
}
.slide-leave-to {
	transform: scaleY(0);
	opacity: 0;	
}
.slide-leave-active {
  transition: all .4s ease;
}
.slide-move {
  transition: all .4s ease;
}


.fade-enter {
  opacity: 0;
	transform: scaleX(0) translateX(100px);    
}
.fade-enter-active {
  transition: all .4s;
}
.fade-leave {
}    
.fade-leave-active {
  transition: all .4s;
  opacity: 0;
  transform: scaleX(0) translateX(100px);
}
</style>