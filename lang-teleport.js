// 程式碼來源：https://github.com/samejack/blog-content/blob/master/web-language-detect/lang-detect.js
try {
  var switchPage = function (language) {
    switch (language) {
      case 'zh-Hans':
        console.log('./zh-TW/index.htm');
        window.location.href = './zh-TW/index.htm';
        return true;
        break;
		
      case 'zh-Hant':
        console.log('./zh-TW/index.htm');
        window.location.href = './zh-TW/index.htm';
        return true;
        break;
	
      case 'zh-cn':
        console.log('./zh-TW/index.htm');
        window.location.href = './zh-TW/index.htm';
        return true;
        break;

      case 'zh':
      case 'zh-tw':
        console.log('./zh-TW/index.htm');
        window.location.href = './zh-TW/index.htm';
        return true;
        break;

      case 'en':
      case 'en-us':
        console.log('./en-US/index.htm');
        window.location.href = './en-US/index.htm';
        return true;
        break;

      default:
    }
    return false;
  };

  // detect window.navigator.languages
  var found = false;
  if (typeof(window.navigator.languages) === 'object') {
    for (var index in window.navigator.languages) {
      console.log(window.navigator.languages[index].toLowerCase());
      found = switchPage(window.navigator.languages[index].toLowerCase());
      if (found) break;
    }
  }

  if (!found) {
    var lang = window.navigator.userLanguage || window.navigator.language;
    var relang = lang.toLowerCase();
    found = switchPage(relang);
  }

  if (!found) {
    window.location.href = './en-US/index.htm';
  }
} catch (e) {
  window.location.href = './en-US/index.htm';
}