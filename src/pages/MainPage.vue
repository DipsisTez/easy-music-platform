<template>
<div>
    <div class="top">
        <div class="mb-3 w-100">
          <input type="text"
            class="form-control bg-dark text-white text-opacity-75 border-black" 
            name="" id="" aria-describedby="helpId" placeholder="Seacrh song..."
           v-model="searchField" @input="searchSong"
            >
        </div>
    </div>

    <div class="grid">
        <GridAudio 
        :songList="songList"
        :selectedId="selectedSong"
        @select="songSelect"
        v-if="songList.length > 0"
        />
        <div class="m-3 fs-3 text" v-else-if="isLoadingList">Loading song list...</div>
        <div class="m-3 fs-3 text" v-else-if="searchField.length !== 0 && songList.length === 0">Nothing was found in the search result</div>
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
            searchField: '',
            songList: []
        }
    },
    methods: {
        songSelect(songId) {
            const index = this.songList.findIndex(e => e.id === Number(songId))
            this.selectedSong = songId;
            this.srcSong = this.songList[index].path;
        },

        async searchSong() {
            if (this.searchField.length > 0) {
                axios.request({
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `http://localhost:3000/song/search?data=${this.searchField}`,
                    headers: { }})
                .then((response) => {
                    this.songList = response.data;
                })
                .catch(() => {
                    this.loadingSongList();
                });
          } else {
            this.loadingSongList();
          }
        },

       async loadingSongList() {
            axios.request({method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/song/list',
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

::placeholder {
    color:rgb(117, 117, 117) ;
}

.top {
    display: flex;
    margin-top: 65px;
}

.grid {
   padding-bottom: 65px;
}

</style>

