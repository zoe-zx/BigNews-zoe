/* 网络中间层封装 */
(function (w) {
    let baseUrl = 'http://localhost:8080/api/v1';
    let bigNews = {
        user_login: baseUrl + '/admin/user/login', //用户登录
        user_info: baseUrl + '/admin/user/info', //获取用户登录信息
        user_detail: baseUrl + '/admin/user/detail', //获取用户详情
        user_edit: baseUrl + '/admin/user/edit', //编辑用户信息
        category_list: baseUrl + '/admin/category/list', //所有文章类别
        category_add: baseUrl + '/admin/category/add', //新增文章类别
        category_search: baseUrl + '/admin/category/search', //根据id查询指定文章类别
        category_edit: baseUrl + '/admin/category/edit', //编辑文章类别
        category_delete: baseUrl + '/admin/category/delete', //删除文章类别
        article_query: baseUrl + '/admin/article/query', //文章搜索
        article_publish: baseUrl + '/admin/article/publish', //发布文章
        article_search: baseUrl + '/admin/article/search', //根据id获取文章信息
        article_edit: baseUrl + '/admin/article/edit', //文章编辑
        article_delete: baseUrl + '/admin/article/delete', //删除文章
        data_info: baseUrl + '/admin/data/info', //获取统计数据
        data_article: baseUrl + '/admin/data/article', //日新增文章数量统计
        data_category: baseUrl + '/admin/data/category', //各类型文章数量统计
        data_visit: baseUrl + '/admin/data/visit', //日文章访问量
        comment_search: baseUrl + '/admin/comment/search', //文章评论搜索
        comment_search: baseUrl + '/admin/comment/pass', //评论审核通过
        comment_reject: baseUrl + '/admin/comment/reject', //评论审核不通过
        comment_delete: baseUrl + '/admin/comment/delete', //删除评论

        
    }
    // 暴露接口
    w.bigNews=bigNews
}(window))