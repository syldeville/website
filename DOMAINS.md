# Domain ideas

A shortlist to think over. Nothing is registered yet.

## Prices (Amazon Route 53, under $15/yr)

AWS raised many domain prices on July 1, 2026. These figures come from
third-party price trackers (CostGoat, tldbee) as of November 2026, so confirm
them in the Route 53 console before you buy. Renewals cost the same as the
first year.

| Ending | ~Price/yr | Notes |
|---|---|---|
| `.click` | $3 | Cheapest. Fits the "press start" theme |
| `.link`  | $5 | Reads well for a hub site |
| `.work`  | $10 | Good for a services or portfolio site |

Not under $15: `.com` ($16), `.org` ($15), `.net` ($17), `.dev` ($17),
`.xyz` ($18). `.de`, `.it` and `.ca` are cheap but have residency rules.

## Name ideas

**Deville Studios**
- devillestudios.link ⭐ (my pick)
- devillestudios.work
- devillestudios.click

**Deville Design**
- devilledesign.link
- devilledesign.work
- devilledesign.click

**Your gamer tag**
- syldeville.link
- syldeville.click
- syldeville.work

**Free option**
- syldeville.is-a.dev ($0; you request it with a pull request to the is-a.dev project)

## Name check (web search, November 2026)

- **"Deville Studios":** no business by that name came up. Deville Enterprises,
  Inc. holds a "DEVILLE" trademark for live entertainment, including musical
  performances. If you release music under this name, do a quick trademark
  search first.
- **"Deville Design":** no business by that exact name came up. Similar names
  exist in unrelated fields (Deville Custom Homes, Deville Electric, Deville
  Coffee, Drink Deville Seltzers).

I couldn't check whether these domains are registered. To check, open the
Route 53 console, go to **Registered domains**, then **Register domains**, and
search the name.

## Pointing a domain at this site

1. Register the domain in Route 53.
2. In the domain's hosted zone, add four `A` records for the bare domain that
   point to GitHub Pages: `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153`. Also add a `CNAME` record for `www`
   that points to `syldeville.github.io`.
3. In GitHub, open the repository's **Settings**, then **Pages**, then
   **Custom domain**. Enter the domain and tick **Enforce HTTPS** once it's
   available.
4. The site's links adjust on their own on the next deploy.
