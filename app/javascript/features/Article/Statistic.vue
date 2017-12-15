<template>
  <div class='three centered column'>
    <div class='ui mini statistic'>
      <div class='value'>{{value}}</div>
      <div class='label'>{{label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'label']
}
</script>
