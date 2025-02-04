<template>
  <div class="inline-panel">
    <div class="search-box">
      <img src="../assets/切换.svg" @click="() => (toggle = !toggle)" />
      <input type="text" placeholder="请输入提示" v-model="keyword" />
      <div class="buttons">
        <img src="../assets/附件.svg" alt="" /> <img src="../assets/上箭头.svg" alt="" />
      </div>
    </div>
    <div class="loading-bar"></div>

    <!-- {{ keyword }}
    ----
    {{ processedMessages }} -->
    <div class="message-show">
      <ul v-if="toggle">
        <UserMessage
          :text="'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'"
        ></UserMessage>
        <RobotMessage
          :text="'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'"
        ></RobotMessage>
      </ul>

      <ul v-if="!toggle">
        <li v-for="(item, index) in selectedMessages">
          <span v-for="(part, idx) in processedMessages[index]['titlelist']" class="message-title">
            <span v-if="part.includes(keyword)" class="message-title_red">{{ part }}</span>
            <span v-else>{{ part }}</span></span
          >
          <p class="message-segement">
            <span v-for="(part, idx) in processedMessages[index]['subsentence']">
              <span v-if="part.includes(keyword)" class="message-segement_red">{{ part }}</span>
              <span v-else>{{ part }}</span>
            </span>
          </p>
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import UserMessage from '@/components/UserMessage.vue'
import RobotMessage from './RobotMessage.vue'
import { ref, computed, defineComponent, watch } from 'vue'
import type { SelectedSummary } from '@/data/DataType'
import { mock_api } from '@/api/mock_api'

export default defineComponent({
  setup() {
    const keyword = ref('')
    const toggle = ref(false)
    const selectedMessages = ref<SelectedSummary[]>([])
    watch(keyword, async (newVal) => {
      const response = await mock_api.generateSearchedSummaries({
        keyword: keyword.value,
        current_page: 1,
      })

      selectedMessages.value = response.data.conversations
    })

    const processedMessages = computed(() => {
      console.log(keyword)
      const regex = new RegExp(`(${keyword.value})`, 'g')
      return selectedMessages.value.map((item) => {
        let titlelist = item.title.split(regex)
        let subsentence = item.subsentence.split(regex)
        return { titlelist, subsentence }
      })
    })

    return { keyword, selectedMessages, processedMessages, toggle }
  },
  components: {
    UserMessage,
    RobotMessage,
  },
})
</script>
<style scoped>
ul {
  padding-left: 0;
}
li {
  border-radius: 20px;
  cursor: pointer;
}
li:hover {
  background-color: rgba(102, 103, 119, 1);
}
.loading-bar {
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}
.inline-panel {
  background-color: #48495a;
  width: 900px;
  height: 500px;
  margin: 0;
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
  overflow-y: scroll;
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
  flex: 1;
}
.search-box input::placeholder {
  color: #aaaaaa; /* 设置占位符颜色 */
}
.search-box img {
  width: 32px;
  cursor: pointer;
}
.message-show {
  padding: 5px;
}
.message-title {
  font-size: 20px;
}
.message-title_red {
  background-color: rgba(236, 128, 141, 0.2980392156862745);
}
.message-segement {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.message-segement_red {
  color: #ec808d;
}
</style>
