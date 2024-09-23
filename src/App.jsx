import './App.css'
import { useState, useEffect } from 'react'
import fetch from './api/fetch'

const App = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [nextPage, setNextPage] = useState(1)
  const [perPage, setPerPage] = useState(5)
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (images.length === 0) {
      getImages()
    }
    getVideos()
  }, [nextPage, perPage])

  const getImages = async () => {
    setLoading(true)
    await fetch
      .get(`https://api.pexels.com/v1/search?query=$massage&per_page=20`)
      .then((res) => {
        setImages([...images, ...res.data.photos])
        setLoading(false)
        console.log(res)
      })
      .catch((er) => {
        if (er.response) {
          const error =
            er.response.status === 404
              ? 'Page not found'
              : 'Something wrong has happened'
          setError(error)
          setLoading(false)
          console.log(error)
        }
      })
  }

  const getVideos = async () => {
    setLoading(true)
    await fetch
      .get(
        `https://api.pexels.com/videos/search?query=massage&page=${nextPage}&per_page=${perPage}`
      )
      .then((res) => {
        return res
      })
      .then((data) => {
        console.log(data)
        setVideos(data.data.videos)
        setLoading(false)
      })
      .catch((er) => {
        console.log(er)
        if (er.response) {
          const error =
            er.response.status === 404
              ? 'Page not found'
              : 'Something wrong has happened'
          setError(error)
          setLoading(false)
          console.log(error)
        }
      })
  }

  // useEffect(() => {
  //   const getImages = async () => {
  //     setLoading(true)
  //     await fetch
  //       .get(`https://api.pexels.com/v1/search?query=$massage&per_page=20`)
  //       .then((res) => {
  //         setImages([...images, ...res.data.photos])
  //         setLoading(false)
  //         console.log(res)
  //       })
  //       .catch((er) => {
  //         if (er.response) {
  //           const error =
  //             er.response.status === 404
  //               ? 'Page not found'
  //               : 'Something wrong has happened'
  //           setError(error)
  //           setLoading(false)
  //           console.log(error)
  //         }
  //       })
  //   }
  //   getImages()
  // }, [nextPage, perPage])

  // useEffect(() => {
  //   const getVideos = async () => {
  //     setLoading(true)
  //     await fetch
  //       .get(
  //         `https://api.pexels.com/videos/search?query=massage&page=${nextPage}&per_page=${perPage}`
  //       )
  //       .then((res) => {
  //         return res
  //       })
  //       .then((data) => {
  //         console.log(data)
  //         setVideos(data.data.videos)
  //         setLoading(false)
  //       })
  //       .catch((er) => {
  //         console.log(er)
  //         if (er.response) {
  //           const error =
  //             er.response.status === 404
  //               ? 'Page not found'
  //               : 'Something wrong has happened'
  //           setError(error)
  //           setLoading(false)
  //           console.log(error)
  //         }
  //       })
  //   }
  //   getVideos()
  // }, [nextPage, perPage])

  const handleLoadMoreClick = () => setNextPage(nextPage + 1)

  const handleLoadLessClick = () => {
    if (nextPage !== 1) {
      setNextPage(nextPage - 1)
    }
  }

  return (
    <>
      <h1>Hello World!</h1>
      <img
        style={{ width: '200px' }}
        src="https://github.com/SeresBeata/massage-website/blob/main/public/img/pexels-olly-3757952.jpg?raw=true"
      />
      {/* <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src.original}
            alt={image.alt}
            style={{ height: '100px', margin: '20px' }}
          />
        ))}
      </div> */}

      <div>
        {videos.map((video) => (
          <video
            key={video.id}
            src={video.video_files[0].link}
            width="750"
            height="500"
            controls
          ></video>
        ))}
      </div>

      <div>{nextPage}</div>
      <div>
        {nextPage && <button onClick={handleLoadMoreClick}>Next Page</button>}
      </div>
      <div>
        {nextPage && (
          <button onClick={handleLoadLessClick}>Previous Page</button>
        )}
      </div>
    </>
  )
}

export default App
