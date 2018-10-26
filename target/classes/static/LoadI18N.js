//js文件加载事件
$(function () {
    //获取本地浏览器语言
    var JsSrc =(navigator.language || navigator.browserLanguage).toLowerCase();
    if(JsSrc.indexOf('zh')>=0)
    {
        // 假如浏览器语言是中文
        // alert('检测到你当前浏览器编码为中文,已自动为您设置...')
        loadJS("Zh-cn.json")
        //为了让Select标签自动选中
        $(".zh").attr("selected","selected")
    }
    else if(JsSrc.indexOf('en')>=0)
    {
        // 假如浏览器语言是英文
        // alert('检测到你当前浏览器编码为英文,已自动为您设置...')
        loadJS("en.json")
        //为了让Select标签自动选中
        $(".en").attr("selected","selected")
    }
    else
    {
        // alert('检测到你当前浏览器编码为其他,已自动为您设置为英文...')
        loadJS("en.json")
        //为了让Select标签自动选中
        $(".en").attr("selected","selected")
    }
})

//李阳鹏:动态加载I18N配置方法
function loadJS(objSrc) {
    $.get('/'+objSrc,{},function(result){
        $(".i18n").each(function(){
            if($(this).get(0).tagName=="INPUT"){
                $(this).attr('placeholder',result[$(this).attr("i18n")])
                return;
            }
            $(this).text(result[$(this).attr("i18n")])
        })
    })
}