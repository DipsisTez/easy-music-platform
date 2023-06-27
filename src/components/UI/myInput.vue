<template>
    <div class="input">
        <label :for="id" class="form-text text-muted text">{{title}}</label>
        <input :id="id"
        :value="modelValue"
        :type="type"
        @input="updateInput"
        class="form-control mb-3"
        aria-describedby="title"
        :placeholder="String('Entry ' + title?.toLowerCase())"
        >
    </div>
</template>

<script>
export default {
    name: 'my-input',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: [String, Number],
            default: '',
            required: true
        }
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
            
        },
    }
}
</script>

<style scoped>
.text {
    color: rgb(143, 143, 143) !important;;
}
</style>