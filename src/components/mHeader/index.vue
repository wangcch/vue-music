<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">THEYEAR<span>resources from qq</span></h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>

  @import "~@/styles/variable"
  @import "~@/styles/mixin"

  .m-header
    position: relative
    height: 45px
    text-align: center
    color: $color-text
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
      span
        font-size: $font-size-small
        color: $color-text-d
        margin-left: 10px
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
