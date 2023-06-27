<template>
    <div class="wind container-fluid">
        <div>
          <h1 class="text m-3">About page</h1>
        </div>
        <div>
            <nav class="nav m-2">
              <a class="nav-link link-info link" href="/">to home</a>
              <a class="nav-link link-info link" href="/best">to best song</a>
              <a class="nav-link link-info link" href="#">here</a>
              <a class="nav-link link-info link" href="/auth">to autorization</a>
            </nav>
        </div>
        <div class="text m-3 wind-down">
          <img :src="imageSticker"/>
        </div>
        <div class="m-2">
            <h2 class="text fs-3">This about page....</h2>
        </div>
    </div>
</template>

<script>
    import imageSticker from '@/assets/images/stickers/post/a61cx3-d06a-4636-af88-343a324c49fb.png'
    export default {
        data() {
            return {
                imageSticker
            }
        }
    }
</script>

<style scoped>

.wind {
    margin-top: 70px;
}
.wind-down img{
    width: 512px;
    height: 512px;
}

.link {
    border: 1px rgba(43, 42, 42, 0.7) solid;
    padding: 10px;
    margin: 5px;
}
</style>