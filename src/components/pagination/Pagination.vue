<template src="./Pagination.html" />
<style lang="sass" href="./Pagination.scss" />

<script setup>

defineProps({
    currentPage: Number,
    totalPages: Number,
    start: Number,
    fin: Number,
})
const emit = defineEmits(['previous', 'next'])

</script>