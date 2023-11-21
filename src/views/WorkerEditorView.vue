<template>
	<div class="container">
		<div class="input">
			<label>
	      Прізвище, ім'я
	         <input v-model.lazy="workerData.name" type="text" />
	   	</label>
		</div>
		<div class="input">
			<label>
	      Посада
	         <input v-model.lazy="workerData.position" type="text" />
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
		name: 'WorkerEditorView',
		data() {
			return {
				workerData: {}
			}
		},
		computed: {
			...mapGetters('workers', ['getWorkerById']),
			
			receivedWorkerId() {
				return this.$route.params.id 
			},
			actionButtonTitle(){
				return this.receivedWorkerId? "Зберегти" : "Додати" 
			}
		},
		created () {
			if (this.receivedWorkerId) this.workerData = {...this.getWorkerById(this.receivedWorkerId)};
		},
		methods: {
			...mapActions('workers', ['onAddWorker', 'onEditWorker']),

			onAction(){
				if (!this.receivedWorkerId) {
					this.onAddWorker({
						id: new Date().getTime(),
						...this.workerData
					});
				} else {
					this.onEditWorker(this.workerData);
				};
				this.$router.push({
						name: 'workers'
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