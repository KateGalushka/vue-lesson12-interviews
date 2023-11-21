<template>
	<div class="selector-container">
		<div class="selector-container__item">
			<label>Працівник</label>
			<select v-model="interviewData.workerId">
				<option v-for="worker in workersListToSelect" :key="worker.id" :value="worker.id">
					{{ worker.name }} - {{ worker.position }}
				</option>
			</select>
		</div>
		<div class="selector-container__item">
			<label>Кандидат</label>
			<select v-model="interviewData.candidateId">
				<option v-for="candidate in candidatesListToSelect" :key="candidate.id" :value="candidate.id">
					{{ candidate.name }} - {{ candidate.position }}
				</option>
			</select>
			<p class="error-message" v-if="isMessage">Немає кандидатів на таку посаду</p>
		</div>
		<div class="selector-container__item">
			<label>День</label>
			<select v-model="interviewData.day" class="day">
				<option value="" disabled selected>Оберіть день тижня</option>
				<option v-for="(day, index) in days" :key="index" :value="day">
					{{ day }}
				</option>
			</select>
		</div>
	</div>
	<div class="button-container">
		<button @click="onAdd(interviewData)">Додати</button>
	</div>
	<div v-if="message" class="error-message">{{ message }} </div>
	
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { days } from '../data/days'

	export default {
		name: 'InterviewCreator',
		data() {
			return {
				days: days,
				interviewData:{},
				candidatesListToSelect: [],
				workersListToSelect: [],
				message: ''
			}
		},

		computed: {
			...mapGetters('workers', ['getWorkersList', 'getWorkerById', 'getFilteredWorkersList']),
			...mapGetters('candidates', ['getCandidatesList', 'getCandidateById', 'getFilteredCandidatesList']),

			isMessage(){
				return ( this.interviewData.workerId && !this.getFilteredCandidatesList.length)
			}
		},

		watch: {
			'interviewData.workerId'(newVal) {
				if (!this.interviewData.candidateId && newVal){
					let selectedPosition = this.getWorkerById(newVal).position;
					this.onFilterCandidatesByPosition(selectedPosition);
					this.candidatesListToSelect = this.getFilteredCandidatesList
				}
			},
			'interviewData.candidateId'(newVal){
				if (!this.interviewData.workerId && newVal){
					let selectedPosition = this.getCandidateById(newVal).position;
					this.onFilterWorkersByPosition(selectedPosition);
					this.workersListToSelect = this.getFilteredWorkersList;

				}
			}
		},
		created () {
			this.candidatesListToSelect = this.getCandidatesList;
			this.workersListToSelect = this.getWorkersList;
		},
		methods: {
			...mapActions('interviews', ['onAddInterview']),
			...mapActions('candidates', ['onFilterCandidatesByPosition']),
			...mapActions('workers', ['onFilterWorkersByPosition']),

			onAdd(interviewData){
				if (this.interviewData.workerId && this.interviewData.candidateId && this.interviewData.day){
					this.onAddInterview(interviewData);
					this.interviewData = {};
					this.candidatesListToSelect = this.getCandidatesList;
					this.workersListToSelect = this.getWorkersList;
					this.message = '';
				} else {
					this.message = 'Оберіть всі дані (працівник, кандидат, день)'
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
.selector-container{
	display: flex;
	gap: 20px;
	max-width: 75%;
	margin: 50px auto;
	justify-content: center;
}
.selector-container__item{
	label, select{
		display: block;
	}
	select{
		min-width: 275px;
		&:focus{
			border: 2px solid rgb(61, 177, 61);
		}
	}
	.day{
		min-width: 130px;
	}
}
.button-container{
	display: flex;
	width: 75vw;
	justify-content: center;
	margin: 20px auto;
	button{
		width: 150px;
		padding: 8px 20px;
		font-size: 16px;
	}
}

</style>