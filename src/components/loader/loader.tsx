import type { FC } from 'react';
import PokeballIcon from '@public/pokeball.png';
import styles from './loader.module.css';

const Loader: FC = () => {
    return (
        <main>
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.pokeball}
                        src={PokeballIcon.src}
                        alt='Pokeball image with a spinner animation'
                        width={50}
                        height={50}
                    />
                    <h2>
                        Loading <span className={styles.firstDot}>.</span>
                        <span className={styles.secondDot}>.</span>
                        <span className={styles.thirdDot}>.</span>
                    </h2>
                </div>
            </div>
        </main>
    );
};

export default Loader;
