<template>
	<div class="row">		
		<div class="container-fluid">			
			<div class="row text-center">
				<div class="col text-center">
					<h1 class=" lead pt-3 pb-3 mt-1 mb-5">Welcome to Vue.js & Wordpress WP API Rest Blog App</h1>
					<h3 class="text-center mb-2">Featuring</h3>
					<div class="row text-center ml-3 mr-3">						
						<transition name="jwt" mode="out-in" appear>
						<div class="col-sm pb-5 ml-5 mr-3 mb-4 mt-3 faded text-center">
							<div class="col-sm mt-3 text-center">
								<h2 class="mb-0 mt-3">{{ jwt }}</h2>
							</div>
							<img style="height: 100%; width:60%; object-fit:contain;
							transform: translateY(-40px)" class="card-img-top mt-0 pt-0" src="static/jwt_.jpg">
						</div>
						</transition>
						<transition name="a2" mode="out-in" appear>
						<div class="col-sm pb-5 ml-5 mr-5 mb-4 mt-3 faded text-center">
							<div class="col-sm text-center">								
								<h2 class="mb-0" style="transform: translateY(20px)">{{ vue }}</h2>
							</div>
							<img class="card-img-top mt-0 pt-0"
							style="height:100%; width: 65%; object-fit:contain"
							src="static/vuejs.png">
						</div>
						</transition>
						<transition enter-active-class="animated slideInRight" mode="out-in" appear>
						<div class="col-sm pb-5 ml-3 mr-5 mb-4 mt-3 faded text-center">
							<div class="col-sm text-center">
								<h2 class="mb-0" style="transform: translateY(20px)">{{ wordpress }}</h2>
							</div>
							<img class="card-img-top" 
							style="height: 100%; width:70%; object-fit:contain"
							src="static/WordPress.png">
						</div>						
						</transition>
					</div>
				  	<div class="row text-center mt-6">
				  		<div class="col-sm jumbotron ml-5 mr-5 text-center slider text-center">
						  	<transition name="fadeSlide" mode="out-in" appear>
					  			<mediaSlide></mediaSlide>
			  				</transition>
		  				</div>
		  			</div>	
				  	<div class="row mt-5 text-center">
				  		<div class="col-sm-8 offset-sm-2 text-center" v-if="!edited">
				  			<div class="col-sm text-center">				  							  								  				
				  				<button class="btn btn-outline-primary text-center"
				  				@click.prevent="editPosts">Edit a new Post
	  							</button>
	  							<span :key="edited" v-tooltip.bottom="{	content: 'Refresh Posts from server',	offset: '20'}">
				 					<button class="btn btn-outline-primary"
						  		@click.prevent="showGrid">Check Posts from Wordpress
							  	</button>
									</span>	
										<button v-model="filtButton" v-if="!edited" class="btn btn-outline-primary mr-2"
										@click.prevent="showButtons">
										{{ filtButton }}
										</button>													  			  								
				  			</div>				  			
			  			</div>	  						  																									  
		  			</div>		  				
	  			 	<div class="row text-center" v-if="catButtons">	  							  	
	  					<div class="col-sm-8 mt-3 offset-sm-2">
				    		<div v-for="(category, index) in categories"
				    		class="form-check form-check-inline" :key="category.id">
				    			<transition-group name="fadeSlide" 
				    			mode="out-in" tag="div" appear>
									<div class="col mt-2 mb-2" :key="category.id">										
										<button class="btn btn-outline-info pl-1 pr-1 py-3 small"
										@click.prevent="selectCat(category.id)" 
										v-model="postCategory"
										:value="category.id">
										<div class="cat pl-4">
											{{category.name}}
											<span class="badge badge-primary pl-1 ml-1 mr-1">
												{{ category.count }}
											</span>
										</div>
										<div style="height: 0;" @click.stop="removeCat(index, category.id)">
											<span :key="edited"	
											v-tooltip.bottom="{	content: 'Delete this category on Wordpress!',	offset: '20'}">
								 				<i class="fas fa-times close"></i>
		 									</span>				 										
										</div>													
											</button>																															
								</div>
								</transition-group>
					  		</div>
					  		<div class="col">
									<button class="btn btn-outline-info mt-2 pl-2 pr-2" 
									@click.prevent="myCategory" v-model="addCat">{{ addCat }}</button>
					  		</div>
					  		<transition-group name="fadeSlide" mode="out-in" tag="div">
					  		<div class="col-sm pb-2 mb-4 pt-2 mt-4 catcheck" :key="isNewCategory" v-if="isNewCategory">
									<transition name="fadeSlide">
										<input type="text" class="form-control mt-3 mb-3"
										style="width: 50%; margin-left: auto; margin-right: auto;"
										v-model="postCategory" v-show="isNewCategory" 
										@click.prevent="check" 
										placeholder="Insert new category name">	
									</transition>			
									<transition name="a2">
										<button class="btn btn-outline-primary" v-show="newCat" @click.prevent="createCategory">Create</button>
									</transition>
								</div>
								</transition-group>
		    		</div>		    				    						    		
		    	</div>
					<div class="row mt-5">	
						<div class="col-4 col-sm-3">					
							<div class="menu p-2">																				
						      <div class="nav flex-column">
						      	<h2 class="text-center">Featured Posts</h2>		 		        		
						 				<transition-group 
						 				name="a2"
						 				mode="out-in"
						 				tag="ul">
						    		<ul v-for="(post, index) in posts" :key="post.id" class="list-group mb-0" style="list-style: none;">
						    			<hr style="width: 100%">
						      		<div class="row">			        		  			        			
						      			<div class="col-sm">
						      				<router-link tag="li"      			
						      				:to="{ name: 'Post', params: {id: post.id}}" 						      				
						      				style="cursor: pointer;" 
						      				class="list-group">
						    	  				<a v-if="post.better_featured_image"><img class="card-img-top"
													  		:src="post.better_featured_image.source_url"
													  		style="width: 100%; height: 100%; object-fit:contain;">
						      					</a>															
															<div class="text-center" style="width: 100%; height: 100%; background-color: rgba(131, 151, 136, .2)" v-else><small>No Image found</small>
															</div>	
												  	</router-link>									  	
												</div>										
												<div class="col-sm">
													<small>{{ post.title.rendered }}</small>
													<br>
											  	<small v-if="post.name" 
											  	style="cursor: pointer; font-weight: bold; color: rgba(0, 20, 200, .5)" 
													@click.prevent="selectCat(post.categories[0])"
													>{{ post.name }}</small>					  	
											  	<small style="color: rgba(0, 0, 0, .3)" v-else>no category</small>
												</div>
						      		</div>						        						  
										</ul>			    								
						  			</transition-group>				        		
					   		</div>
						</div>
					</div>				   	    			
	      	<div class="col text-center">
	      		<transition-group name="a2" mode="out-in" tag="div">
	      			<router-view :key="edited"></router-view>				      		
 		 				</transition-group>					  							  	
  				</div>
				</div>		
			</div>
		</div>
	</div>																			
</div>
</template>

<script>
import PostsGrid from './PostsGrid.vue'	
import MediaSlide from './MediaSlide.vue'
import Post from './Post.vue'
import PostEdit from './PostEdit.vue'
import axios from 'axios'

export default {
	components: {		
		postsGrid: PostsGrid,		
		mediaSlide: MediaSlide,
		postEdit: PostEdit,
		post: Post
	},
	created() {	
		this.$router.push({ name: 'posts'})
	},
	data() {
		return {
			addCat: 'Add New Category',
			filtButton: 'Filter categories',
			noAdding: false,
			catButtons: false,
      newCat: false,
      postCategory: '',
      isNewCategory: false,
      jwt: 'JSON Web Tokens for Authentication',
      vue: 'Vue.js with Vue-Router & Vuex',
      wordpress: 'Wordpress with WP API Rest'
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
		editPosts() {
	    this.$store.dispatch('isEdited') 
  	  this.$router.push('/postedit')
  	},
		showButtons() {
			this.catButtons = !this.catButtons

		},
		showGrid() {
		axios.get(`wp/v2/posts?per_page=30`)
  	.then(res => {
  		console.log(res)
  		this.$store.dispatch('postsRefresh', res.data)  					    	
  		this.$store.dispatch('refreshCats')
		})
		.catch(error => alert(error))				
		},
		myCategory() {
			this.isNewCategory = !this.isNewCategory										
			this.isNewCategory ? this.addCat = 'Cancel'	: this.addCat = 'Add New Category'
			this.isNewCategory ? this.newCat = !this.newCat : this.newCat = this.isNewCategory
		},
		check() {
			this.newCat ? true : this.newCat = this.newCat
		},
		createCategory() {
			this.newCat = !this.newCat
			let id = parseInt(Math.random()*500)
      const cat = {
	      "name": this.postCategory,
	      "id": id
      }

      if (cat.name === '') {
      	alert('category not allowed')
      } else {      	  	
	  		this.$store.dispatch('sendCat', cat)	     
      }
      console.log(cat)	    	    	            
      this.$store.dispatch('refreshCats')
    },
    selectCat(id) {
			this.$store.dispatch('catFilter', id)			
		},
	  removeCat(index, id) {
	  	const payload = {
	  		index,
	  		id
	  	}
	  	this.$store.dispatch('removeCategory', payload)
	  	this.$router.push('/posts')	  	
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
	color: rgba(131, 151, 136, 1);
}
button, input, li, p, small {
	font-family: 'Andika', sans-serif;
	color: rgba(131, 151, 136, 1);
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
.slider {
	background-color: rgba(131, 151, 136, .1);
}
.small {
	width: auto;	
	font-style: italic;
	border-color: rgba(0, 0, 0, .1);
	border-radius: 50px;
	z-index: 1;
	height: 30px;		
}

.badge{
	border-radius: 50px;
}

.close{
	opacity: 0;
	position: relative;
	top: -22px;
	left: -2px;
	z-index: 0;
	color: rgba(0, 0, 255, .1);
	transform: translateX(-20px);
	transition: all .4s;
}

.cat {
	margin-top:-14px;
	transition: all .4s;
}

.small:hover .cat{
	transform: translateX(-20px);
}

.small:hover .close{
	transform: translateX(0);
	opacity: 1;	
}

button, input, li, p, small {
	font-family: 'Andika', sans-serif;
}

.l {
	width: 100%;
	height: 100%;
	cursor: pointer;
	padding-bottom: 35px;	
	background-color: #EEE0CB;
	color: #011627;
	border: none;
	-webkit-box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);
	box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);		
}
.faded {
	border-radius: 2%;
	background-color: rgba(131, 151, 136, .3);
	border: .3px solid rgba(131, 151, 136, .21); 	
	overflow: hidden;
	height: auto;
	width: 100%;		
	-webkit-box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);
	box-shadow: 8px 15px 48px -12px rgba(0,0,0,0.3);
}
.l img{
	padding-bottom: 0;
}
.catcheck {
	background-color: rgba(131, 151, 136, .5);
}
.fadeSlide-enter {  
  transform: scaleX(0);    
}
.fadeSlide-enter-active {
  transition: transform 0.3s ease-in-out;
  transform-origin: left;
}

.fadeSlide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.fadeSlide-leave-to {
	transform: scaleX(0);
}
.fadeSlide-move {
  transition: transform 0.3s ease-in-out;
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
.jwt-enter {
  opacity: 0;
  transform: scaleX(0) translateX(-100px);    
}
.jwt-enter-to {  
  opacity: 1; 
  transform: scaleX(1) translateX(0);
  transform-origin: left; 
}
.jwt-enter-active {  
  transition: all .4s;  
}
 
.jwt-leave-to {
  opacity: 0;
  transform: scaleX(0) translateX(-100px);  
  transform-origin: right; 
}
.jwt-leave-active {
  transition: all .4s;
}
.jwt-move {
	transition: all .4s;
}
</style>