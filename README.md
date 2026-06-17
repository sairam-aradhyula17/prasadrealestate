# Real Estate Website

This is a complete static real estate website. You can open it directly in browser or upload it to hosting.

## Pages Included

- `index.html` - Home page
- `properties.html` - All property listings with filters
- `property-details.html` - Dynamic property details page
- `about.html` - About page
- `contact.html` - Contact page with WhatsApp enquiry

## Main Edit File

Open this file:

```text
data/properties.js
```

### Change Business Details

At the top of `data/properties.js`, edit this section:

```js
const siteConfig = {
  businessName: "Prasad Real Estate",
  phone: "+91 9866830856",
  whatsapp: "919866830856",
  email: "aradhyulaprasad@gmail.com",
  address: "Tadepalligudem, West Godavari, Andhra Pradesh"
};
```

Important: WhatsApp number should be without `+`, spaces, or hyphen. Example: `919876543210`.

### Add or Edit Properties

In the same file, edit the `properties` array.

Each property has:

- title
- type
- location
- price
- budget
- area
- status
- image
- gallery
- shortDescription
- description
- features
- mapUrl

## Change Images

Put your real property photos inside:

```text
assets/images/
```

Then update image paths in `data/properties.js`.

Example:

```js
image: "assets/images/my-plot-photo.jpg"
```

## How to Open

Double-click `index.html` and open it in Chrome.

## How to Upload Online

You can upload the full folder to:

- Netlify
- Vercel
- GitHub Pages
- Any normal web hosting/cPanel

## Notes

- Contact form opens WhatsApp with the message.
- Google Maps uses iframe links.
- This is frontend/static website. No backend or admin login is included.
- For admin panel, database, login, and online property add/edit system, you need backend like Firebase/Supabase/Node.js.


## Updated in this version
- Placeholder sample SVG images were replaced with the user-provided property photos.
- New files were added under `assets/images/` with descriptive names like `house-exterior.jpg`, `venture-plots.jpg`, and `modern-apartment-flat.webp`.
