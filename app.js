const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the Course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        }
    }
});

app.mount('#user-goal');