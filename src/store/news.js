import axios from 'axios';

export default {
  namespaced: true,
  state: {
    articles: [],
    loading: false
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    }
  },
  actions: {
    async fetchNews({ commit }) {
      // const response = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b456938f86bc48ea866f519beb79b926");
      const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2025-01-28&sortBy=publishedAt&apiKey=b456938f86bc48ea866f519beb79b926");
      // const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2025-02-27&to=2025-02-27&sortBy=popularity&apiKey=b456938f86bc48ea866f519beb79b926");
      // const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b456938f86bc48ea866f519beb79b926");
      // const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b456938f86bc48ea866f519beb79b926");
      console.log("Berita:", response);
      commit('SET_LOADING', true);
      try {
        // const response = {
        //   data: {
        //     articles: [
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       },
        //       {
        //         source: {
        //         id: null,
        //         name: "Quartz India"
        //         },
        //         author: "Vinamrata Chaturvedi",
        //         title: "Nvidia, Tesla, Super Micro Computer: Stocks to watch today",
        //         description: "U.S. stocks edged higher in on Wednesday as investors awaited Nvidia’s highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fresh insights into the housing market’s performance and emerging trends.Read…",
        //         url: "https://qz.com/nvidia-smci-tesla-super-micro-stocks-to-watch-1851766513",
        //         urlToImage: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d012155663068719ebb2c2b1b4e6305f.jpg",
        //         publishedAt: "2025-02-26T14:55:00Z",
        //         content: "In This Story\r\nU.S. stocks edged higher in on Wednesday as investors awaited Nvidias highly anticipated earnings report. New home sales data, set for release at 10 a.m. New York time will provide fre… [+957 chars]"
        //       }
        //     ]
        //     // require =
        //     // 1. Name 
        //     // 2. Author
        //     // 3. Title
        //     // 4. Description
        //     // 5. Url
        //     // 6. UrlToImage
        //     // 7. PublishedAt (format: Sen, 21 April 2021 20.45)
        //   }
        // };
        commit('SET_ARTICLES', response.data.articles);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  }
};
