# Performance Optimization Notes

## Current Optimizations Implemented

### 1. CSS Optimizations
- ✅ Smooth scrolling enabled globally
- ✅ Font-display: swap for web fonts (prevents FOIT)
- ✅ Smooth transitions with cubic-bezier easing
- ✅ Hardware-accelerated transforms
- ✅ Overflow-x: hidden to prevent horizontal scroll
- ✅ Image max-width: 100% for responsive scaling

### 2. Mobile-Specific Optimizations
- ✅ 16px minimum font size to prevent iOS zoom
- ✅ -webkit-font-smoothing for better text rendering
- ✅ 56px minimum height for inputs (prevents zoom on focus)
- ✅ 44px x 44px minimum tap targets
- ✅ Responsive breakpoints at 767px

### 3. Accessibility Optimizations
- ✅ 2px solid focus indicators (#1E3A8A)
- ✅ Focus offset of 2px for visibility
- ✅ ARIA labels on form fields
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)

### 4. Animation Performance
- ✅ Motion/react for optimized animations
- ✅ GPU-accelerated transforms (translateX, translateY, scale)
- ✅ RequestAnimationFrame for smooth 60fps
- ✅ Staggered delays for sequential animations
- ✅ InView hook to trigger animations only when visible

### 5. SEO Optimizations
- ✅ Complete meta tags in index.html
- ✅ Open Graph tags for social sharing
- ✅ LocalBusiness schema with rating
- ✅ Geo tags for Calgary location
- ✅ Canonical URL
- ✅ Structured data markup

## Recommended Future Optimizations

### Images (When Adding Real Images)
```html
<!-- Use WebP with JPG fallback -->
<picture>
  <source srcset="image-400w.webp 400w, image-800w.webp 800w" type="image/webp">
  <source srcset="image-400w.jpg 400w, image-800w.jpg 800w" type="image/jpeg">
  <img src="image-800w.jpg" loading="lazy" alt="Description">
</picture>
```

### Code Splitting
```javascript
// Lazy load non-critical components
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

<Suspense fallback={<div>Loading...</div>}>
  <FAQ />
  <Footer />
</Suspense>
```

### Critical CSS
Extract above-the-fold CSS and inline it in `<head>`:
```html
<style>
  /* Critical CSS for hero section, header */
</style>
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
```

### Preconnect to External Resources
Already added in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Service Worker (Progressive Web App)
```javascript
// Cache static assets for offline access
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## Performance Targets

### Current Estimates
- **First Contentful Paint:** ~1.2s
- **Time to Interactive:** ~2.5s
- **Largest Contentful Paint:** ~2.0s
- **Cumulative Layout Shift:** <0.1

### Goals
- **Mobile PageSpeed:** 85+
- **Desktop PageSpeed:** 95+
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1

## Testing Tools

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test both mobile and desktop

2. **WebPageTest**
   - URL: https://www.webpagetest.org/
   - Test from Calgary location if possible

3. **Lighthouse (Chrome DevTools)**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run audit

4. **Mobile Testing**
   - Chrome DevTools Device Simulation
   - BrowserStack for real devices
   - Test on actual iPhone and Android

## Browser Caching Headers

Set these on your server:

```
# Cache static assets for 1 year
Cache-Control: public, max-age=31536000, immutable
# For: .js, .css, .woff2, .png, .jpg, .webp, .svg

# Cache HTML for 1 day
Cache-Control: public, max-age=86400
# For: .html

# Enable compression
Content-Encoding: gzip
# Or: br (Brotli - better compression)
```

## Monitoring

### Tools to Set Up
1. Google Analytics 4
2. Google Search Console
3. Hotjar or similar (heatmaps)
4. Sentry (error tracking)

### Key Metrics to Track
- Page load time
- Bounce rate
- Form completion rate
- Mobile vs desktop usage
- Top exit pages
- Conversion rate (demo requests)

## Bundle Size Optimization

Current dependencies are minimal:
- React (production build)
- Motion (Framer Motion)
- Lucide icons (tree-shakable)
- Tailwind CSS (purged in production)

Keep bundle under 200KB gzipped.

## Lazy Loading Images

All images below the fold should use:
```html
<img loading="lazy" />
```

Already implemented in globals.css for all img tags.

## Mobile Performance Tips

1. **Reduce animations on mobile** (battery saving)
2. **Use intersection observer** for lazy loading
3. **Minimize JavaScript execution**
4. **Avoid layout shifts** (reserve space for images)
5. **Optimize touch targets** (44px minimum)

## Accessibility Performance

Fast sites are more accessible:
- Screen readers work better on fast sites
- Keyboard navigation is smoother
- Mobile users on slow connections benefit
- SEO improves with better performance

## Final Checklist Before Launch

- [ ] Run Lighthouse audit (target: 90+ all scores)
- [ ] Test on 3G network (Chrome DevTools throttling)
- [ ] Check bundle size (<200KB gzipped)
- [ ] Verify all images are optimized
- [ ] Enable compression on server
- [ ] Set cache headers
- [ ] Test on real mobile device
- [ ] Check for console errors
- [ ] Verify smooth scrolling works
- [ ] Test form submission speed

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
