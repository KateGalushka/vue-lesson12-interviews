<template>
    <div class="container">
      <h1>Працівники</h1>
		<ul>
			<li v-for="worker in getWorkersList" :key="worker.id" class="list__item">
				<div>{{ worker.name }} - {{ worker.position }}</div>
				<div>
					<button @click="goToEditor(worker.id)">Edit</button>
					<button @click="onDeleteWorker(worker.id)">Delete</button>
				</div>
			</li>
		</ul>
		<router-link :to="{ name: 'workerEditor' }">Додати працівника</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
	name: 'WorkersView',
	computed: {
		...mapGetters('workers', ['getWorkersList'])
	},
	methods: {
		...mapActions('workers', ['onDeleteWorker']),

		goToEditor(id){
			this.$router.push({
				name: 'workerEditor',
				params: {
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
button {
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

