<template>			
	<div class="container-fluid">
		<transition name="slide" mode="out-in" appear>
		<h3 class="text-center">Latest Posts</h3>
	</transition>
    	<div class="row">
    		<div class="col" v-for="(post, index) in posts" v-if="!edited">	        			
    			<transition-group
      		name="slide"	        					        
	        mode="out-in"
	        tag="div">
  	 			<div class="card posts" :key="post.id">
						<div class="message" style="cursor: pointer"
						@click.prevent="removeItem(index, post.id)">
							<span v-tooltip.bottom="{ content:'Click to delete this post on Wordpress!' }">				
				 				<i class="fas fa-times"></i>
				 			</span>				 						 			
				 		</div>
						<img v-if="post.better_featured_image" class="card-img-top"
						style="width: 100%; height: 100%;" 
						:src="post.better_featured_image.source_url">
						<p style="color: rgba(0, 0, 0, .4)" v-else>No featured image found</p>						
						<div class="card-body">							
							<h4 class="card-title lead">{{ post.title.rendered }}</h4>
							<p class="text-right mb-0">
								<small class="text-right mt-0 mb-3">{{ post.date | date }}</small>								
							</p>
							<p class="text-right">
								<strong style="color: rgba(0, 20, 200, .5);
								font-style: italic">{{ post.name }}</strong>								
							</p>
							<p style="text-align: justify;" v-if="post.content" class="card-text"><span v-html="post.content.rendered"></span></p>
							<router-link 
							:to="{ name: 'Post', params: {id: post.id}}"
							tag="button" class="btn btn-outline-primary"><small>continue reading</small>
							</router-link>
						</div>
					</div>
					</transition-group>				
    		</div>
    	</div>
    </div>
</template>

<script>
export default {
	data() {
    return {  	       
      faIcon: '<i class="fas fa-times"></i>',
      something: 'No featured image found'
	  }
	},
	computed: {
		posts() {
			return this.$store.getters.loadedPosts				
		},
		categories() {
			return this.$store.getters.loadedCategories
		},
		edited() {
			return this.$store.getters.showEdit
		}
	},
	methods: {	
    removeItem(index, id) {    
    	const payload = {
    		index,
    		id
    	}    	
    	this.$store.dispatch('removePost', payload)
    	this.$router.push('/posts')        	
	  }		
	}
}

</script>

<style scoped>

h1, h2, h3, h4 {	
	font-family: 'Amatic SC', cursive;
	color: #BAA898;
}
h1 {
	font-size: 48px;
}
h3 {
	font-size: 42px;
}
h4 {
	font-size: 30px;
	color:rgba(131, 151, 136, 1);
}
p {
	font-size: .8rem;
}
button, input, li, p, small {
	font-family: 'Andika', sans-serif;
	color: #000;
}
small {
	color: #839788;
}
.btn-outline-primary {	
	border-color: #839788;
}
.btn-outline-primary:focus {
  box-shadow: 0 0 0 0.1rem rgba(131, 151, 136, .5)
;
}
button, input {
	overflow: hidden;
}
button:hover {
	background-color: #839788;
	border-color: #839788;
}
li {
	border: none;
	background-color: transparent;
}
.message {
	width: auto;
	height: auto;	
	transform: translateX(-40%);
	opacity: 0;
	transition: all .4s ease;
}

.card-body {
	height: auto;
	overflow: hidden;
}
.posts {
	width: auto;
	height: auto;
	margin: .2em;
	margin-top: 1em;	
	padding: 20px;
	background-color: #EEE0CB;
	color: #011627;
	border: none;
	-webkit-box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);
	box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);	
}
.posts:hover .message {	
	transform: translateX(-49%);
	opacity: 1;
}
.slide-enter {
  transform: scaleY(0) rotateX(90deg);
  opacity: 0;
}
.slide-enter-to {
	transform: scaleY(1) rotateX(0);
	opacity: 1;	
}
.slide-enter-active { 
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
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}    
.fade-leave-active {
  .transition: opacity 1s;
  opacity: 0;
}


@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
	}
  to {
    transform: translateY(20px);
  }
}
</style>