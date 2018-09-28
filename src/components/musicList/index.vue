<template>
  <div class="music-list">
    <div class="list-top">
      <div class="btn-back" @click="toBack">
        <i class="fas fa-chevron-left" />
      </div>
      <p>{{title}}</p>
    </div>
    <div class="bg-img" :style="`background-image: url(${bgImage})`">
    </div>
    {{songs.length}}
    <div class="loading-container" v-show="!songs.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import { mapActions } from 'vuex'
  import Loading from '@/components/loading/loading'
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
      }
    },
    computed: {
    },
    methods: {
      toBack () {
        this.$router.back()
      }
    },

    components: {
      Loading
    },

    created() {
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
      padding-top: 70%;
      background-size: cover;
      filter: brightness(60%);
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
    }
  }
</style>
