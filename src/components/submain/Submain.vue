<template src="./Submain.html"/>
<style lang="scss" src="./Submain.scss"/>

<script setup>
defineProps(["title","id","body",'changeFav'])
const emit = defineEmits(['changeFav'])
</script>