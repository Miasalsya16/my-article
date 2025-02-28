<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchText"
      @input="$emit('input', searchText)"
      placeholder="Cari berita..."
      class="search-input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { searchText: "" };
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
