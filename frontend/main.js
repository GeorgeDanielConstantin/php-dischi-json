const { createApp } = Vue;

createApp({
  data() {
    return {
      disksData: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8888/php-dischi-json/API/get-disks.php")
      .then((response) => {
        this.disksData = response.data;
      });
  },
}).mount("#app");
