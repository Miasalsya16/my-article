<template>
  <div class="news-grid">
    <div v-for="(chunk, rowIndex) in chunkedArticles" :key="rowIndex" class="news-row">
      <div class="large-card">
        <CardNews :card="'large'" :article="chunk[0]" @save="$emit('save', chunk[0])" />
      </div>
      <div class="small-cards">
        <CardNews v-for="(article, index) in chunk.slice(1)" :key="index" :card="'small'" :article="article" @save="$emit('save', article)" />
      </div>
    </div>
  </div>
</template>

<script>
import CardNews from './CardNews.vue';

export default {
  components: { CardNews },
  props: ['articles'],
  computed: {
    chunkedArticles() {
      const chunks = [];
      for (let i = 0; i < this.articles.length; i += 5) {
        chunks.push(this.articles.slice(i, i + 5));
      }
      return chunks;
    }
  }
}
</script>

<style scoped>
.news-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: stretch;
}

.large-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.large-card .news-card {
  width: 100%;
  height: 100%;
}

.small-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.small-cards .news-card {
  height: 100%;
}
</style>
