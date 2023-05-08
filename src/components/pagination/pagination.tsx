import { useMemo, type FC } from 'react';
import styles from './pagination.module.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

interface Props {
    currentPage: number;
    initPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({
    currentPage,
    initPage,
    lastPage,
    onPageChange,
}) => {
    const handleLeftArrowClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleRightArrowClick = () => {
        if (currentPage < lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const pages = useMemo(() => {
        const pagesArray: number[] = [];
        for (let i = initPage; i <= lastPage; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [initPage, lastPage]);

    return (
        <aside className={styles.paginationContainer}>
            <div
                className={`${styles.paginationItem} ${styles.leftArrow}`}
                onClick={() => handleLeftArrowClick()}
            >
                <AiOutlineDoubleLeft />
            </div>
            {pages.map(page => (
                <div
                    className={`
                    ${currentPage === page ? styles.pageSelected : ''}
                    ${styles.paginationItem}
                    `}
                    key={page}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </div>
            ))}
            <div
                className={`${styles.paginationItem} ${styles.rightArrow}`}
                onClick={() => handleRightArrowClick()}
            >
                <AiOutlineDoubleRight />
            </div>
        </aside>
    );
};

export default Pagination;
