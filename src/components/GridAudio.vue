<template>
    <div class="main-grid">
        <div class="grid-item" v-for="song in songList" :key="song.id">
            <div class="own text fs-5" v-if="song.id == selectedId">playning...</div>
           <div class="grid-image">
            <img :id="song.id" @click="select" :src="song.image" class=""/>
            <p class="dist mt-2">{{ song.dist }}</p>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            songList: {
                type: Object,
                required: true
            },
            selectedId: -1,
        },
        data(){
            return {
                count: 0,
            }
        },
        methods: {
            select(song) {
                this.$emit('select', song.target.id)
            },
        }
    }
</script>

<style scoped>
.main-grid {
display: grid;
grid-template-columns: repeat(4, 1fr);
}

.grid-item {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

min-width: 256px;
min-height: 256px;
max-width: 512px;
max-height: 512px;
background: black;
margin: 8px;
}

.grid-image img{
    min-width: 210px;
    min-height: 210px;
    max-width: 458px;
    max-height: 412px;
    padding: 10px;
}
.grid-image:hover img {
    cursor: pointer;
}

.own {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 23%;
    height: 38%;
    background: rgba(0, 0, 0, 0.3);
}

.dist {
    margin-left: 10px;
    color: #949494;
}
</style>