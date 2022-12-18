export default switchLang;

function switchLang(currurl: string, lang: string) {
	let currPath = currurl == '/' ? '/' : currurl.substring(3);
	if (lang == 'en' && currPath == '') { return '/'; }
	// if (lang == 'zh' && currPath == '/narrative.html') { location.href = '/zh/'; return; }
	return "/" + lang + currPath;
}
