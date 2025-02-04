<template>
  <div class="message-container">
    <!-- 为 img 添加 ref -->
    <img ref="robotImg" src="@/assets/机器人.png" />
    <div class="robot-message">
      <p>{{ text }}</p>
      <div><img src="@/assets/复制.svg" alt="" /><img src="@/assets/重新加载.svg" alt="" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  props: {
    text: String,
  },
  setup() {},
})
</script>
<style scoped>
img {
  width: 50px;
}
.robot-message img {
  width: 30px;
  margin-top: 10px;
  margin-right: 5px;
  cursor: pointer;
}

.message-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}
</style>
