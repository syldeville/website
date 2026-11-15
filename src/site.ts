// Edit these to update details used across the whole site.
export const SITE = {
  name: 'Syldeville Studio',
  owner: 'Sylvia',
  tagline: 'Apps, sewing and music by Sylvia.',
  // Get a free access key at https://web3forms.com (enter the email you want
  // messages sent to). Paste it here. The key is safe to make public.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  github: 'https://github.com/syldeville',
};

/** Prefix a path with the site's base path (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
