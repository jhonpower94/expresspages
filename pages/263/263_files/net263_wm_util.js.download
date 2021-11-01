// CUSTOM_LOGIN_VERSION $Id: net263_wm_util.js 9317 2014-06-09 07:54:15Z jiaxiaohua $
(function(window) {

	var net263 = window.net263;
	if (!net263) {
		net263 = function() {
		};
		window.net263 = net263;
	}

	var wm = window.net263.wm;
	if (!wm) {
		wm = function() {
		};
		window.net263.wm = wm;
	}

	// 控制台日志
	var log = window.net263.wm.log;
	if (!log) {
		log = function() {
		};
		window.net263.wm.log = log;
	}

	var supportConsole = function() {
		return ((typeof console) == "object")
				&& ((typeof console.debug) == "function")
				&& ((typeof console.info) == "function")
				&& ((typeof console.warn) == "function")
				&& ((typeof console.error) == "function")
				&& ((typeof console.trace) == "function")
				&& ((typeof console.assert) == "function");
	};

	var logArgToString = function(args) {
		var msgs = [];
		for ( var i in args) {
			var item = args[i];
			if (item instanceof Error) {
				msgs.push(item.toString());
				msgs.push(item);
				return msgs;
			}
			msgs.push(item);
		}
		return msgs;
	};

	log.debug = function() {
		if (supportConsole()) {
			console.debug(logArgToString(arguments));
			console.trace();
		}
	};

	log.notice = function() {
		if (supportConsole()) {
			console.info(logArgToString(arguments));
		}
	};

	log.info = function() {
		if (supportConsole()) {
			console.info(logArgToString(arguments));
		}
	};

	log.warn = log.warning = function() {
		if (supportConsole()) {
			console.warn(logArgToString(arguments));
		}
	};

	log.error = function() {
		if (supportConsole()) {
			console.error(logArgToString(arguments));
			console.trace();
		}
	};

	log.assert = function(exp) {
		if (!exp) {
			alert(logArgToString(arguments));
		}
		if (supportConsole()) {
			console.assert(exp);
			console.trace();
		}
	};

	// Cookie操作
	// 使用方法：
	// 提供方便方法操作cookie :
	// cookie('the_cookie'); // 获得cookie
	// cookie('the_cookie', 'the_value'); // 设置cookie
	// cookie('the_cookie', 'the_value', { expires: 7 }); //设置带时间的cookie 7天
	// cookie('the_cookie', '', { expires: -1 }); // 删除
	// cookie('the_cookie', null); // 删除 cookie
	//
	// 设置cookie的名值对，有效期，路径，域，安全
	// cookie('name', 'value', {expires: 7, path: '/', domain: 'jquery.com',
	// secure: true});
	var cookie = window.net263.wm.cookie;
	if (!cookie) {
		cookie = function() {
		};
		window.net263.wm.cookie = cookie;
	}

	cookie.cookie = function(name, value, options) {
		if (typeof value != 'undefined') { // name and value given, set cookie
			options = options || {};
			if (value === null) {
				value = '';
				options.expires = -1;
			}
			var expires = '; expires=Mon, 25 Jan 2039 00:00:00 GMT';
			if (options.expires
					&& (typeof options.expires == 'number' || options.expires.toUTCString)) {
				var date;
				if (typeof options.expires == 'number') {
					date = new Date();
					date.setTime(date.getTime()
							+ (options.expires * 24 * 60 * 60 * 1000));
				} else {
					date = options.expires;
				}
				// use expires attribute, max-age is not supported by IE
				expires = '; expires=' + date.toUTCString();
			}
			var path = options.path ? '; path=' + options.path : '';
			var domain = options.domain ? '; domain=' + options.domain : '';
			var secure = options.secure ? '; secure' : '';
			document.cookie = [ name, '=', encodeURIComponent(value), expires,
					path, domain, secure ].join('');
		} else { // only name given, get cookie
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
				var cookies = document.cookie.split(';');
				for ( var i = 0; i < cookies.length; i++) {
					var cookie = jQuery.trim(cookies[i]);
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie
								.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}
	};

	cookie.get = function(name) {
		var cookie_start = document.cookie.indexOf(name);
		var cookie_end = document.cookie.indexOf(";", cookie_start);
		return cookie_start == -1 ? '' : unescape(document.cookie.substring(
				cookie_start + name.length + 1,
				(cookie_end > cookie_start ? cookie_end
						: document.cookie.length)));
	};

	cookie.set = function(cookieName, cookieValue, seconds, path, domain,
			secure) {
		var expires = new Date();
		expires.setTime(expires.getTime() + seconds);
		document.cookie = escape(cookieName) + '=' + escape(cookieValue)
				+ (expires ? '; expires=' + expires.toGMTString() : '')
				+ (path ? '; path=' + path : '/')
				+ (domain ? '; domain=' + domain : '')
				+ (secure ? '; secure' : '');
	};

	cookie.del = function(cookieName) {
		cookie.cookie(cookieName, null);
	};

	// 请求相关
	var request = window.net263.wm.request;
	if (!request) {
		request = function() {
		};
		window.net263.wm.request = request;
	}

	request.urlEncode = function(val) {
		return encodeURIComponent(val);
	};

	request.urlDecode = function(val) {
		return decodeURIComponent(val.replace(/\+/g, ' '));
	};

	request.getHost = function() {
		return location.host;
	};

	request.getParameter = function(name) {
		try {
			var result = location.search.match(new RegExp("[\?\&]" + name
					+ "=([^\&]+)", "i"));
			if (result == null || result.length < 1) {
				return "";
			}
			return request.urlDecode(result[1]);
		} catch (e) {
			log.error(e);
		}
		return "";
	};

	request.setParameter = function(name, val, addNotExist) {
		try {
			var query = "";
			var search = "" + location.search;
			if (addNotExist && -1 == search.indexOf("?" + name + "=")
					&& -1 == search.indexOf("&" + name + "=")) {
				search += ("" == search) ? "?" : "&";
				query = search + name + "=" + request.urlDecode(val);
			} else {
				query = search.replace(new RegExp("([\?\&])" + name
						+ "=[^\&]*(\&?)", "i"), "$1" + name + "="
						+ request.urlDecode(val) + "$2");
			}
			location.href = location.protocol + "//" + location.host
					+ location.pathname + query
					+ ((location.hash.indexOf("#") < 0) ? "#" : location.hash);
		} catch (e) {
			log.error(e);
		}
	};

	request.getHashParameter = function(name) {
		try {
			var result = location.hash.match(new RegExp("[#\&]" + name
					+ "=([^\&]+)", "i"));
			if (result == null || result.length < 1) {
				return "";
			}
			return request.urlDecode(result[1]);
		} catch (e) {
			log.error(e);
		}
		return "";
	};

	request.setHashParameter = function(name, val, addNotExist) {
		try {
			var query = "";
			var hash = "" + location.hash;
			if (addNotExist && -1 == hash.indexOf("#" + name + "=")
					&& -1 == hash.indexOf("&" + name + "=")) {
				hash += ("" == hash) ? "#" : "&";
				query = hash + name + "=" + request.urlDecode(val);
			} else {
				query = hash.replace(new RegExp("([#\&])" + name
						+ "=[^\&]*(\&?)", "i"), "$1" + name + "="
						+ request.urlDecode(val) + "$2");
			}
			location.hash = query;
		} catch (e) {
			log.error(e);
		}
	};

	// 浏览器相关
	var browser = window.net263.wm.browser;
	if (!browser) {
		browser = function() {
		};
		window.net263.wm.browser = browser;
	}

	browser.getLanguage = function() {
		try {
			var lang = navigator.language;
			if (lang) {
				return lang;
			}
		} catch (e) {
			log.error(e);
		}

		try {
			var lang = navigator.browserLanguage;
			if (lang) {
				return lang;
			}
		} catch (e) {
			log.error(e);
		}

		try {
			var lang = window.navigator.userLanguage;
			if (lang) {
				return lang;
			}
		} catch (e) {
			log.error(e);
		}

		try {
			var lang = window.navigator.systemLanguage;
			if (lang) {
				return lang;
			}
		} catch (e) {
			log.error(e);
		}

		return "zh-cn";
	};

})(window);