import { FaBriefcase, FaBullhorn, FaCalendarAlt, FaMosque, FaSchool } from 'react-icons/fa';

const QuickInfoCards = () => {
  const cards = [
  {
    title: 'Schools & Madrasas',
    icon: <FaSchool className="text-3xl text-primary" />,
    link: '/institutions',
    description: 'Explore educational institutions in our village.',
  },
  {
    title: 'Mosques',
    icon: <FaMosque className="text-3xl text-primary" />,
    link: '/mosques',
    description: 'Find prayer times and mosque details.',
  },
  {
    title: 'Notices',
    icon: <FaBullhorn className="text-3xl text-primary" />,
    link: '/notices',
    description: 'Stay updated with village announcements.',
  },
  {
    title: 'Job Posts',
    icon: <FaBriefcase className="text-3xl text-primary" />,
    link: '/jobs',
    description: 'Browse or share job opportunities.',
  },
  {
    title: 'Events',
    icon: <FaCalendarAlt className="text-3xl text-primary" />,
    link: '/events',
    description: 'See upcoming community events.',
  },
];
  return (
    <section className="py-12 bg-neutral">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-primary font-bold text-center mb-8">Quick Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-white flex flex-col justify-center items-center shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl text-primary font-bold mb-2">{card.title}</h3>
              <p className="text-dark text-sm">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickInfoCards