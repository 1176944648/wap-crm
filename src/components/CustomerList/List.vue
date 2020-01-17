<template>
    <nav class="navWrap">
        <li class = "list" v-for="msg of list" :key="msg.uid">
            <section class="listLeft">
                <article>
                    <span class="listName">{{msg.name}}</span> 
                    <span class="listTagBox">
                        <van-tag color="#f2826a" plain>{{msg.type}}</van-tag>
                        <van-tag color="#f2826a" plain>{{msg.tags[0]}}</van-tag>
                    </span>       
                </article>
                <p>{{msg.phone}}</p>
            </section>
            <section class="listRight">
                    <span>{{msg.date}}</span>
            </section>
        </li>
    </nav>
</template>
<script>

export default {
    // props:[list]umessage
    data(){
        return{
            list:[{
                uid:"213131",
                name:"王小姐",
                phone:"1373131732",
                date:"2020-01-17 09:43:12",
                type:"新分派",
                tags:["标签A","标签B"],
            },{
                uid:"21313331",
                name:"玉老板",
                phone:"1373133332",
                date:"2020-01-17 10:32:12",
                type:"跟进中",
                tags:["标签A","标签B"],
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .navWrap
        display flex
        flex-direction column
        background #fff

        .list
            width 100%
            height 1.41rem
            margin  0 .3rem
            border-bottom .01rem solid #ebebeb
            list-style none
            display flex
            justify-content space-between
        .listLeft
            display flex
            flex-direction column
            justify-content space-evenly
            p
                color #666
                font-size .22rem
            article
                display flex
        .listName   
            font-size .32rem
            color #333333
        .listTagBox
            display flex
            align-items center
            .van-tag
                display flex
                margin-left .1rem 
                height .26rem
                // algin-self center
        .listRight
            display flex
            justify-content space-between
            align-items center
</style>