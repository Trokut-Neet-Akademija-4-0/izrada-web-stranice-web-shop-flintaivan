<template>
    <div>
        <aside>
            <slot></slot>
        </aside>
    </div>
</template>

<script>

</script>

<style>
aside {
    /* flex: 0 0 calc(30% - 20px);  */
    margin: 10px;
    box-sizing: border-box; 
    width: 320px;
    border: 1px solid rgba(0,0,0,0.2); 
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box; 
    -webkit-box-shadow: 0px 7px 25px -3px rgba(107,107,107,1);
    -moz-box-shadow: 0px 7px 25px -3px rgba(107,107,107,1);
    box-shadow: 0px 7px 25px -3px rgba(107,107,107,1);
    cursor: pointer;
    transition: all 0.3s;

}
</style>