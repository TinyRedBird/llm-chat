<template lang="">
  <div class="message-box">ssss{{ text }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserMessage',
  props: {
    text: String,
  },
  data() {
    return {
      text2: 'cccc',
    }
  },
})
</script>
<style scoped>
.message-box {
  margin-left: var(--robot-img-width);
  display: inline-block;
  background-color: rgba(102, 103, 119, 1);
  padding: 10px;
  margin-top: 10px;
  margin-left: 60px;
  border-radius: 20px;
  font-size: 18px;
  max-width: 80%;
}
</style>
