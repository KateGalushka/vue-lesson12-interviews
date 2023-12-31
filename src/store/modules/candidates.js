import { candidates } from '../../data/candidates'
export default {
	namespaced: true,
	state: {
		candidatesList: candidates,
		filteredCandidatesList:[]

	},
	getters: {
		getCandidatesList: ({ candidatesList }) => candidatesList,
		getCandidateById: (state) => (candidateId) => state.candidatesList.find(candidate => candidate.id == candidateId),
		getFilteredCandidatesList: ({ filteredCandidatesList }) => filteredCandidatesList
		
	},
	mutations: {
		filterCandidatesByPosition(state, position){
			if (position){
				state.filteredCandidatesList = [...state.candidatesList.filter(candidate => candidate.position.toLowerCase().includes(position.toLowerCase()))]
			} else {
				state.filteredCandidatesList = state.candidatesList
			}
		},
		deleteCandidate(state, candidateId){
			state.candidatesList = state.candidatesList.filter(candidate=>candidate.id !== candidateId);
		},
		addCandidate(state, candidateData){
			state.candidatesList.push(candidateData)
		},
		editCandidate(state, candidateData){
			const index = state.candidatesList.findIndex(candidate=>candidate.id == candidateData.id);
			state.candidatesList[index] = candidateData
		}

	},
	actions: {
		onFilterCandidatesByPosition({commit}, position){
			commit('filterCandidatesByPosition', position)
		},
		onDeleteCandidate({ commit, dispatch }, candidateId){
			commit('deleteCandidate', candidateId);
			dispatch('interviews/deleteInterviewByCandidateId', candidateId, {root:true})
		},
		onAddCandidate({ commit }, candidateData){
			commit('addCandidate', candidateData)
		},
		onEditCandidate({ commit }, candidateData){
			commit('editCandidate', candidateData)
		}
	
	},
	modules: {},
}