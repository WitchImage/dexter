import { useMemo, type FC } from 'react';
import styles from './pagination.module.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

interface Props {
    currentPage: number;
    initPage: number;
    lastPage: number;
}

const Pagination: FC<Props> = ({ currentPage, initPage, lastPage }) => {
    const pages = useMemo(() => {
        const pagesArray: number[] = [];
        for (let i = initPage; i <= lastPage; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [initPage, lastPage]);

    return (
        <aside className={styles.paginationContainer}>
            <div className={`${styles.paginationItem} ${styles.leftArrow}`}>
                <AiOutlineDoubleLeft />
            </div>
            {pages.map(page => (
                <div
                    className={`
                    ${currentPage === page ? styles.pageSelected : ''}
                    ${styles.paginationItem}
                    `}
                    key={page}
                >
                    {page}
                </div>
            ))}
            <div className={`${styles.paginationItem} ${styles.rightArrow}`}>
                <AiOutlineDoubleRight />
            </div>
        </aside>
    );
};

export default Pagination;
