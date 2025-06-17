import styles from './Home.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Tittle from "components/Tittle";
import { useEffect, useState } from 'react';

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/hiuryr/curso-api-mock/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>
            <Banner img="home" />
            <Tittle>
                <h1>Conheça nossos serviços!</h1>
            </Tittle>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
}

export default Home;