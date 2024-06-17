<style>
    #container{
        margin-top: 10px;
    }
</style>
<template>
    <div id="container">
        <header><slot name="header"></slot></header>
        <main><slot></slot></main>
        <footer><slot name="footer"></slot></footer>
    </div>
</template>