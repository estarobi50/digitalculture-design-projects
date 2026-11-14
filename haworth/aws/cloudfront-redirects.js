// CloudFront Function (cloudfront-js-2.0), event type: Viewer request.
// 1) www -> apex  2) every old *.php page of the previous site -> the matching
// section of the new single-page site (301 keeps search rankings)
// 3) any other extension-less or .php URL -> home page.
// Real files (/img/..., /fonts/..., *.html, *.xml, *.txt, *.ico, ...) pass through.
var HOST = 'haworthdental.com';
var CARE = '/#care', ABOUT = '/#about', INS = '/#insurance', REV = '/#reviews';
var MAP = {
  '/estimate': INS, '/new-patients': INS, '/faq': INS, '/contact-us': INS, '/contact': INS,
  '/about': ABOUT, '/meet-the-doctors': ABOUT, '/meet-the-staff': ABOUT, '/our-doctors': ABOUT, '/about-us': ABOUT,
  '/testimonials': REV, '/reviews': REV,
  '/dentist-services': CARE, '/services': CARE, '/our-services': CARE,
  '/preventive-dentistry': CARE, '/dentist-checkups-cleanings': CARE, '/digital-x-rays': CARE,
  '/restorative-dentistry': CARE, '/dental-crowns-bridges': CARE, '/dental-implants': CARE,
  '/cosmetic-dentistry': CARE, '/tooth-colored-fillings': CARE, '/invisalign': CARE,
  '/porcelain-veneers': CARE, '/all-ceramic-dental-restorations': CARE,
  '/pediatric-dentistry': CARE, '/childrens-dentistry': CARE, '/orthodontics': CARE,
  '/emergency-care': CARE, '/sleep-apnea-therapy': CARE,
  '/privacy': '/privacy.html', '/privacy-policy': '/privacy.html',
  '/terms': '/terms.html', '/sitemap': '/'
};
function redirect(loc) {
  return { statusCode: 301, statusDescription: 'Moved Permanently',
           headers: { location: { value: loc }, 'cache-control': { value: 'max-age=3600' } } };
}
function handler(event) {
  var req = event.request, uri = req.uri;
  var host = (req.headers.host && req.headers.host.value || '').toLowerCase();
  var key = uri.toLowerCase().replace(/\.php$/, '').replace(/\/+$/, '') || '/';
  var isFile = /\.[a-z0-9]+$/i.test(uri) && !/\.php$/i.test(uri);
  var target = MAP[key];
  if (!target && !isFile && key !== '/' && key !== '/index') target = '/';   /* /NJ/*, /dentist-tips/*, unknown */
  if (target) return redirect('https://' + HOST + target);
  if (host === 'www.' + HOST) return redirect('https://' + HOST + uri);
  return req;
}
