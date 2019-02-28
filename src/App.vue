<template>
    <div class="test">
        <p>
            {{ msg }}
        </p>
    </div>
</template>
<script>
import img from '@/assets/images/icon.jpg';
export default {
    data(){
        return {
            msg:'hello world',
            img
        }
    },
    created(){
        console.log(this.img);
    }
}
</script>
<style lang="scss" scoped>

@import '@/assets/css/mixin.scss';

.test{
    padding:20px;
    display: flex;
    justify-content: center;
    p{
        color: red;
    }
}
</style>



