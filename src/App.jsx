import './App.css'
import { useState, useEffect } from 'react'
import fetch from './api/fetch'
import de from '../src/assets/de.json'
import en from '../src/assets/eng.json'

//components
import Navbar from './components/Navbar'
import Symbol from './components/Symbol/Symbol'
import Animation from './components/Animation/Animation'

const App = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [nextPage, setNextPage] = useState(1)
  const [perPage, setPerPage] = useState(5)
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const [videos, setVideos] = useState([])

  const storedLanguage = localStorage.getItem('language')
  const [lang, setLang] = useState(storedLanguage === 'de' ? de : en)
  const [activeLang, setActiveLang] = useState(
    storedLanguage === 'de' ? 'de' : 'en'
  )
  let activeLangStyle = { border: 'white 2px solid' }
  let inactiveLangStyle = { border: 'none' }

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

  const handleLoadMoreClick = () => setNextPage(nextPage + 1)

  const handleLoadLessClick = () => {
    if (nextPage !== 1) {
      setNextPage(nextPage - 1)
    }
  }

  return (
    <>
      <Navbar
        lang={lang}
        setLang={setLang}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />

      <Animation />

      <h3>{lang.title}</h3>

      <h1>{lang.subtitle}</h1>
      <h2>{lang.treatments}</h2>

      <p>{lang.relaxation_centric_therapies_title}</p>
      <p>{lang.relaxation_centric_therapies_summary}</p>
      <p>{lang.relaxation_centric_therapies_price}</p>

      <p>{lang.advanced_therapies_title}</p>
      <p>{lang.advanced_therapies_summary}</p>
      <p>{lang.advanced_therapies_price}</p>

      <p>{lang.wellness_therapies_title}</p>
      <p>{lang.wellness_therapies_summary}</p>
      <p>{lang.wellness_therapies_price}</p>

      <p>{lang.about_title}</p>
      <p>{lang.about_summary}</p>

      <p>{lang.client_feedback_title}</p>
      <p>{lang.client_feedback_first_client_summary}</p>
      <p>{lang.client_feedback_first_client_name}</p>
      <p>{lang.client_feedback_second_client_summary}</p>
      <p>{lang.client_feedback_second_client_name}</p>

      <p>{lang.contact_title}</p>
      <p>{lang.contact_tel}</p>
      <p>{lang.contact_address}</p>

      <p>{lang.opening_hours_title}</p>
      <p>{lang.opening_hours_summary}</p>

      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src.original}
            alt={image.alt}
            style={{ height: '100px', margin: '20px' }}
          />
        ))}
      </div>

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
