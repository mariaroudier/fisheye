class MediaFactory {
      constructor (data) {
            if ('video' in data) {
                  return new Video(data)
            } else {
                  return new Photo(data)
            }
      }
}