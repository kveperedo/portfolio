import { forwardRef } from 'react';

import Divider from './divider';
import InfoText from './infotext';
import SkillsCard from './skillscard';
import basicInfoStyles from './basicinfo.module.css';

interface Props {
	ref: React.Ref<HTMLDivElement>;
}

const BasicInfo: React.FC<Props> = forwardRef((_, ref) => {
	return (
		<div ref={ref} className={basicInfoStyles.container}>
			<h1 className={basicInfoStyles.header}>Basic Info</h1>

			<Divider staticClassName={basicInfoStyles.divider} isStatic />

			<div className={basicInfoStyles.infoCard}>
				<h3 className={basicInfoStyles.title}>EMPLOYMENT HISTORY</h3>
				<InfoText
					title='Junior Software Engineer'
					subtitle='May 2021 - Present'
					description='Lexagle Inc. (Makati City, Philippines)'
				/>
				<InfoText
					title='Software Engineer'
					subtitle='Feb 2020 - April 2021'
					description='SQREEM Technologies Pte. (Quezon City, Philippines)'
				/>
			</div>

			<Divider staticClassName={basicInfoStyles.divider} isStatic />

			<div className={basicInfoStyles.infoCard}>
				<h3 className={basicInfoStyles.title}>EDUCATION</h3>
				<InfoText
					title='BS Electronics Engineering'
					subtitle='2014 - 2019'
					description='Saint Louis University (Baguio City, Philippines)'
				/>
			</div>

			<Divider staticClassName={basicInfoStyles.divider} isStatic />

			<div className={basicInfoStyles.infoSkills}>
				<h3 className={basicInfoStyles.title}>SKILLS</h3>
				<div className={basicInfoStyles.skills}>
					<SkillsCard
						imageSrc='/images/webdev.png'
						title='Web Development'
						skills={['HTML5, CSS3', 'JavaScript, Typescript', 'React, Redux', 'Testing (Jest)']}
					/>

					<SkillsCard
						imageSrc='/images/design.png'
						title='Design'
						skills={['Figma', 'Adobe Photoshop', 'Responsive Web Design']}
					/>

					<SkillsCard
						imageSrc='/images/others.png'
						title='Others'
						skills={['Python', 'Arduino (C/C++)', 'SQL', 'Version Control (Git)']}
					/>
				</div>
			</div>

			<Divider staticClassName={basicInfoStyles.divider} isStatic />

			<div className={basicInfoStyles.infoCard}>
				<h3 className={basicInfoStyles.title}>LICENCES & CERTIFICATIONS</h3>
				<InfoText
					title='Testing React with Jest and Testing Library'
					subtitle='2021'
					description='Udemy'
					titleAddOns={<span className={basicInfoStyles.addOn}>(Certification)</span>}
				/>
				<InfoText
					title='Modern React with Redux'
					subtitle='2020'
					description='Udemy'
					titleAddOns={<span className={basicInfoStyles.addOn}>(Certification)</span>}
				/>
				<InfoText
					title='Electronics Engineer'
					subtitle='2019'
					description='Philippines Professional Regulation Commission'
					titleAddOns={<span className={basicInfoStyles.addOn}>(License)</span>}
				/>
				<InfoText
					title='Electronics Technician'
					subtitle='2019'
					description='Philippines Professional Regulation Commission'
					titleAddOns={<span className={basicInfoStyles.addOn}>(License)</span>}
				/>
			</div>
		</div>
	);
});

export default BasicInfo;
