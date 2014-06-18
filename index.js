module.exports = getUrl

function getUrl (r) {
  if (!r) return null
  if (/^[\w-]+\/[\w\.-]+(#[a-z0-9]*)?$/.test(r))
    return "https://github.com/" + r
  else
    return null
}
