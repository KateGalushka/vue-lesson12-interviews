import {workers} from '../../data/workers'
export default {
	namespaced: true,
	state: {
		workersList: workers,
		filteredWorkersList: []
	
	},
	getters: {
		getWorkersList: ({ workersList }) => workersList,
		getWorkerById: (state)=>(workerId)=>state.workersList.find(worker=>worker.id==workerId),
		getFilteredWorkersList: ({ filteredWorkersList }) => filteredWorkersList,
	
	},
	mutations: {
		filterWorkersByPosition(state, position){
			if (position) {
				state.filteredWorkersList = [...state.workersList.filter(worker => worker.position.toLowerCase().includes(position.toLowerCase()))]
			} else {
				state.filteredWorkersList = state.workersList
			}
		},
		
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
		onFilterWorkersByPosition({ commit }, position) {
			commit('filterWorkersByPosition', position)
		},
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
