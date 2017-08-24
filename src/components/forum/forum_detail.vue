<template>
    <div >
        <vue-markdown>{{discuss.body}}</vue-markdown>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    export default {
        components: {
            VueMarkdown,
        },
        mounted() {
            console.log(this.$route.params.id);
            axios.get('/api/topic/' + this.$route.params.id)
                .then(response => {
                  console.log(response.data);
                  this.discuss = response.data;

                })
        },
        data() {
            return {
                discuss : '',
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },

        }
    };
</script>

<style>
</style>
