<template>
	<div class="container">
		<h1>Співбесіди</h1>
		<div v-if="(!isListEmpty)">
			<table>
				<tr>
					<th>№</th>
					<th>Працівник - посада</th>
					<th>Кандидат - посада</th>
					<th>День</th>
					<th></th>
				</tr>
				<tr v-for="(interview,i) in getInterviewsListWithNames" :key="interview.id">
					<th scope="row"> {{ i+1 }}.</th>
					<td> {{ interview.worker.name }} - {{ interview.worker.position }}</td>
					<td> {{ interview.candidate.name }} - {{ interview.candidate.position }}</td>
					<td> {{ interview.day }} </td>
					<td>
						<button @click="onDeleteInterview(interview.id)">Delete</button>
					</td>
				</tr>
			</table>
		</div>
		<div v-else>Немає призначених співбесід</div>
		
	</div>
	<hr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'InterviewList',

		computed: {
		...mapGetters('interviews', ['getInterviewsListWithNames', 'getInterviewsList']),

		isListEmpty(){
			return !this.getInterviewsListWithNames.length

		}
	},
	methods: {
		...mapActions('interviews', ['onDeleteInterview']) 
	},
	}
</script>

<style lang="scss" scoped>
.container{
	width: 75%;
	margin: 0 auto;

}
table{
	border: 1px solid #000;
	margin: 0 auto;
	text-align: center;
	th{
		color: blue;
		padding: 10px;
	}
	td{
		padding: 5px 10px;
	}
	button{
		margin-left: 10px;
	}
}

</style>