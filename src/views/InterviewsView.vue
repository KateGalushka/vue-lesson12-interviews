<template>
	<interviews-list/>
	<interview-creator/>
</template>

<script>
import InterviewsList from '@/components/InterviewsList.vue';
import InterviewCreator from '@/components/InterviewCreator.vue';

export default {
	name: 'InterviewsView',
	components: {
		InterviewsList, InterviewCreator
	},
}
</script>