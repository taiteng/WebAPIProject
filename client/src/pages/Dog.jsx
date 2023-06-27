import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';

function Dog() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    setSearched(false)
    fetchDogData()
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  return (
    <>
      {!data ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading...
        </h1>
      ) : (
        <>
          <div style={{ background: 'linear-gradient(to bottom right, #A6BCE8, #FFC0C0)' }}>
            <style>
              {`
        .welcome-container {
          background: linear-gradient(to bottom right, #FBE8E8, #FCC2C2);
          text-align: center;
          padding: 40px;
          border-radius: 10px;
        }

        .welcome-heading {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
          background-image: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto; /* Adjust the background size as per your preference */
          animation: rainbow-effect 10s linear infinite;
        }
        .dog-card {
          background: linear-gradient(to bottom right, #FBE8E8, #FCC2C2);
          border-radius: 20px;
        }
        `}
            </style>
            <Header />
            <BackToTop />
            <section className="p-8 max-w-8xl mx-auto">
              <div className='container mx-auto mt-5 mb-5'>
                <div className="welcome-container">
                  <h1 className="text-center welcome-heading">Dog Breeds</h1>
                  <form
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto"
                    autoComplete="off"
                  >
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for a dog / breed"
                      className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </form>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 my-10 lg:my-20">
                  {!searched || text === "" ? (
                    data.map((dog) => (
                      <article key={dog.id} className='dog-card p-4 rounded relative'>
                      <div className="flex flex-col h-full">
                        <img src={dog.image.url} alt={dog.name} className='rounded md:h-72 w-full object-cover' />
                        <div className="flex-grow">
                          <h3 className='text-lg font-bold mt-4'>{dog.name || 'N/A'}</h3>
                          <p>Life Span: {dog.life_span || 'N/A'}</p>
                          <p>Origin: {dog.origin || 'N/A'}</p>
                          <p>Bred: {dog.bred_for || 'N/A'}</p>
                          <p>Temperament: {dog.temperament || 'N/A'}</p>
                        </div>
                        <div className='flex justify-center mt-2'>
                          <Button size="small">Add to Favourite</Button>
                        </div>
                      </div>
                    </article>
                    ))
                  ) : (
                    <>
                      {data.map((dog) => (
                        <article key={dog.id} className='dog-card p-4 rounded relative'>
                          <div className="flex flex-col h-full">
                          <img
                            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                            alt={dog.name}
                            className="rounded md:h-72 w-full object-cover"
                          />
                            <div className="flex-grow">
                              <h3 className='text-lg font-bold mt-4'>{dog.name}</h3>
                              <p>Life Span: {dog.life_span}</p>
                              <p>Origin: {dog.origin}</p>
                              <p>Bred: {dog.bred_for}</p>
                              <p>Temperament: {dog.temperament}</p>
                            </div>
                            <div className='flex justify-center mt-2'>
                              <Button size="small">Add to Favourite</Button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </>
      )}
    </>
  )
}
export default Dog
