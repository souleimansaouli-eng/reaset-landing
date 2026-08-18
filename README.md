# Reaset landing page

Clean static rebuild of the Reaset marketing site. The production domain is not changed by this directory.

## Local preview

```sh
python3 -m http.server 4180 --directory landing-page
```

Open `http://127.0.0.1:4180/`.

## Launch checklist

- Replace `Coming soon to iPhone` and the launch-list primary CTA only after the App Store listing is publicly available.
- Confirm the exact App Store URL before adding it.
- Supply a dedicated social-preview image and add its Open Graph metadata before production.
- Confirm the Privacy Policy disclosure for Kit before publishing the embedded newsletter form.
- Verify the Kit confirmation, unsubscribe, duplicate-signup, and blocked-script flows.
- Preserve `admin.reaset.co`; the landing deployment must own only the intended root/www hostnames.
- Deploy to a preview URL first and obtain explicit production approval.
