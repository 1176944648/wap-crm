<template>
    <div class="information">
        <div>
            <ul class="first_ul">
                <li>
                    <p>录入人员(不可更改)<span class="first_span">啊</span></p>
                    <p>更新时间<span>啊</span></p>
                    <p>垂问来源<span>啊</span></p>
                    <p>跟进状态<span>啊</span></p>
                    <p>当前标签<span>啊</span></p>
                </li>
            </ul>
            <ul>
                <li>
                    <p>期望区域<span>人</span></p>
                    <p>预约类型<span>人</span></p>
                    <p>预算<span>人</span></p>
                    <p>起租日<span>人</span></p>
                    <p>期望日期<span>人</span></p>
                    <p>预约房源点<span>人</span></p>
                    <p>办公人数/面积<span>人</span></p>
                    <p>客户行业<span>人</span></p>
                    <p>租贷需求<span>人</span></p>
                </li>
            </ul>
            <ul>
                <li>
                    <p>s是3s是<span>人</span></p>
                    <p>s是啊s是<span>发</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    .information
        background #f6f6f6
        width 100%
        height 100%
        padding-top .20rem
        ul
            margin-top .2rem
            background white
            border-top .02rem solid #ebebeb
            border-bottom .02rem solid #ebebeb
        .first_ul
            margin 0
        li
            padding-left .3rem
            p
                height 1rem
                border-bottom .02rem solid #ebebeb
                line-height 1rem
                font-size .34rem
                span
                    float right
                    margin-right .3rem
                    color #b7b7b7
                .first_span
                    color black
            p:last-child
                border 0
                     
</style>