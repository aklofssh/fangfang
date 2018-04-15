
var  proxyTable = {
  '/studyssh': {
    target : 'http://127.0.0.1:8080',
    changeOrigin : true,
    pathRewrite : {
        '^/studyssh':'/studyssh'
    }
 }

}


module.exports=proxyTable

