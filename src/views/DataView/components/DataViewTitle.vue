<template>
  <div class="panel-title"><slot></slot></div>
</template>

<script>
export default {
  name: 'DataViewTitle'
}
</script>

<style lang="stylus">
.panel-title {
  display: flex;
  align-items: center;
  font-size: 16px;
  color:  #43434A;
  font-weight: 500;
  font-family: 'PingFangSC-Medium';
  padding: 5px 0;
  vertical-align: baseline
  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 16px;
    background-color: #3F7EFD
    margin-right:4px;
    border-radius: 2px;
  }
}
</style>
