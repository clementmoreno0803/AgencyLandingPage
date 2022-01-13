const app = Vue.createApp({
    data () {
        return {
            hover: false
        };
    },
    methods: {
        onHover () {
            return this.hover = !this.hover;
        }
    }
});
app.mount('#app');

//# sourceMappingURL=index.b4e15113.js.map
