/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.evahelpful.org/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
