# Reaset landing page

Clean static rebuild of the Reaset marketing site, deployed at `https://reaset.co` through Cloudflare Worker `reaset-landing`.

## Local preview

```sh
python3 -m http.server 4180 --directory landing-page
```

Open `http://127.0.0.1:4180/`.

## Production notes

- Production deployment repository: `souleimansaouli-eng/reaset-landing`.
- Production Worker: `reaset-landing`; custom domain: `reaset.co`.
- Preserve `admin.reaset.co`; it is a separate Worker and must not be changed by landing deployments.
- The public App Store listing is `https://apps.apple.com/app/reaset/id6791260161`; the header, mobile navigation, and footer download links point there.
- The Kit embed uses UID `2c4fa96965`; do not submit the live form during automated verification.
- The public Privacy Policy includes the Kit processing and unsubscribe disclosure.
- The dedicated social image is `assets/social-preview.jpg` at 1200×630.
