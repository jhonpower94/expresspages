// CUSTOM_LOGIN_VERSION $Id: net263_wm_custom_login.js 15368 2021-04-19 09:09:11Z nayingli $
(function (m) {
  var w = m.net263.wm.log,
    q = m.net263.wm.cookie,
    t = m.net263.wm.request,
    n = "",
    A = {},
    u = "",
    B = {},
    x = "",
    p = (function () {
      var a = !1,
        b = [],
        g = [],
        l = [],
        d = "",
        f = [],
        e = [],
        c = [],
        k = [],
        h = [],
        m = [];
      m.gb = "gb";
      m.cn = "cn";
      m.hk = "tw";
      m.en = "en";
      m.jp = "jp";
      m.kr = "ko";
      var n = [];
      n.gb = "gb";
      n.cn = "cn";
      n.hk = "tw";
      n.en = "en";
      n.jp = "jp";
      n.kr = "kr";
      var p = [];
      p.gb = "";
      p.cn = "";
      p.hk = "";
      p.en = "";
      p.jp = "#adminOptionBr";
      p.kr = "#adminOptionBr";
      var r = function () {
        if (
          (d && g[d]) ||
          ((d = net263.wm.request.getParameter("lang")) && g[d]) ||
          ((d = net263.wm.request.getHashParameter("lang")) && g[d]) ||
          ((d = q.cookie("wm_custom_login_lang")) && g[d])
        )
          return d;
        d = "gb";
        try {
          var c = net263.wm.browser.getLanguage();
          0 <= c.indexOf("ja")
            ? (d = "jp")
            : 0 <= c.indexOf("JP")
            ? (d = "jp")
            : 0 <= c.indexOf("ko")
            ? (d = "kr")
            : 0 <= c.indexOf("KR")
            ? (d = "kr")
            : 0 <= c.indexOf("TW")
            ? (d = "hk")
            : 0 <= c.indexOf("HK")
            ? (d = "hk")
            : 0 <= c.indexOf("en") && (d = "en");
        } catch (a) {
          w.error(a);
        }
        return d;
      };
      g.gb = "\u9ed8\u8ba4";
      g.cn = "\u4e2d\u6587\uff08\u7b80\uff09";
      g.hk = "\u4e2d\u6587\uff08\u7e41\uff09";
      g.en = "English";
      g.jp = "\u65e5\u672c\u8a9e";
      g.kr = "\ud55c\uad6d\uc5b4";
      l.gb = "\u8bed\u8a00";
      l.cn = "\u8bed\u8a00";
      l.hk = "\u8a9e\u8a00";
      l.en = "Language";
      l.jp = "\u8a00\u8a9e";
      l.kr = "\uc5b8\uc5b4";
      b.gb = f;
      b.cn = f;
      b.hk = e;
      b.en = c;
      b.jp = k;
      b.kr = h;
      f[""] = "";
      e[""] = "";
      c[""] = "";
      k[""] = "";
      h[""] = "";
      f.showTabUser = "\u7528\u6237\u767b\u5f55";
      e.showTabUser = "\u7528\u6236\u767b\u9304";
      c.showTabUser = "User login";
      k.showTabUser = "\u30ed\u30b0\u30a4\u30f3";
      h.showTabUser = "\ub85c\uadf8\uc778(login)";
      f.showTabAdmin = "\u7ba1\u7406\u5458\u767b\u5f55";
      e.showTabAdmin = "\u7ba1\u7406\u54e1\u767b\u9304";
      c.showTabAdmin = "Administrator login";
      k.showTabAdmin = "\u7ba1\u7406\u8005\u30ed\u30b0\u30a4\u30f3";
      h.showTabAdmin = "\uad00\ub9ac\uc790 \ub85c\uadf8\uc778";
      f.sslSafeLogin = "\u5b89\u5168\u767b\u5f55";
      e.sslSafeLogin = "\u5b89\u5168\u767b\u9304";
      c.sslSafeLogin = "Security Login";
      k.sslSafeLogin =
        "\u5b89\u5168\u72b6\u614b\u3067\u767b\u9332\u3057\u307e\u3059";
      h.sslSafeLogin = "\ubcf4\uc548 \ub85c\uadf8\uc778";
      f.sslAdminSafeLogin = "\u5b89\u5168\u767b\u5f55";
      e.sslAdminSafeLogin = "\u5b89\u5168\u767b\u9304";
      c.sslAdminSafeLogin = "Security Login";
      k.sslAdminSafeLogin =
        "\u5b89\u5168\u72b6\u614b\u3067\u767b\u9332\u3057\u307e\u3059";
      h.sslAdminSafeLogin = "\ubcf4\uc548 \ub85c\uadf8\uc778";
      f.clearTrace = "\u6e05\u9664\u75d5\u8ff9";
      e.clearTrace = "\u6e05\u9664\u75d5\u8de1";
      c.clearTrace = "Clear Trace";
      k.clearTrace = "\u8de1\u3092\u30af\u30ea\u30a2\u3059\u308b";
      h.clearTrace = "\ud754\uc801\uc744 \uc5c6\uc560\ub2e4";
      f.adminClearTrace = "\u6e05\u9664\u75d5\u8ff9";
      e.adminClearTrace = "\u6e05\u9664\u75d5\u8de1";
      c.adminClearTrace = "Clear Trace";
      k.adminClearTrace = "\u8de1\u3092\u30af\u30ea\u30a2\u3059\u308b";
      h.adminClearTrace = "\ud754\uc801\uc744 \uc5c6\uc560\ub2e4";
      f.canNotLogin = "\u5fd8\u8bb0\u7528\u6237\u5bc6\u7801\uff1f";
      e.canNotLogin = "\u5fd8\u8a18\u7528\u6236\u5bc6\u78bc\uff1f";
      c.canNotLogin = "Forgot Password";
      k.canNotLogin =
        "\uff8a\uff9f\uff7d\uff9c\uff70\uff84\uff9e\u3092\u5fd8\u308c";
      h.canNotLogin = "\ube44\ubc00\ubc88\ud638 \ucc3e\uae30";
      f.canNotAdminLogin = "\u5fd8\u8bb0\u7ba1\u7406\u5458\u5bc6\u7801\uff1f";
      e.canNotAdminLogin = "\u5fd8\u8a18\u7ba1\u7406\u54e1\u5bc6\u78bc\uff1f";
      c.canNotAdminLogin = "Forgot administrator password";
      k.canNotAdminLogin =
        "\u7ba1\u7406\u8005\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u3066";
      h.canNotAdminLogin = "\uc78a\uace0 \uad00\ub9ac\uc790 \uc554\ud638\ub97c";
      f.usernameTip = "\u90ae\u7bb1\u5e10\u53f7";
      e.usernameTip = "\u90f5\u7bb1\u8cec\u865f";
      c.usernameTip = "Email";
      k.usernameTip = "Email";
      h.usernameTip = "\uc544\uc774\ub514\uff08ID\uff09";
      f.userType = "\u5bc6 \u7801";
      e.userType = "\u5bc6 \u78bc";
      c.userType = "password";
      k.userType = "\u30d1\u30b9\u30ef\u30fc\u30c9";
      h.userType = "\ube44\ubc00\ubc88\ud638";
      f.adminType = "\u5bc6 \u7801";
      e.adminType = "\u5bc6 \u78bc";
      c.adminType = "password";
      k.adminType = "\u30d1\u30b9\u30ef\u30fc\u30c9";
      h.adminType = "\ube44\ubc00\ubc88\ud638";
      f.adminSectury = "\u5bc6 \u4fdd";
      e.adminSectury = "\u5bc6 \u4fdd";
      c.adminSectury = "Security card number";
      k.adminSectury = "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ab\u30fc\u30c9";
      h.adminSectury = "\ube7d\ube7d\ud558\uac8c \uc9c0\ud0b5\ub2c8\ub2e4 ";
      f.wmSubBtn = "\u767b \u5f55";
      e.wmSubBtn = "\u767b \u9304";
      c.wmSubBtn = "Sign in";
      k.wmSubBtn = "\u30ed\u30b0\u30a4\u30f3";
      h.wmSubBtn = "\ub85c\uadf8\uc778";
      f.maSubBtn = "\u767b \u5f55";
      e.maSubBtn = "\u767b \u9304";
      c.maSubBtn = "Sign in";
      k.maSubBtn = "\u30ed\u30b0\u30a4\u30f3";
      h.maSubBtn = "\ub85c\uadf8\uc778";
      f.typeLabSupperAdmin = "\u8d85\u7ea7\u57df\u7ba1\u7406\u5458";
      e.typeLabSupperAdmin = "\u8d85\u7d1a\u57df\u7ba1\u7406\u54e1";
      c.typeLabSupperAdmin = "Administrator";
      k.typeLabSupperAdmin = "\u7ba1\u7406\u8005";
      h.typeLabSupperAdmin = "\uad00\ub9ac\uc790";
      f.typeLabDomainAdmin = "\u57df\u7ba1\u7406\u5458";
      e.typeLabDomainAdmin = "\u57df\u7ba1\u7406\u54e1";
      c.typeLabDomainAdmin = "Sub-administrator";
      k.typeLabDomainAdmin = "\u526f\u7ba1\u7406\u8005";
      h.typeLabDomainAdmin = "\ud558\uc704 \uad00\ub9ac\uc790 ";
      f.adminnameTip = "\u7ba1\u7406\u5458\u5e10\u53f7";
      e.adminnameTip = "\u7ba1\u7406\u54e1\u8cec\u865f";
      c.adminnameTip = "Administrator account";
      k.adminnameTip = "\u7ba1\u7406\u8005\u306e\u30a2\u30ab\u30a6\u30f3\u30c8";
      h.adminnameTip =
        "\uad00\ub9ac\uc778\uc758 \uc5b4\uce74\uc6b4\ud2b8(account)";
      f.userTypePwdCapitalOpen = "\u5927\u5199\u72b6\u6001\u5df2\u6253\u5f00";
      e.userTypePwdCapitalOpen = "\u5927\u5beb\u72c0\u614b\u5df2\u6253\u958b";
      c.userTypePwdCapitalOpen = "Capital is opened";
      k.userTypePwdCapitalOpen =
        "\u5927\u6587\u5b57\u306e\u72b6\u614b\u306f\u30aa\u30fc\u30d7\u30f3\u3067\u3059";
      h.userTypePwdCapitalOpen = "\ub300\ubb38\uc790 \uc0c1\ud0dc \uc5f4\ub824";
      f.adminTypePwdCapitalOpen = "\u5927\u5199\u72b6\u6001\u5df2\u6253\u5f00";
      e.adminTypePwdCapitalOpen = "\u5927\u5beb\u72c0\u614b\u5df2\u6253\u958b";
      c.adminTypePwdCapitalOpen = "Capital is opened";
      k.adminTypePwdCapitalOpen =
        "\u5927\u6587\u5b57\u306e\u72b6\u614b\u306f\u30aa\u30fc\u30d7\u30f3\u3067\u3059";
      h.adminTypePwdCapitalOpen =
        "\ub300\ubb38\uc790 \uc0c1\ud0dc \uc5f4\ub824";
      f.adminSecturyPwdCapitalOpen =
        "\u5927\u5199\u72b6\u6001\u5df2\u6253\u5f00";
      e.adminSecturyPwdCapitalOpen =
        "\u5927\u5beb\u72c0\u614b\u5df2\u6253\u958b";
      c.adminSecturyPwdCapitalOpen = "Capital is opened";
      k.adminSecturyPwdCapitalOpen =
        "\u5927\u6587\u5b57\u306e\u72b6\u614b\u306f\u30aa\u30fc\u30d7\u30f3\u3067\u3059";
      h.adminSecturyPwdCapitalOpen =
        "\ub300\ubb38\uc790 \uc0c1\ud0dc \uc5f4\ub824";
      f.adminSecturySpan = "\u4f7f\u7528\u5bc6\u4fdd\u767b\u5f55";
      e.adminSecturySpan = "\u4f7f\u7528\u5bc6\u4fdd\u767b\u9304";
      c.adminSecturySpan = "Use the security card";
      k.adminSecturySpan =
        "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ab\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b";
      h.adminSecturySpan =
        "\ube7d\ube7d\ud55c \uac83\uc744 \uc0ac\uc6a9\ud574\uc11c \ub4f1\ub85d\uc744 \uc9c0\ud0b5\ub2c8\ub2e4 ";
      f.usernameEmptyWarn =
        "\u90ae\u7bb1\u5e10\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01\r\r\u8bf7\u91cd\u65b0\u586b\u5199\uff01";
      e.usernameEmptyWarn =
        "\u7528\u6236\u540d\u4e0d\u80fd\u70ba\u7a7a\uff01\r\r\u8acb\u91cd\u65b0\u586b\u5beb\uff01";
      c.usernameEmptyWarn =
        "UserName can not be empty!\r\rPlease fill it again!";
      k.usernameEmptyWarn =
        "\u30e6\u30fc\u30b6\u30fc\u540d\u306f\u7a7a\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\uff01\r\r\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\uff01";
      h.usernameEmptyWarn =
        "\uc0ac\uc6a9\uc790 \uc774\ub984\uc740 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4\uff01\r\r\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.\uff01";
      f.usernameInvalidWarn =
        "\u90ae\u7bb1\u5e10\u53f7\u4e0d\u7b26\u5408\u8981\u6c42\uff01\r\r\u8bf7\u91cd\u65b0\u586b\u5199\uff01";
      e.usernameInvalidWarn =
        "\u7528\u6236\u540d\u4e0d\u5408\u8981\u6c42\uff01\r\r\u8acb\u91cd\u65b0\u586b\u5beb\uff01";
      c.usernameInvalidWarn =
        "UserName is wrong\uff01\r\rPlease fill it again!";
      k.usernameInvalidWarn =
        "\u30e6\u30fc\u30b6\u30fc\u540d\u8981\u6c42\u306b\u5408\u3044\uff01\r\r\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff01";
      h.usernameInvalidWarn =
        "\uc0ac\uc6a9\uc790 \uc774\ub984\uc740 \ube44\uc815\uaddc\uc785\ub2c8\ub2e4\uff01\r\r\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.\uff01";
      f.adminnameEmptyWarn =
        "\u7ba1\u7406\u5458\u5e10\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01\r\r\u8bf7\u91cd\u65b0\u586b\u5199\uff01";
      e.adminnameEmptyWarn =
        "\u7ba1\u7406\u54e1\u5e33\u865f\u4e0d\u80fd\u70ba\u7a7a\uff01\r\r\u8acb\u91cd\u65b0\u586b\u5beb\uff01";
      c.adminnameEmptyWarn =
        "Administrator account can not be empty!\r\rPlease fill it again!";
      k.adminnameEmptyWarn =
        "\u7ba1\u7406\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u7a7a\u306b\u3067\u304d\u307e\u305b\u3093\uff01\r\r\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff01";
      h.adminnameEmptyWarn =
        "\uc0ac\uc6a9\uc790 \uc774\ub984\uc740 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4\uff01\r\r\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.\uff01";
      f.adminnameInvalidWarn =
        "\u7ba1\u7406\u5458\u5e10\u53f7\u4e0d\u7b26\u5408\u8981\u6c42\uff01\r\r\u8bf7\u91cd\u65b0\u586b\u5199\uff01";
      e.adminnameInvalidWarn =
        "\u7ba1\u7406\u54e1\u5e33\u865f\u4e0d\u7b26\u5408\u8981\u6c42\uff01\r\r\u8acb\u91cd\u65b0\u586b\u5beb\uff01";
      c.adminnameInvalidWarn =
        "Administrator account is wrong!\rPlease fill it again!";
      k.adminnameInvalidWarn =
        "\u7ba1\u7406\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u8981\u6c42\u306b\u5408\u308f\u306a\u3044\uff01\r\r\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff01";
      h.adminnameInvalidWarn =
        "\uc0ac\uc6a9\uc790 \uc774\ub984\uc740 \ube44\uc815\uaddc\uc785\ub2c8\ub2e4\uff01\r\r\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.\uff01";
      f.passwordEmptyWarn =
        "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01\r\r\u8bf7\u91cd\u65b0\u586b\u5199\uff01";
      e.passwordEmptyWarn =
        "\u5bc6\u78bc\u4e0d\u80fd\u70ba\u7a7a\uff01\r\r\u8acb\u91cd\u65b0\u586b\u5beb\uff01";
      c.passwordEmptyWarn =
        "Password can not be empty!\r\rPlease fill it again!";
      k.passwordEmptyWarn =
        "\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u7a7a\u306b\u3067\u304d\u307e\u305b\u3093\uff01\r\r\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff01";
      h.passwordEmptyWarn =
        "\ube44\ubc00 \ubc88\ud638\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4\uff01\r\r\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624.\uff01";
      f.wechatScanLogin = "\u5fae\u4fe1\u626b\u7801\u767b\u5f55";
      e.wechatScanLogin = "\u5fae\u4fe1\u6383\u78bc\u767b\u5165";
      c.wechatScanLogin = "Wechat code scanning login";
      k.wechatScanLogin =
        "WeChat\u30b9\u30ad\u30e3\u30f3\u30b3\u30fc\u30c9\u30ed\u30b0\u30a4\u30f3";
      h.wechatScanLogin =
        "\uc704\ucc57 \uc2a4\uce94 \ucf54\ub4dc \ub85c\uadf8\uc778";
      f.wechatScanExpire = "\u4e8c\u7ef4\u7801\u5df2\u8fc7\u671f";
      e.wechatScanExpire = "\u4e8c\u7dad\u78bc\u904e\u671f";
      c.wechatScanExpire = "QR code has expired";
      k.wechatScanExpire =
        "QR\u30b3\u30fc\u30c9\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u307e\u3059";
      h.wechatScanExpire =
        "QR \ucf54\ub4dc\uac00 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4";
      f.wechatScanRefresh = "\u5237\u65b0";
      e.wechatScanRefresh = "\u5237\u65b0";
      c.wechatScanRefresh = "Refresh";
      k.wechatScanRefresh = "\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5";
      h.wechatScanRefresh = "\uc0c8\ub86d\uac8c \ud558\ub2e4";
      return {
        getText: function (c) {
          try {
            var a = d;
            (a && b[d]) || (a = "gb");
            return b[a][c];
          } catch (k) {
            return w.error(c, d, b), "";
          }
        },
        getLanguage: r,
        setLanguage: function (c, k) {
          if (c && g[c] && (d != c || !a)) {
            d = c;
            "gb" != d && net263.wm.request.setHashParameter("lang", d, !0);
            k && q.cookie("wm_custom_login_lang", d);
            q.cookie("wm_custom_qrcode_login_lang", d, { domain: "263.net" });
            $("#adminOptionBr").hide();
            $(p[d]).show();
            $("#cl_input_wm_chr").val(m[d]);
            $("#cl_input_ma_chr").val(n[d]);
            $("#languageBtn").text(l[d]);
            var e = b[d],
              f;
            for (f in e)
              try {
                var h = $("#" + f);
                "INPUT" == h.prop("tagName") ? h.val(e[f]) : h.text(e[f]);
              } catch (r) {
                w.error(r);
              }
            a = !0;
          }
        },
        getLanguageName: function () {
          return g[r()];
        },
      };
    })(),
    y = m.net263.wm.custom_login;
  y || ((y = function () {}), (m.net263.wm.custom_login = y));
  var C = function (a, b) {
      b.bind("focus", function () {
        $(this).hide();
        a.show();
        a.focus();
      });
      a.bind("blur", function () {
        "" == $(this).val() && ($(this).hide(), b.show());
      });
      var g = $.trim(a.val());
      g && "" != g ? (a.show(), b.hide()) : (a.hide(), b.show());
    },
    D = function (a) {
      var b = a.indexOf("@");
      return 0 > b ? "" : $.trim(a.slice(b + 1)).toLowerCase();
    },
    z = function (a) {
      var b = a.indexOf("@");
      return 0 > b
        ? $.trim(a).toLowerCase()
        : 0 == b
        ? ""
        : $.trim(a.substring(0, b)).toLowerCase();
    },
    r = function () {
      if ("CUSTOM" == n)
        try {
          if (B.loginUseEmail) return !1;
        } catch (a) {}
      return "COMMON" != n && "TRACELESS" != n && "OVERSEAS" != n;
    },
    E = function () {
      A.safe_login &&
        ($("#safelogin").attr("checked", "checked"),
        $("#safeloginMa").attr("checked", "checked"),
        $("#safelogin").removeAttr("disabled"),
        $("#safeloginMa").removeAttr("disabled"));
    },
  
    F = function (a) {
      if (!R()) return !1;
      a = document.form_wm;
      q.cookie("wm_custom_login_username", $("#username").val());
      q.cookie(
        "wm_custom_login_wm_ssl",
        $("#safelogin").is(":checked") ? "1" : "0"
      );
      a.domain.value = r() ? u : D($("#username").val());
      a.usr.value = z($("#username").val());
      a.buttonType.value = 1;
      var b =
        "host\x3d" +
        t.urlEncode(t.getHost()) +
        "\x26_t\x3d" +
        new Date().getTime();
      "COMMON" == n ||
      ("TRACELESS" != n && "OVERSEAS" != n && $("#safelogin").is(":checked"))
        ? (a.action = "https://" + x + "/xmweb?" + b)
        : (a.action = "http://" + t.getHost() + "/xmweb?" + b);
      for (var b = a.pass.value, g = b.length, l = "", d = 0; d < g; d++)
        b.substring(d, d + 1), (l += "$" + (b.charCodeAt(d) + "1") + ";");
      a.pass.value = l;
      E();
      a.submit();
      $("#wmSubBtn").unbind("click");
    },
  
   
    T = 0,
    H = -10,
    I = -10,
    J = function () {
      if (1e3 < T++) $(m).off("resize");
      else {
        var a = Math.max($(document).height(), $(m).height()),
          b = Math.max($(m).width(), 782);
        (3 > Math.abs(a - H) && 3 > Math.abs(b - I)) ||
          ($(".mainBox").height(a), $(".mainBox").width(b), (H = a), (I = b));
      }
    },
    K = function (a, b, g, l, d) {
      r()
        ? ($("#" + b + "_txt").text("@" + g),
          (b = $("#" + b).attr("title", g)),
          (g = $("#" + a + ", #" + a + "Tip")),
          (a = $("#" + a).width() + b.width()),
          b.css("overflow", "visible"),
          b.css("text-overflow", "clip"),
          b.css("width", "auto"),
          (l = Math.min(l, Math.max(d, b.width() + 4))),
          b.width(l),
          b.css("overflow", "hidden"),
          b.css("text-overflow", "ellipsis"),
          g.width(a - l))
        : $("#" + b).hide();
    },
    L = !1,
    M = function () {
      $(this).hasClass("current") ||
        ($("#showTabUser").addClass("current"),
        $("#showTabAdmin").removeClass("current"),
        $("#tabUser").show(),
        $("#tabAdmin").hide(),
        $("#canNotAdminLogin").hide(),
        $("#canNotLogin").show(),
        L || (K("username", "cl_span_domain", u, 160, 76), (L = !0)));
    },
    N = !1,
    U = function () {
      $(this).hasClass("current") ||
        ($("#showTabUser").removeClass("current"),
        $("#showTabAdmin").addClass("current"),
        $("#tabAdmin").show(),
        $("#tabUser").hide(),
        $("#canNotLogin").hide(),
        $("#canNotAdminLogin").show(),
        N || (K("adminname", "cl_span_admin_domain", u, 160, 76), (N = !0)));
    },
    O = function () {
      $(
        "#usernameTip, #adminnameTip, #userType , #adminType , #adminSectury"
      ).show();
      $(
        "#username, #adminname, #userTypePwd , #adminTypePwd , #adminSecturyPwd"
      ).hide();
      $(
        "#username, #adminname, #userTypePwd , #adminTypePwd , #adminSecturyPwd"
      ).val("");
      q.del("wm_custom_login_username");
      q.del("wm_custom_login_adminname");
    },
    V = function () {
      var a,
        b =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
          ),
        g = [],
        l;
      a = 16;
      for (l = 0; 32 > l; l++) g[l] = b[0 | (Math.random() * a)];
      return g.join("");
    },
    P = function () {
      q.cookie("wx_scene_str", V());
      $.ajax({
        url:
          "/weixin/web/action/offiaccount/qrcode.do?_dc\x3d" +
          Date.parse(new Date()),
        data: {},
        success: function (a) {
          $(".expire-mask").hide();
          $(".qrcode-wrap")
            .find("img.qrcode")
            .attr(
              "src",
              "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket\x3d" + a
            );
        },
      });
    },
    v = null,
    Q = function () {
      $.ajax({
        type: "post",
        url: "/weixin/web/action/offiaccount/getAuthsate.do",
        data: {},
        success: function (a) {
          switch (a.code) {
            case 0:
              clearInterval(v);
              a.url && (m.location.href = a.url);
              break;
            case 1:
              clearInterval(v);
              var b = "";
              switch (p.getLanguage()) {
                case "cn":
                  b = a.msg;
                  break;
                case "hk":
                  b = a.hk_msg;
                  break;
                case "en":
                  b = a.en_msg;
                  break;
                case "jp":
                  b = a.jp_msg;
                  break;
                case "ko":
                  b = a.ko_msg;
                  break;
                default:
                  b = a.msg;
              }
              confirm(b);
              location.reload();
              break;
            case 3:
              clearInterval(v), $(".expire-mask").show();
          }
        },
      });
    };
  y.homepage_init = function (a, b, g, l, d) {
    w.debug(a, b, g, l);
    n = a;
    A = b;
    B = g;
    x = d;
    d = m.location.hostname;
    if (r()) {
      var f = d.indexOf(".");
      u = d = d.substr(f + 1);
    }
    if ("CUSTOM" == a)
      try {
        _custom_login_domain_init(a, b, g, l);
      } catch (c) {
        w.error(c);
      }
    "TRACELESS" == a
      ? ($("#cl_top_logo").attr(
          "src",
          "/custom_login/images/company_logo_3.gif"
        ),
        $("#cl_isp_domain").val("ismail.cn"),
        $(".defaultWid .nav li").remove(),
        $(".defaultWid .nav").append(
          '\x3cli class\x3d"hotline"\x3e\u5ba2\u670d\u90ae\u7bb1\uff1a\x3cspan\x3e10000@xmail-service.com\x3c/span\x3e\x3c/li\x3e'
        ),
        $(".defaultWid .nav").show(),
        "" === icpCode || null === icpCode
          ? (m.location.href = "https://mail.263.net/erroricp.html")
          : ($("#cl_bottom").show(),
            (g =
              '\x3ca href\x3d "https://beian.miit.gov.cn"  target\x3d"_blank"  style\x3d"padding: 0;color:#999999;"\x3e' +
              icpCode +
              "\x3c/a\x3e"),
            $(".copyright").html(g)))
      : ($(".defaultWid .nav").show(),
        $("#cl_top_desc, #cl_bottom").show(),
        $("#cl_top_desc, #cl_bottom").removeAttr("style"),
        $("#safelogin, #safeloginMa").show(),
        $("#sslSafeLogin, #sslAdminSafeLogin").show(),
        $("#sslSafeLoginSSL, #sslAdminSafeLoginSSL").show(),
        $("#showTabAdmin").show());
    $("#cl_top_logo").show();
    $("#cl_input_domain").val(d);
    g = "/wm2e/website/jsp/resetPassword.jsp";
    l = "/wm2e/website/jsp/resetPasswordAdmin.jsp";
    "COMMON" == a && ((g = "https://" + x + g), (l = "https://" + x + l));
    $("#canNotLogin").attr("href", g);
    $("#canNotAdminLogin").attr("href", l);
    $("#canNotLogin").show();
    $("#showTabUser").bind("click", M);
    $("#showTabAdmin").bind("click", U);
    $(".resetForm").bind("click", O);
    $(".clearTrace").bind("click", O);
    $("#username").keypress(function (c) {
      "13" == c.keyCode &&
        "" != $("#username").val() &&
        (setTimeout(function () {
          $("#userType").hide();
          $("#userTypePwd").show();
          $("#userTypePwd").focus();
        }, 100),
        c.preventDefault());
    });
    $("#adminname").keypress(function (c) {
      "13" == c.keyCode &&
        "" != $("#adminname").val() &&
        (setTimeout(function () {
          $("#adminType").hide();
          $("#adminTypePwd").show();
          $("#adminTypePwd").focus();
        }, 100),
        c.preventDefault());
    });
    $("#userTypePwd").keypress(function (c) {
      "13" == c.keyCode && (F(0), c.preventDefault());
    });
    
    $("#userType").bind("focus", function () {
      $(this).hide();
      $("#userTypePwd").val("");
      $("#userTypePwd").show();
      $("#userTypePwd").focus();
    });
    $("#userTypePwd").bind("blur", function () {
      $("#userTypePwdCapitalOpen").hide();
      "" == $(this).val() && ($(this).hide(), $("#userType").show());
    });
    $("#userTypePwd").bind("keypress", function (c) {
      var a = c || m.event;
      c = a.keyCode || a.which;
      a = a.shiftKey || 16 == c || !1;
      (65 <= c && 90 >= c && !a) || (97 <= c && 122 >= c && a)
        ? $("#userTypePwdCapitalOpen").show()
        : $("#userTypePwdCapitalOpen").hide();
    });
    $("#userTypePwd").bind("keydown", function (c) {
      c = c || m.event;
      20 == (c.keyCode || c.which) && $("#userTypePwdCapitalOpen").toggle();
    });
    $("#adminType").bind("focus", function () {
      $(this).hide();
      $("#adminTypePwd").val("");
      $("#adminTypePwd").show();
      $("#adminTypePwd").focus();
    });
    $("#adminTypePwd").bind("blur", function () {
      $("#adminTypePwdCapitalOpen").hide();
      "" == $(this).val() && ($(this).hide(), $("#adminType").show());
    });
    $("#adminTypePwd").bind("keypress", function (c) {
      var a = c || m.event;
      c = a.keyCode || a.which;
      a = a.shiftKey || 16 == c || !1;
      (65 <= c && 90 >= c && !a) || (97 <= c && 122 >= c && a)
        ? $("#adminTypePwdCapitalOpen").show()
        : $("#adminTypePwdCapitalOpen").hide();
    });
    $("#adminTypePwd").bind("keydown", function (a) {
      a = a || m.event;
      20 == (a.keyCode || a.which) && $("#adminTypePwdCapitalOpen").toggle();
    });
    $("#adminSectury").bind("focus", function () {
      $(this).hide();
      $("#adminSecturyPwd").val("");
      $("#adminSecturyPwd").show();
      $("#adminSecturyPwd").focus();
    });
    $("#adminSecturyPwd").bind("blur", function () {
      $("#adminSecturyPwdCapitalOpen").hide();
      "" == $(this).val() && ($(this).hide(), $("#adminSectury").show());
    });
    $("#adminSecturyPwd").bind("keypress", function (a) {
      var b = a || m.event;
      a = b.keyCode || b.which;
      b = b.shiftKey || 16 == a || !1;
      (65 <= a && 90 >= a && !b) || (97 <= a && 122 >= a && b)
        ? $("#adminSecturyPwdCapitalOpen").show()
        : $("#adminSecturyPwdCapitalOpen").hide();
    });
    $("#adminSecturyPwd").bind("keydown", function (a) {
      20 == a.keyCode && $("#adminSecturyPwdCapitalOpen").toggle();
    });
    $("#security").click(function () {
      $("p.securityInput").slideToggle("normal");
    });
    $("#wmSubBtn").bind("click", function (a) {
      F(0);
    });
  
    $("#userTypePwd , #adminTypePwd", "#adminSecturyPwd").val("");
    p.setLanguage(p.getLanguage());
    a = ["cn", "hk", "en", "jp", "kr"];
    for (var e in a)
      $("#language_" + a[e]).bind("click", { type: a[e] }, function (a) {
        p.setLanguage(a.data.type, !0);
      });
    $("#languageBtn").click(function (a) {
      var b = $(this).offset();
      $("div.languageBox").slideToggle("slow");
      $("div.languageBox").offset({ top: b.top - 143, left: b.left - 40 });
      $(this).toggleClass("dropdown_lang_up");
      a.stopPropagation();
    });
    $("html").click(function () {
      $("div.languageBox").slideUp("slow");
      $("#languageBtn").removeClass("dropdown_lang_up");
    });
    r()
      ? ($("#username, #adminname, #usernameTip, #adminnameTip").addClass(
          "accountInputUser"
        ),
        $("#username, #adminname, #usernameTip, #adminnameTip").removeClass(
          "accountInput"
        ))
      : ($("#username, #adminname, #usernameTip, #adminnameTip").addClass(
          "accountInput"
        ),
        $("#username, #adminname, #usernameTip, #adminnameTip").removeClass(
          "accountInputUser"
        ));
    $("#username").val(q.cookie("wm_custom_login_username"));
    $("#adminname").val(q.cookie("wm_custom_login_adminname"));
    "1" == q.cookie("wm_custom_login_wm_ssl") &&
      $("#safelogin").attr("checked", "checked");
    "1" == q.cookie("wm_custom_login_ma_ssl") &&
      $("#safeloginMa").attr("checked", "checked");
    b.safe_login
      ? ($("#safelogin").attr("checked", "checked"),
        $("#safeloginMa").attr("checked", "checked"),
        $("#safelogin").attr("disabled", "disabled"),
        $("#safeloginMa").attr("disabled", "disabled"))
      : ($("#safelogin").removeAttr("disabled"),
        $("#safeloginMa").removeAttr("disabled"));
    "1" == q.cookie("wm_custom_login_ma_security") &&
      $("#security").attr("checked", "checked");
    C($("#username"), $("#usernameTip"));
    C($("#adminname"), $("#adminnameTip"));
    M();
    $("#security").is(":checked")
      ? $("p.securityInput").show()
      : $("p.securityInput").hide();
    J();
    $(m).on("resize", J);
    e = new Date();
    e.setTime(b.server_datetime);
    $("#curyear").text("" + e.getFullYear());
    b = m.location.host;
    if (
      "mm.263.com" == b ||
      "mail.263.net" == b ||
      "mail.goertek.com" == b ||
      "mail.nantian.com.cn" == b
    )
      $("#safelogin").attr("checked", "checked"),
        $("#safeloginMa").attr("checked", "checked");
    e = b.split(":")[0];
    null === GlobalTempNo || "" === GlobalTempNo
      ? "263.net.cn" == e || "mail.263.net" == e
        ? $(".copyright").html(
            "Copyright \u00a9 1998-2021 \u5317\u4eac\u4e8c\u516d\u4e09\u4f01\u4e1a\u901a\u4fe1\u6709\u9650\u516c\u53f8 | \x3ca href\x3d 'https://beian.miit.gov.cn'  target\x3d'_blank'  style\x3d'padding: 0;color:#999999;'\x3e\u4eacICP\u590708010619\u53f7-3\x3c/a\x3e"
          )
        : "263xmail.com" == e
        ? $(".copyright").html(
            "Copyright \u00a9 1998-2021 \u5317\u4eac\u4e8c\u516d\u4e09\u4f01\u4e1a\u901a\u4fe1\u6709\u9650\u516c\u53f8 | \x3ca href\x3d 'https://beian.miit.gov.cn'  target\x3d'_blank'   style\x3d'padding: 0;color: #999999;'\x3e\u4eacICP\u590708010619\u53f7-9\x3c/a\x3e"
          )
        : "" === icpCode || null === icpCode
        ? (m.location.href = "https://mail.263.net/erroricp.html")
        : ((e =
            '\x3ca href\x3d "https://beian.miit.gov.cn"  target\x3d"_blank"  style\x3d"padding: 0;color:#999999;"\x3e' +
            icpCode +
            "\x3c/a\x3e"),
          $(".copyright").html(e))
      : "" === icpCode || null === icpCode
      ? (m.location.href = "https://mail.263.net/erroricp.html")
      : ((e =
          '\x3ca href\x3d "https://beian.miit.gov.cn"  target\x3d"_blank"  style\x3d"padding: 0;color:#999999;"\x3e' +
          icpCode +
          "\x3c/a\x3e"),
        (a = $(".copyright").html()),
        $(".copyright").html(a + e));
    "mail.263.net" == b && $(".login-scancode").show();
    $(".login-scancode").on("click", function () {
      $(".login-type-wechat").is(":hidden")
        ? (clearInterval(v),
          $(".login-type-pc").hide(),
          $(".qrcode-wrap").hide(),
          $(".login-type-wechat").show(),
          $("form[name\x3d'form_wm']").show())
        : (P(),
          (v = setInterval(Q, 2e3)),
          $(".login-type-wechat").hide(),
          $("form[name\x3d'form_wm']").hide(),
          $(".login-type-pc").show(),
          $(".qrcode-wrap").show());
    });
    $(".expire-mask a").on("click", function () {
      $(this).parent("div").hide();
      P();
      v = setInterval(Q, 2e3);
    });
  };
})(window);
