var posts=["blog/atopos/","blog/done/","blog/hyrzdy/","blog/jifen/","blog/mgcmz2/","blog/mgcmzfljx/","blog/mgezsjy/","blog/sxgg/","blog/xhsdmz/","blog/ykrxttdecywhsxpb/","blog/yuanshen/","blog/wzrysq/","blog/Cookies/","blog/jxw/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"客户端","link":"https://xmmzt.my.canvasite.cn/","avatar":"/media/avatar.jpg","descr":"安卓APP"},{"name":"新密漫展通官方小店","link":"https://xmmzt.my.canvasite.cn/store","avatar":"/media/avatar.jpg","descr":"谷子店铺"},{"name":"LTST","link":"https://linshiit.my.canvasite.cn/","avatar":"/media/ltst.jpg","descr":"林氏科技服务团队"},{"name":"钰林小镇","link":"https://shi.my.canvasite.cn/xiazai","avatar":"/media/ylxz.jpg","descr":"全能文化艺术服务"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };