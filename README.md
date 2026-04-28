# St Philip's Hymn Selection

A simple static website for browsing and selecting hymns for church services.

## Files

- `index.html` contains the page structure
- `styles.css` contains the visual design
- `script.js` contains the hymn data and interactive behaviour

## Local use

1. Open `index.html` in a web browser.
2. Search hymns, tick selections, and add notes or tags.
3. Your selections, notes, and tags are saved in `localStorage` on that device and browser.

## Deploying to Render

This site is plain static HTML, CSS, and JavaScript, so no build step is needed.

1. Put these files in a Git repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
2. Push the repository to GitHub, GitLab, or another Git provider supported by Render.
3. In Render, click **New +** and choose **Static Site**.
4. Connect the repository.
5. Use these settings:
   - **Build Command:** leave blank
   - **Publish Directory:** `.`
6. Create the site and wait for deployment to finish.

## Updating lyrics links

Each hymn currently uses a placeholder `View Lyrics` URL in `script.js`:

- `https://example.com/lyrics`

When you have real lyric links, replace that placeholder with hymn-specific URLs.
