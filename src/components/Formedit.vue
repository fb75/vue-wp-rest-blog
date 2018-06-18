<template>
	<div class="col-sm">
				<div class="card-body">								
					<form>
						<div class="form-group">
				  	  <label>Insert New Post Title</label>
				    	<input type="text" class="form-control" v-model="postTitle">				
						</div>
					  <div class="form-group">
			  	    <label>Insert Post Content</label>
				   		<textarea class="form-control" v-model="postContent" rows="3"></textarea>			   		
					  </div>
				  	<div class="form-group">
				    	<label>select from Categories</label>
				    	<select v-model="postCat" class="form-control">
				    		<option disabled>choose from categories</option>				    	
				    		<option v-for="category in categories" 
				    		:key="category.id" 
				    		:value="category" :selected="category.name">{{ category.name }}</option>
				    	</select>
						</div>						
				  	<br>
				  	<button class="btn btn-primary" type="submit" @click="createPost">Push it to Wordpress!</button>
					</form>							
				</div>
		</div>		
</template>

<script>
import axios from 'axios'
	export default {
		data() {
			return {				
				postTitle: '',
				postContent: '',
				postStatus: 'publish',				
				postCat: {
					name: '',
					id: ''
				},
				postId: '',								
				selectedFile: null
			}
		},
		created() {
			this.selectedId = parseInt(Math.random()*5000)
		},
		computed: {
		  categories() {
    	  return this.$store.getters.loadedCategories              
    	}
		},				
		methods: {			
	    createPost() {
	    	 		    	
	      const post = {	      		      	
	        "title": this.postTitle,
	        "content": this.postContent,
	        "name":	this.postCat.name,
	        "categories": this.postCat.id,	               
	        "status": this.postStatus	        
	      }

	      this.$store.dispatch('sendPost', post)
	      this.$store.dispatch('refreshCats')	      
	    }	   
		}
	}
</script>

<style scoped>
button, input, li, p, small, textarea, select {
	font-family: 'Andika', sans-serif;
}
label {
	color: darkgreen;
	font-size: 2em;
}
input, textarea, select {
	background: lightblue;	
}
input:focus, textarea:focus, select:focus {
	background: white;
	transition: background .4s ease-in;
}

h1 {
	color: black;
}

form {
	font-family: 'Amatic SC', cursive;	
	margin-right: 15px;
	padding: 5px;
	width: 100%;			
}
</style>
