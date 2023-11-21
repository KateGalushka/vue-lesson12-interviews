import {workers} from '../../data/workers'
export default {
	namespaced: true,
	state: {
		workersList: workers,
	
	},
	getters: {
		getWorkersList: ({ workersList }) => workersList,
		getWorkerById: (state)=>(workerId)=>state.workersList.find(worker=>worker.id==workerId)
	
	},
	mutations: {
		deleteWorker(state, workerId){
			state.workersList = state.workersList.filter(worker=>worker.id !==workerId)
		},
		addWorker(state, workerData){
			state.workersList.push(workerData)
		},
		editWorker(state, workerData){
			const index = state.workersList.findIndex(worker=>worker.id == workerData.id);
			state.workersList[index] = workerData
		}
	},
	actions: {
		onDeleteWorker({ commit }, workerId){
			commit('deleteWorker', workerId)
		},
		onAddWorker({ commit }, workerData) {
			commit('addWorker', workerData)
		},
		onEditWorker({ commit }, workerData) {
			commit('editWorker', workerData)
		}

	},
	modules: {},
}
