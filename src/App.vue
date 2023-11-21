<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link :to="{name: 'workers'}">Працівники</router-link> |
        <router-link :to="{name: 'candidates'}">Кандидати</router-link> |
        <router-link :to="{name: 'interviews'}">Співбесіди</router-link> 
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
	 text-align: center;
	 max-width: 80vw;
	 margin: 20px auto;

	}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
button{
		background-color: rgb(61, 177, 61);
		color: #fff;
		border: 2px solid rgb(61, 177, 61);
		border-radius: 8px;
		cursor: pointer;
		&:hover{
			background-color: #fff;
			color: rgb(61, 177, 61);
		}
	}
	.list__item{
		display: flex;
		max-width: 50vw;
		justify-content: space-between;
		margin-bottom: 5px;

	}
	.error-message{
		color:red;
		font-style: italic;
	}
</style>
