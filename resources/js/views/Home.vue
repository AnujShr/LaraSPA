<template>
    <div class="columns">
        <div class="column 1s-12">
            <div class="content is-medium">
                <article class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{status.user.name}} said....
                        </p>

                        <p>
                            {{postedOn(status)}}
                        </p>
                    </div>
                    <div class="message-body" v-text="status.body"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                statuses: []
            }
        },
        created() {
            axios.get('/statuses')
                .then(({data}) => this.statuses = data);
        },
        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        },
    }
</script>
