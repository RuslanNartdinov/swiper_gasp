import React from 'react';
import styles from './DateBlock.module.scss'

interface IDateBlock {
	children?: string,

}

const DateBlock: React.FC<IDateBlock> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.date}>1999</div>
			<div className={styles.description}>
				13 сентября - частное солнечное затмение, видимое в
				Южной Африке и части
				Антарктиды
			</div>
		</div>
	);
};

export default DateBlock;