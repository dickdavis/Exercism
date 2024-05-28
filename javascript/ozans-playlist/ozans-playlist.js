// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let newPlaylist = new Set()
  playlist.forEach((song) => newPlaylist.add(song))
  return Array.from(newPlaylist)
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const playlistAsSet = new Set(playlist)
  return playlistAsSet.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const playlistAsSet = new Set(playlist)
  playlistAsSet.add(track)
  return Array.from(playlistAsSet)
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const playlistAsSet = new Set(playlist)
  playlistAsSet.delete(track)
  return Array.from(playlistAsSet)
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let uniqueArtists = new Set()
  playlist.forEach((track) => {
    uniqueArtists.add(track.match(/(\w\s?)*$/g)[0])
  })

  return Array.from(uniqueArtists)
}
