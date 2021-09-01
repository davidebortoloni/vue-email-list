Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    emails: [],
  },
  methods: {
    addRandomEmail() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          const email = res.data.response;
          if (!this.emails.includes(email)) {
            this.emails.push(email);
          }
        });
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.addRandomEmail();
    }
  },
});
