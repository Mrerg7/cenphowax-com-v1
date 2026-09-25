const APEX = 'cenphowax.com';

const LEGACY_PATH_PREFIXES = [
  '/wp-',
  '/xmlrpc.php',
  '/index.php',
  '/cgi-bin/',
  '/feed',
  '/rdf.xml',
  '/core/',
  '/lib/',
  '/storage/',
  '/amp/',
  '/comments/',
  '/trackback/',
];

const PATH_REDIRECTS = {
  '/sitemap.xml': '/sitemap-index.xml',
  '/wp-sitemap.xml': '/sitemap-index.xml',
  '/404': '/',
};

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
};

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
      ...SECURITY_HEADERS,
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const onDomain = host === APEX || host === `www.${APEX}`;

    if (onDomain) {
      const alias = PATH_REDIRECTS[url.pathname];
      if (alias) {
        return redirect(`https://${APEX}${alias}`);
      }

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
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
