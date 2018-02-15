// convert absolute web URL to relative url:
export const makeRelative = (href, DOMAIN) => {
  const apexName = DOMAIN.replace("www.", "")
  let address = href || "#" // <-- with fallback
  address = address
    .replace("http://" + apexName, "")
    .replace("https://" + apexName, "")
    .replace("http://www." + apexName, "")
    .replace("https://www." + apexName, "")
  return address
}
