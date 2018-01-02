module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'TidBitTuts', // Site title.
  siteTitleAlt: 'TidBitTuts', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: '', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A Tuts Site by Mox', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Web Development', // Default category for posts.
  userName: '', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: '', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: '',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: '',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2018. Mox Development', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};
