const APEX = 'cenphowax.com';

const LEGACY_PATH_PREFIXES = [
  '/wp-',
  '/xmlrpc.php',
  '/index.php',
  '/cgi-bin/',
  '/feed',
  '/rss.xml',
  '/rdf.xml',
  '/core/',
  '/lib/',
  '/storage/',
  '/amp/',
  '/comments/',
  '/trackback/',
];

function isLegacyPath(pathname) {
  return LEGACY_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix)
  );
}

function isLegacyQuery(searchParams) {
  return ['p', 'page_id', 'attachment_id', 'cat'].some((key) => {
    const value = searchParams.get(key);
    return value !== null && /^\d+$/.test(value);
  });
}

function redirect(location) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: location,
      'Cache-Control': 'public, max-age=300',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const onDomain = host === APEX || host === `www.${APEX}`;

    if (onDomain) {
      const legacy = isLegacyPath(url.pathname) || isLegacyQuery(url.searchParams);
      const offCanonical = host !== APEX || url.protocol !== 'https:';

      if (legacy || offCanonical) {
        const location = legacy
          ? `https://${APEX}/`
          : `https://${APEX}${url.pathname}${url.search}`;
        return redirect(location);
      }
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
