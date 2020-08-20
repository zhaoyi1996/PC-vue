export default {
    methods:{
        alert:function (msg) {
            layui.layer.alert(msg);
            return false;
        },
        msg:function (msg) {
            layui.layer.msg(msg);
            return false;
        },
        gotoPage:function (page_name) {
            console.log(page_name);
            this.$router.push({name:page_name});
        }
    }
}