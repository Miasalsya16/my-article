<template>
  <div class="news-page">
    <h1 class="news-title">Saved News</h1>
    <div v-if="savedArticles.length" class="cards-container">
      <div class="small-cards">
        <CardSave v-for="(article, index) in savedArticles" :key="index" :card="'small'" :article="article" class="news-card" />
      </div>
    </div>
    <div v-else>Belum ada berita yang disimpan.</div>
  </div>
</template>

<script>
import CardSave from '@/components/CardSave.vue'

export default {
  components: { CardSave },
  data() {
    return {
      savedArticles: JSON.parse(localStorage.getItem("savedArticles")) || []
    }
  }
}
</script>

<style scoped>
.news-page {
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

.news-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.cards-container {
  display: flex;
  justify-content: center;
}

.small-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-content: center;
  max-width: 800px;
  width: 100%;
}

.news-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  align-items: center;
  width: 100%;
  max-width: 200px;
}

.loading-text {
  font-size: 18px;
  color: gray;
  margin-top: 10px;
}
</style>
