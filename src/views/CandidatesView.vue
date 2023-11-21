<template>
	<div class="container">
		<h1>Кандидати</h1>
		<ul>
			<li v-for="candidate in getCandidatesList" :key="candidate.id" class="list__item">
				<div>{{ candidate.name }} - {{ candidate.position }}</div>
				<div>
					<button @click="goToEditor(candidate.id)">Edit</button>
					<button @click="onDeleteCandidate(candidate.id)">Delete</button>
				</div>
			</li>
		</ul>
		<router-link :to="{name: 'candidateEditor'}">Додати кандидата</router-link>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default{
	name: 'CandidatesView',
	computed: {
		...mapGetters('candidates', ['getCandidatesList']) 
	},
	methods: {
		...mapActions('candidates', ['onDeleteCandidate']),

		goToEditor(id){
			this.$router.push({
				name: 'candidateEditor',
				params:{
					id: id
				}
			})
		} 
	},
}
</script>

<style lang="scss" scoped>
.container{
	width: 60%;
	margin: 0 auto;
}
button{
	padding: 3px 10px;
	margin-right: 10px;
}
a{
	text-decoration: none;
	background-color: rgb(61, 177, 61);
	color: #fff;
	padding: 5px 10px;
	border: 2px solid rgb(61, 177, 61);
	border-radius: 8px;
	cursor: pointer;
	&:hover{
		background-color: #fff;
		color: rgb(61, 177, 61);
	}
}

</style>