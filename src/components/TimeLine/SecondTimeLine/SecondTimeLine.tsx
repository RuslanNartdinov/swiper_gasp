import React from 'react';
import styles from './SecondTimeLine.module.scss'
import DateBlock from '../../../ui/DateBlock/DateBlock';

interface ISecondTimeLine {
	children?: string,

}

const SecondTimeLine: React.FC<ISecondTimeLine> = () => {
	return (
		<div className={styles.container}>
			<DateBlock/>
			<DateBlock/>
			<DateBlock/>
			<DateBlock/>
		</div>
	);
};

export default SecondTimeLine;