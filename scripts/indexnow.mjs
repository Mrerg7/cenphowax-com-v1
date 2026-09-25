const KEY = '2a4f582b745ddc0ef0f942a353da3148';
const HOST = 'https://cenphowax.com';

const URLS = [
  `${HOST}/`,
  `${HOST}/domain-for-sale/`,
  `${HOST}/services/`,
  `${HOST}/services/brazilian-wax/`,
  `${HOST}/services/bikini-wax/`,
  `${HOST}/services/underarm-wax/`,
  `${HOST}/services/facial-waxing/`,
  `${HOST}/services/leg-waxing/`,
  `${HOST}/services/arm-waxing/`,
  `${HOST}/pricing/`,
  `${HOST}/faq/`,
  `${HOST}/aftercare/`,
  `${HOST}/about/`,
  `${HOST}/contact/`,
  `${HOST}/blog/`,
  `${HOST}/blog/brazilian-wax-central-phoenix/`,
  `${HOST}/blog/first-brazilian-wax-what-to-expect/`,
  `${HOST}/blog/hard-wax-vs-soft-wax/`,
  `${HOST}/blog/how-long-does-waxing-last/`,
  `${HOST}/blog/how-often-should-you-wax/`,
  `${HOST}/blog/waxing-in-phoenix-summer/`,
];

async function main() {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'cenphowax.com',
      key: KEY,
      keyLocation: `${HOST}/${KEY}.txt`,
      urlList: URLS,
    }),
  });

  if (!res.ok && res.status !== 202) {
    console.error(`IndexNow failed: ${res.status} ${await res.text()}`);
    process.exit(1);
  }

  console.log(`IndexNow accepted (${res.status}): ${URLS.length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
