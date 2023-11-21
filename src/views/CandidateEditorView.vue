<template>
	<div class="container">
		<div class="input">
			<label>
	      Прізвище, ім'я
	         <input v-model.lazy="candidateData.name" type="text" />
	   	</label>
		</div>
		<div class="input">
			<label>
	      Посада
	         <input v-model.lazy="candidateData.position" type="text" />
	   	</label>
		</div>
	   <button @click="onAction">
	      {{ actionButtonTitle }}
	   </button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'CandidateEditorView',
		data() {
			return {
				candidateData: {}
			}
		},
		computed: {
			...mapGetters('candidates', ['getCandidateById']),
			
			receivedCandidateId() {
				return this.$route.params.id 
			},
			actionButtonTitle(){
				return this.receivedCandidateId? "Зберегти" : "Додати" 
			}
		},
		created () {
			if (this.receivedCandidateId) this.candidateData = {...this.getCandidateById(this.receivedCandidateId)};
		},
		methods: {
			...mapActions('candidates', ['onAddCandidate', 'onEditCandidate']),

			onAction(){
				if (!this.receivedCandidateId) {
					this.onAddCandidate({
						id: new Date().getTime(),
						...this.candidateData
					});
				} else {
					this.onEditCandidate(this.candidateData);
				};
				this.$router.push({
						name: 'candidates'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.container{
	width: 50%;
	margin: 0 auto;
}
.input{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	input{
		min-width: 300px;
	}
}
button{
	padding: 5px 15px;
}

</style>