// eslint-disable-next-line no-unused-vars
class MediaFactory {
      constructor (data) {
            if ('video' in data) {
                  // eslint-disable-next-line no-undef
                  return new Video(data)
            } else {
                  // eslint-disable-next-line no-undef
                  return new Photo(data)
            }
      }
}