// CloudFront Function (cloudfront-js-2.0), event type: Viewer request.
// 1) www -> apex, 2) old Haworth Dental URLs -> matching sections of the new
// single-page site (301 keeps search rankings), 3) any other extension-less
// old URL -> home page. Real files (/img/..., /fonts/..., *.html, *.xml,
// *.txt, *.ico) always pass through untouched.
var HOST = 'haworthdental.com';
var MAP = {
  '/estimate': '/#insurance',
  '/contact-us': '/#insurance',
  '/contact': '/#insurance',
  '/meet-the-doctors': '/#about',
  '/meet-the-doctor': '/#about',
  '/our-doctors': '/#about',
  '/about-us': '/#about',
  '/about': '/#about',
  '/services': '/#care',
  '/our-services': '/#care',
  '/pediatric-dentistry': '/#care',
  '/orthodontics': '/#care',
  '/dental-implants': '/#care',
  '/cosmetic-dentistry': '/#care',
  '/testimonials': '/#reviews',
  '/reviews': '/#reviews',
  '/privacy-policy': '/privacy.html',
  '/privacy': '/privacy.html',
  '/terms': '/terms.html'
};
function redirect(loc) {
  return { statusCode: 301, statusDescription: 'Moved Permanently',
           headers: { location: { value: loc }, 'cache-control': { value: 'max-age=3600' } } };
}
function handler(event) {
  var req = event.request, host = (req.headers.host && req.headers.host.value || '').toLowerCase();
  var uri = req.uri, key = uri.length > 1 ? uri.replace(/\/+$/, '').toLowerCase() : uri;
  if (host === 'www.' + HOST) return redirect('https://' + HOST + (MAP[key] || (/\.[a-z0-9]+$/i.test(uri) ? uri : '/')));
  if (MAP[key]) return redirect('https://' + HOST + MAP[key]);
  if (uri === '/' || uri === '/index.html' || /\.[a-z0-9]+$/i.test(uri)) return req;
  return redirect('https://' + HOST + '/');
}
