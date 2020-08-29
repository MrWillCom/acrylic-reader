<p align="center">
  <img width="120" height="120" src="https://github.com/yang991178/rss-reader/raw/master/build/icon.png">
</p>
<h3 align="center">Acrylic Reader</h3>
<p align="center">Better Fluent Reader.</p>

Acrylic Reader keeps up to date with [yang991178/fluent-reader](https://github.com/yang991178/fluent-reader) and will add and improve some features.

## License

Acrylic Reader's upstream is [yang991178/fluent-reader](https://github.com/yang991178/fluent-reader). It's fully based on [yang991178/fluent-reader](https://github.com/yang991178/fluent-reader). The license of [the upstream]((https://github.com/yang991178/fluent-reader)) is [BSD 3-Clause License](./LICENSEOFUPSTREAM), the improved copy is licensed under [MIT License](./LICENSE).

## Notice

- I improve and fix small problems to this app.
- You can [sponsor me](https://patreon.com/MrWillCom) for my improvement to this app, but if you like this app's core features, you should go to [yang991178/fluent-reader](https://github.com/yang991178/fluent-reader) and sponsor [the original author](https://github.com/yang991178).

## Improved

- Change the menu's animation from CSS `clip-path` to CSS `width`.
  - Article from my blog about why changing this: [Closed. Closed Again.](https://mrwillcom.now.sh/2020/08/29/Closed-Closed-Again/)
  - Pull requests to the upstream:
      - [yang991178/fluent-reader #88](https://github.com/yang991178/fluent-reader/pull/88)
      - [yang991178/fluent-reader #86](https://github.com/yang991178/fluent-reader/pull/86)
- Add acrylic background for the menu.
  - Pull request to the upstream: [yang991178/fluent-reader #72](https://github.com/yang991178/fluent-reader/pull/72).

<hr />

**The original README**

## Download

For Windows 10 users, the recommended way of installation is through [Microsoft Store](https://www.microsoft.com/store/apps/9P71FC94LRH8?cid=github). 
This enables auto-update and experimental ARM64 support. 
macOS users can also get Fluent Reader from the [Mac App Store](https://apps.apple.com/app/id1520907427).

If you are using Linux or an older version of Windows, you can [get Fluent Reader from GitHub releases](https://github.com/yang991178/fluent-reader/releases).

## Features

<p align="center">
  <img src="https://github.com/yang991178/rss-reader/raw/master/docs/imgs/screenshot.jpg">
</p>

- A modern UI inspired by Fluent Design System with full dark mode support.
- Read locally, or sync with Feedbin or self-hosted services compatible with Fever API.
- Importing or exporting OPML files, full application data backup & restoration.
- Read the full content with the built-in article view or load webpages by default.
- Search for articles with regular expressions or filter by read status.
- Organize your subscriptions with folder-like groupings.
- Single-key [keyboard shortcuts](https://github.com/yang991178/fluent-reader/wiki/Support#keyboard-shortcuts).
- Hide, mark as read, or star articles automatically as they arrive with regular expression rules.
- Fetch articles in the background and send push notifications.

Support for other RSS services including Inoreader and Feedly are [under fundraising](https://github.com/yang991178/fluent-reader/issues/23). 

## Development

### Contribute

Help make Fluent Reader better by reporting bugs or opening feature requests through [GitHub issues](https://github.com/yang991178/fluent-reader/issues). 

You can also help internationalize the app by providing [translations into additional languages](https://github.com/yang991178/fluent-reader/tree/master/src/scripts/i18n). 
Refer to the repo of [react-intl-universal](https://github.com/alibaba/react-intl-universal) to get started on internationalization. 

If you enjoy using this app, consider supporting its development by donating through [GitHub Sponsors](https://github.com/sponsors/yang991178), [Paypal](https://www.paypal.me/yang991178), or [Alipay](https://hyliu.me/fluent-reader/imgs/alipay.jpg).

### Build from source
```bash
# Install dependencies
npm install

# Compile ts & dependencies
npm run build

# Start the application
npm run electron

# Generate certificate for signature
electron-builder create-self-signed-cert
# Package the app for Windows
npm run package-win

```

### Developed with

- [Electron](https://github.com/electron/electron)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [Fluent UI](https://github.com/microsoft/fluentui)
- [NeDB](https://github.com/louischatriot/nedb)
- [Mercury Parser](https://github.com/postlight/mercury-parser)

### License

BSD
