<template>
	<div>
		<div class="top justify-content-center">
			<h2 class="m-2 text-white text-opacity-75 fs-3 font-monospace">Best song</h2>
		</div>
	
		<div class="grid">
			<GridAudio 
			:songList="songList"
			:selectedId="selectedSong"
			@select="songSelect"
			v-if="songList.length > 0"
			/>
			<div class="m-3 fs-3 text" v-else-if="isLoadingList">Loading song list...</div>
			<div class="m-3 fs-3 text" v-else-if="!isError">Song list empty</div>
			<div v-else class="m-3 fs-3 text">Error: {{ errorData }}</div>
		</div>
		<PlayerSong
		:songSrc='srcSong'
		/>
	</div>
	
	
	</template>
	
	<script>
	import GridAudio from '@/components/GridAudio.vue'
	import PlayerSong from '@/components/PlayerSong.vue'
	import axios from 'axios'
	
	export default {
		components: {
			GridAudio,PlayerSong
		},
		data() {
			return {
				errorData: '',
				isError: false,
				isLoadingList: true,
				selectedSong: -1,
				srcSong: '',
				songList: []
			}
		},
		methods: {
			songSelect(songId) {
				const index = this.songList.findIndex(e => e.id === Number(songId))
				this.selectedSong = songId;
				this.srcSong = this.songList[index].path;
			},
			
			async loadingSongList() {
				axios.request({method: 'get',
				maxBodyLength: Infinity,
				url: 'http://localhost:3000/song/best?count=10',
				headers: { }})
				.then((response) => {
					this.songList = response.data;
					this.isLoadingList = false;
				})
				.catch((error) => {
					this.isLoadingList = false;
					this.isError = true;
					this.errorData  = error;
				});
			},
		
		},
	
		mounted() {
			this.loadingSongList();
		}
	}
	</script>
	
	<style scoped>
	.top {
		display: flex;
		margin-top: 65px;
		background: black;
	}
	.grid {
		padding-bottom: 65px;
	}
		
	</style>
	
	