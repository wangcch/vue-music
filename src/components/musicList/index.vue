<template>
  <div class="music-list">
    <div class="list-top" :style="topBgStyle(scrollY)">
      <div class="btn-back" @click="toBack">
        <i class="fas fa-chevron-left" />
      </div>
      <p>{{title}}</p>
    </div>
    <div class="bg-img" :style="`background-image: url(${bgImage}); height: ${300 + scrollY}px;`"></div>
    <scroll class="listview"
      @scroll="scroll"
      ref="scrollRef"
      :data="songs"
      :probe-type="probeType"
      :listen-scroll="listenScroll">
      <div class="list-box">
        <div v-for="(item, index) in songs" :key="item.id" class="list-item" style="padding: 20px 0;">
          <p>{{ index + 1 }}{{ item.name }}</p>
          <small>{{ `${item.singer}-${item.album}` }}</small>
        </div>
      </div>
      <div class="loading-container" v-show="!songs.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  // import { mapActions } from 'vuex'
  import Loading from '@/components/loading/loading'
  import Scroll from '@/components/scroll/scroll'
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      },
      title: {
        type: String
      },
      bgImage: {
        type: String
      }
    },
    data() {
      return {
        scrollY: 0
      }
    },
    computed: {
    },
    methods: {
      toBack() {
        this.$router.back()
      },

      scroll(pos) {
        this.scrollY = pos.y
        console.log(this.scrollY)
      },

      topBgStyle(scrollY) {
        const bufferDistance = 300 - 45
        const bgTransparency = (Math.abs(scrollY) - bufferDistance) * 3 / 300
        return `background: rgba(255,255,255, ${bgTransparency});
          color: ${scrollY > -bufferDistance ? '#fff' : 'rgba(0,0,0,' + bgTransparency + ')'}`
      }
    },

    components: {
      Loading,
      Scroll
    },

    created() {
      this.probeType = 3
      this.listenScroll = true
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/variable.scss";
  .music-list {
    .list-top {
      position: absolute;
      z-index: 50;
      top: 0;
      left: 0;
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 16px;
      box-sizing: border-box;
      color: $color-white-ll;
      .btn-back {
        width: 45px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:active {
          background: $color-background-d;
        }
      }
    }
    .bg-img {
      height: 300px;
      background-size: cover;
      background-position: center;
      filter: brightness(60%);
    }
    .listview {
      position: fixed;
      width: 100%;
      height: calc(100% - 300px);
      box-sizing: border-box;
      top: 0;
      margin-top: 300px;
      .list-box {
        padding: 0 30px;
        background: $color-background;
        .list-item:active {
          background: #000;
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
    }
  }
</style>
