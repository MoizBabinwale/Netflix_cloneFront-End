import React, { useEffect, useState } from 'react'

import './Home.scss'
import axios from 'axios'
import { BiPlay, BiPlus } from 'react-icons/bi'
const apikey = 'aafd54f09e94eb5cc231ac7e9b85955b'
const url = 'https://api.themoviedb.org/3'
const imgUrl = 'https://image.tmdb.org/t/p/original'
const Card = ({ img }) => {
    return (

        <div>
            <img className='card' src={img} alt="Cover" />

        </div>
    )
}
const Row = ({ title, arr = [{
    img: "data:image/jpeg;base64,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"
}] }) => {
    return (

        <div className='row'>
            <h2>{title}</h2>
            <div>
                {
                    arr.map((item, index) => (
                        <Card key={index} img={`${imgUrl}${item.poster_path}`} />
                    ))
                }
            </div>


        </div>
    )
}
function Home() {
    const [populer, setPopuler] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, settopRated] = useState([])
    const [nowPlaying, setnowPlaying] = useState([])
    useEffect(() => {
        const fetchPopulerData = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/popular?api_key=${apikey}&language=en-US&page=1`)
            setPopuler(results);
            const { data } = await axios.get(`${url}/movie/upcoming?api_key=${apikey}&language=en-US&page=1`)
            setUpcoming(data.results)
        }
        const fetchTopRated = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/top_rated?api_key=${apikey}&language=en-US&page=1`)
            settopRated(results)
            const { data } = await axios.get(`${url}/movie/now_playing?api_key=${apikey}&language=en-US&page=1`)
            setnowPlaying(data.results)

        }
        fetchPopulerData();
        fetchTopRated();
    }, [])

    return (
        <section className='home'>
            <div className="banner" style={{
                backgroundImage: populer[0] ? `url(${`${imgUrl}${populer[0].poster_path}`})` : 'rgb(30,30,30);'
            }}>
                {
                    populer[0] && (

                        <h1>{populer[0].original_title}</h1>
                    )
                }
                {
                    populer[0] && (

                        <p>{populer[0].overview}</p>
                    )
                }
                <div>
                    <button><BiPlay /> Play </button>
                    <button>My List<BiPlus /></button>

                </div>
            </div>
            <Row title={"Populer on Netflix"} arr={populer} />
            <Row title={"Upcoming Movies"} arr={upcoming} />
            <Row title={"Tv Shows"} arr={topRated} />
            <Row title={"Recently viewed"} arr={nowPlaying} />
        </section>
    )
}

export default Home
