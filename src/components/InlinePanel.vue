<template>
  <div class="inline-panel">
    <div class="search-box">
      <input type="text" placeholder="请输入提示" />
      <div class="buttons">
        <img src="../assets/附件.svg" alt="" /> <img src="../assets/上箭头.svg" alt="" />
      </div>
    </div>
    <hr />
    <div class="message-show">
      <ul>
        <li>
          <div class="message-title">检索</div>
          <p class="message-segement">
            这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。
          </p>
        </li>
        <li>
          <div class="message-title">检索</div>
          <p class="message-segement">
            这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。
          </p>
        </li>
        <li>
          <div class="message-title">检索</div>
          <p class="message-segement">
            这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。
          </p>
        </li>
        <li>
          <div class="message-title">检索</div>
          <p class="message-segement">
            这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。
          </p>
        </li>
        <li>
          <div class="message-title">检索</div>
          <p class="message-segement">
            这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。这是两行预览，它含有检索的关键字。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    const selectedMessages: Array<string> = []
    return { selectedMessages }
  },
}
</script>
<style scoped>
.inline-panel {
  background-color: #48495a;
  width: 900px;
  height: 500px;
  margin: 0;
  border-radius: 20px;
  padding: 10px;
  color: #ffffff;
}

.inline-panel li {
  list-style: none;
  padding: 10px;
}

.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-box input {
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  color: inherit;
}
.search-box input::placeholder {
  color: #aaaaaa; /* 设置占位符颜色 */
}
.search-box img {
  width: 32px;
  cursor: pointer;
}
.message-title {
  font-size: 20px;
}
.message-segement {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
