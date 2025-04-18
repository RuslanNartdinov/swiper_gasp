import React from 'react';
import styles from './TimeLine.module.scss'
import MainTimeLine from './MainTimeLine/MainTimeLine';
import SecondTimeLine from './SecondTimeLine/SecondTimeLine';

interface ITimeLine {
	children?: string,

}

const TimeLine: React.FC<ITimeLine> = () => {
	const [storage, setStorage] = React.useState<any>();
	return (
		<div className={styles.container}>
			<MainTimeLine/>
			<SecondTimeLine/>
		</div>
	);
};

export default TimeLine;