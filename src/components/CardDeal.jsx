import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () =>  (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find the best card deal <br className="sm:block hidden" />
					in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Take a few minutes to answer our questionnaire, and within 24 hours our team of international finance and crypto experts will send you a fully customized offer.
				</p>
				<Button styles="mt-10" />
			</div>

			<div className={layout.sectionImg}>
				<img src={card} alt='card' className="[w-100%] h-[100%]" />
			</div>
		</section>
	)

export default CardDeal