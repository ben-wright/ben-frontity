const settings = {
  name: "ben-frontity",
  state: {
    frontity: {
      url: "https://benwrightdev.com",
      title: "Ben Wright",
      description: "React Native Developer",
    },
  },
  packages: [
    {
      name: "ben-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About Us", "/about/"],
            ["Work", "/work/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wp.benwrightdev.com/wp-json",
          homepage: "/home/",
          postsPage: "/blog/",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-53254775-8",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ],
};

export default settings;
