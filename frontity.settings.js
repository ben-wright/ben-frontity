const settings = {
  name: "ben-frontity",
  state: {
    frontity: {
      url: "https://benwrightdev.com",
      title: "Ben Wright",
      description: "Frontitiy portfolio website",
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
          api: "https://benwrightdev.com/wp-json",
          homepage: "/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
