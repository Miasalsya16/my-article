<template>
  <div :class="['news-card', { 'small-card': card === 'small' }]">
    <div class="image-wrapper" v-if="article.urlToImage">
      <img :src="article.urlToImage" alt="News Image" class="news-image" />
    </div>
    <div class="news-content">
      <div class="news-meta">
        <span>{{ article.source?.name || "Unknown Source" }}</span>
        <span v-if="article.author"> | {{ article.author }}</span>
      </div>
      <span class="date">{{ formatDate(article.publishedAt) }}</span>
      <h2 class="title">{{ truncatedTitle }}</h2>
      <p class="description">{{ truncatedDescription }}</p>
      <div class="news-action">
        <a :href="article.url" target="_blank" class="read-more">Read more </a>
        <button @click="$emit('save', article)" class="save-button small">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: Object,
    card: String
  },
  computed: {
    truncatedDescription() {
      return this.card === 'small' && this.article.description.length > 60 
        ? this.article.description.substring(0, 60) + "..."
        : this.article.description;
    },
    truncatedTitle() {
      console.log(localStorage)
      return this.card === 'small' && this.article.title.length > 20 
        ? this.article.title.substring(0, 20) + "..."
        : this.article.title;
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { weekday: 'short', day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
      return new Date(dateString).toLocaleDateString('id-ID', options).replace(',', '');
    }
  }
};
</script>

<style scoped>
.news-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  width: 100%;
  align-items: center;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.small-card .news-image {
  height: 100px;
}
.news-content {
  padding: 15px;
  text-align: left;
}
.news-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}
.date {
  font-size: 12px;
  color: #555;
  margin-bottom: 10px;
}
.news-meta {
  font-size: 12px;
  color: #555;
  margin-bottom: 10px;
}
.read-more {
  color: #FF6961;
  text-decoration: none;
  font-size: 14px;
}

.save-button {
  padding: 4px 6px;
  border: none;
  background: #FF6961;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.save-button:hover {
  background: #d02c23;
}
</style>
