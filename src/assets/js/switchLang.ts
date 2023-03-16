export default switchLang;

function switchLang(currurl: string, lang: string) {
	let currPath = currurl == '/' ? '/' : currurl.substring(3);
	if (lang == 'en' && currPath == '') { return '/'; }
	if (currurl == '/narrative') { return '/narrative'; }
	return "/" + lang + currPath;
}
