module.exports = {
  head: {
    title: "Topographer",
    meta: [
      { charset: "utf-8" },
      { name: "Author", content: "Ben Smith AKA vohzd" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "layout" },
      { hid: "description", name: "description", content: "cool layout engine" },
    ]
  },
  modules: [
    "@nuxtjs/axios"
  ],
  mode: "spa",
  loading: { color: "#532a55" }
}
