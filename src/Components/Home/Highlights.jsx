
const Highlights = () => {
  const members = [
  {
    name: 'Rahim Uddin',
    role: 'Farmer & Volunteer',
    image: '/images/rahim.jpg',
    bio: 'Helping with village cleanups and local farming tips.',
  },
  {
    name: 'Fatema Begum',
    role: 'Teacher',
    image: '/images/fatema.jpg',
    bio: 'Teaches at the local madrasa and runs evening literacy classes.',
  },
];

const jobs = [
  {
    title: 'Need a helping hand for rice harvesting',
    postedBy: 'Karim Ali',
    date: 'Oct 5, 2025',
  },
  {
    title: 'Tuition teacher for Class 6 student',
    postedBy: 'Nasima Khatun',
    date: 'Oct 3, 2025',
  },
];

const events = [
  {
    title: 'Village Clean-up Drive',
    date: 'Oct 10, 2025',
    location: 'Community Center',
  },
  {
    title: 'Fundraiser for Flood Victims',
    date: 'Oct 15, 2025',
    location: 'Mosque Courtyard',
  },
];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Community Highlights</h2>

        {/* Featured Members */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">🌟 Featured Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center gap-4">
                <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-bold">{member.name}</h4>
                  <p className="text-sm text-green-700">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Job Posts */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">💼 Recent Job Posts</h3>
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold">{job.title}</h4>
                <p className="text-sm text-gray-600">Posted by {job.postedBy} on {job.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🎉 Upcoming Events</h3>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date} at {event.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Highlights