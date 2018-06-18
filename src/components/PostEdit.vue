<template>
	<div class="row">
		<div class="col-sm-8 offset-sm-2 text-center">
			<div class="card body mt-4 ml-3 primary" style="padding-bottom: 50px;">
				<transition name="a2" mode="out-in" appear>	
					<h1 class="card-title">Edit Post</h1>
				</transition>
				<transition enter-active-class="animated fadeInDown" 
				leave-active-class="animatedfadeOutDown" mode="out-in" appear>
				<section>
					<h3>Create a new Post and push it into Wordpress database!</h3>
				</section>							
				</transition>					
				<div class="col-sm">
					<button class="btn btn-outline-info mr-2 pl-1 pr-1" @click.prevent="goBack">Back</button>
					<button class="btn btn-outline-primary ml-2 pl-1 pr-1" v-model="editing" @click.prevent="newPost">{{ editing }}</button>
					<div class="container">
						<div class="row mt-5">
							<div class="col-sm">
								<transition name="slide" mode="out-in" appear>
									<formedit :key="isNewPost" v-if="isNewPost"></formedit>
								</transition>		
							</div>		
						</div>
					</div>
				</div>
			</div>				
		</div>
	</div>		
</template>

<script>
	import Formedit from './Formedit'

	export default {
		data () {
			return {				
				editing: 'New Post',
				isNewPost: false
			}
		},
		components: {						
			formedit: Formedit
		},
		computed: {
    	edited () {
    		return this.$store.getters.showEdit
    	}
		},
		methods: {
			goBack() {
				this.$store.dispatch('isEdited')
				this.$router.push('/posts')
			},
			newPost() {
				this.isNewPost = !this.isNewPost
				this.isNewPost ? this.editing = 'Cancel' : this.editing = 'New Post'				
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
	color: rgba(131, 151, 136, 1);
}
h3 {
	font-size: 42px;
	color: rgba(131, 151, 136, 1);
}
button, input, li, p, small {
	font-family: 'Andika', sans-serif;
}

.primary {
	background-color: rgba(131, 151, 136, .1);
}

.card {	
	padding: 5%;
	color: #FFF;
	border: none;
}
.edit {
	transform: translateY(50px);
	top: 20px;
	bottom: 20px;
	padding: .9em;
	border-radius: 10px;
}
.slide-enter {
  opacity: 0;
  transform: scaleY(0);
}
.slide-enter-to {
	transform: scaleY(1);
  /*animation: an1 .6s cubic-bezier(.17,.67,.06,.99) forwards;*/
  opacity: 1;
}
.slide-enter-active {
	transition: all .4s ease-in; 
}
.slide-leave {
	transform: scaleY(1);
  /*animation: movedown .3s cubic-bezier(.17,.67,.06,.99) forwards;*/
  opacity: 1;  
} 
.slide-leave-to {
  transform: scaleY(0);
	opacity: 0;
}
.slide-leave-active {
  transition: all .4s;
}
.move-to {
	transition: transform .4s;
}
</style>

