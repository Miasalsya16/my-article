<template>
  <div @click="readMore(article.url)" class="news-card">
    <div class="image-wrapper" v-if="article.urlToImage">
      <img :src="article.urlToImage" alt="News Image" class="news-image" />
    </div>
    <div class="news-content">
      <h2 class="title">{{ article.title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: Object,
    card: String
  },
  methods: {
    readMore(url) {
      window
        .open(url, "_blank")
    }
  }
};
</script>

<style scoped>
.news-card {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  gap: 15px;
  padding: 10px;
}
.news-card:hover {
  transform: scale(1.02);
}
.image-wrapper {
  flex: 0 0 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 5px;
}
.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.news-content {
  flex: 1;
  text-align: left;
}
.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
