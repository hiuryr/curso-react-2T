import Banner from 'components/Banner';
import styles from './Player.module.css';
import Tittle from 'components/Tittle';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/hiuryr/curso-api-mock/videos?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVideo(...data)
            })
    }, [])

    if (!video) { 
        return <NotFound />;
    }

    return (
        <>
            <Banner img="player" />
            <Tittle>
                <h1>Player</h1>
            </Tittle>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.tittle}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;