import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Germany',
		icon: <FiMapPin />,
		href: null
	},
	{
		id: 2,
		name: 'ubaidullah3048@gmail.com',
		icon: <FiMail />,
		href: 'mailto:ubaidullah3048@gmail.com'
	},
	{
		id: 3,
		name: '+36 70 576 4743',
		icon: <FiPhone />,
		href: 'tel:+36705764743'
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2 flex justify-center">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex items-center mb-4" key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							{contact.href ? (
								<a 
									href={contact.href} 
									className="text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
								>
									{contact.name}
								</a>
							) : (
								<span className="text-lg text-ternary-dark dark:text-ternary-light">
									{contact.name}
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
