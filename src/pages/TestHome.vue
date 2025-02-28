<template>
  <div class="news-page">
    <h1 class="news-title">List of News</h1>
    <SearchNews v-model="searchQuery" />

    <div v-if="loading" class="loading-text">Memuat berita...</div>
    <div v-else class="news-grid">
      <GridNews :articles="filteredNews" @save="saveReadLater"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GridNews from '@/components/GridNews.vue';
import SearchNews from '@/components/SearchNews.vue';

export default {
  components: { GridNews, SearchNews },
  data() {
    return { searchQuery: "" }
  },
  computed: {
    ...mapState('news', ['articles', 'loading']),
    filteredNews() {
      // localStorage.removeItem("savedArticles");
      return this.articles.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

  },
  methods: {
    ...mapActions('news', ['fetchNews']),
    saveReadLater(article) {
      let saved = JSON.parse(localStorage.getItem("savedArticles")) || [];
      if (!saved.some(a => a.url === article.url)) {
        saved.push(article);
        localStorage.setItem("savedArticles", JSON.stringify(saved));
      }
    }
  },
  mounted() {
    this.fetchNews();
  }
};
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

.loading-text {
  font-size: 18px;
  color: gray;
  margin-top: 10px;
}
</style>
