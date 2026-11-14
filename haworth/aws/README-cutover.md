# Haworth Dental – AWS cutover checklist (GUI steps)

Upload to S3 (bucket root): everything in `haworth-s3-upload.zip` (it already contains `sitemap.xml` and `robots.txt`).

## 1. Redirect function (keeps Google rankings)
1. AWS Console > CloudFront > **Functions** > **Create function**. Name: `haworth-redirects`, runtime **cloudfront-js-2.0**.
2. Paste the contents of `cloudfront-redirects.js`, **Save**, then **Publish** tab > **Publish function**.
3. Open the distribution > **Behaviors** > default behavior > **Edit** > Function associations > **Viewer request** = `haworth-redirects`. Save.
4. Distribution **Alternate domain names (CNAMEs)**: add both `haworthdental.com` and `www.haworthdental.com`, and attach an ACM certificate (us-east-1) that covers both.
5. Route 53: A/AAAA **alias** records to the distribution for both the apex and `www`.
6. **Invalidations** > create `/*`.

## 2. Verify
- `https://www.haworthdental.com/` goes to `https://haworthdental.com/`
- `https://haworthdental.com/estimate.php` goes to `/#insurance`; `/meet-the-doctors.php` goes to `/#about` (every known `.php` address is listed in `redirect-urls.txt`)
- `https://haworthdental.com/sitemap.xml` and `/robots.txt` load.

## 3. Google
- Search Console: add the domain property, submit `https://haworthdental.com/sitemap.xml`, watch Pages/crawl errors for 4 weeks.
- Google Business Profile: confirm the website field is `https://haworthdental.com/`.
- Add more addresses to the `MAP` in the function if Search Console shows 404s that used to rank.
