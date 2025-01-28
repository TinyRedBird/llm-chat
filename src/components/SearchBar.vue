<script lang="ts">
export default{}
</script>

<template>
  <div class="SearchBar">
    <div class="SearchBar-container">
      <img src="../assets/search.svg" alt="" /> <span>Cmd+K</span>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.SearchBar {
  width: 120px;
  cursor: pointer;
}
.SearchBar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d7d7d7;
  font-size: 16px;
}
.SearchBar-container img {
  width: 20px;
}
.SearchBar hr {
  width: 100%;
}
</style>
