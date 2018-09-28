<template>
  <transition name="slide">
    <div class="singerdetail">
      <music-list :songs="songs" :title="singer.name" :bg-image="singer.img" />
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { getSingerDetail } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong } from '@/common/js/song'
  import MusicList from '@/components/musicList'
  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$roter.push('./singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger(list) {
        let res = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            res.push(createSong(musicData))
          }
        })
        return res
      }
    },

    components: {
      MusicList
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/variable.scss";

  .singerdetail {
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $color-background;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter, .slide-leave-to {  
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
</style>
