module.exports = getUrl

// :)
// getUrl()
//     everything that comes together must someday fall apart
//\ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getUrl (r) {
  if (!r) return null
  if (/^[\w-]+\/[\w\.-]+$/.test(r))
    return "https://github.com/" + r
  else
    return null
}
