
window.analytics = {
  link: (element) => {
    console.info(`[analytics] Tracking the click to go to "${element.href}"`)
  },
  page: (name) => {
    console.info(`[analytics] Tracking page wiew "${name}"`)
  }
}
