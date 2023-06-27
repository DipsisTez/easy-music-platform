<template>

<div class="player" v-if="playerVisible | isPlayning">
<button type="button" class="btn btn-dark m-1" v-if="!isPlayning" @click="togglePlay">Play</button>
<button type="button" class="btn btn-dark m-1" v-else @click="togglePlay">Pause</button>
<button type="button" class="btn btn-dark m-1" @click="stop">Stop</button>
<div class="bar w-100 m-2">
<div v-bind:style="{ width: widthBar }" class="bar-progress"></div>
</div>
</div>
</template>

<script>
    export default {

        props: {
            songSrc: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
            player: null,
            progressBar: null,
            isPlayning: false,
            playerVisible: false,
            duration: 0,
            currentTime: 0,
            widthBar: '0',
            }
        },

        methods: {

            timeUpdate() {
                this.duration = this.player.duration
                this.currentTime = this.player.currentTime;          
                this.widthBar = String(Math.floor(this.currentTime*100 / this.duration)) + '%'     
            },

            play() {
            this.player?.play();
            this.duration = this.player.duration;
            this.playerVisible = true;
            this.isPlayning = true;
        },

        pause() {
            this.player?.pause();
            this.isPlayning = false;
        },

        stop() {
            this.player?.pause();
            this.player.currentTime = 0;
            this.playerVisible = false;
            this.isPlayning = false;
        },

        togglePlay() {
            if (this.isPlayning) {
                this.pause();
            }
            else {
                this.play();
            }
            this.isPlayning != this.isPlayning;
        },


        },

        watch: {
            songSrc(newValue) {
                this.player.src = newValue;
                this.play()
            }
        },

        mounted() {
            this.player = new Audio(this.songSrc);
            this.player.addEventListener('timeupdate', this.timeUpdate, false);
        }
    }
</script>

<style scoped>
.player {
    width: 100%;
    display: flex;
    background-color: rgba(79, 0, 87, 0.6);
    height: 65px;
    top: calc(100% - 65px);
    position: fixed;
    z-index: 1;
}

.bar {
    background: rgb(37, 37, 37);
    border: 1px black solid;
    border-radius: 3px;
}

.bar-progress {
    background: black;
    height: 100%;
    width: 0%;
}
</style>