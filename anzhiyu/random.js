var posts=["2024/11/19/atopos/","2024/11/13/done/","2024/11/18/hyrzdy/","2024/11/16/jifen/","2024/11/13/mgcmz2/","2024/11/25/mgcmzfljx/","2024/12/09/mgezsjy/","2024/11/13/sxgg/","2024/11/11/xhsdmz/","2024/12/09/ykrxttdecywhsxpb/","2024/11/16/yuanshen/","2024/12/09/wzrysq/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };