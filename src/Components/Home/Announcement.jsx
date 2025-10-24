
const Announcement = () => {
  const announcements = [
  {
    title: 'Electricity outage on Oct 7',
    message: 'Power will be unavailable from 10 AM to 2 PM due to maintenance.',
    date: 'Oct 6, 2025',
  },
  {
    title: 'Vaccination Drive',
    message: 'Free COVID-19 vaccines available at the community center on Oct 8.',
    date: 'Oct 5, 2025',
  },
  {
    title: 'Mosque Renovation',
    message: 'Renovation work begins Oct 10. Friday prayers will be held at the school hall.',
    date: 'Oct 4, 2025',
  },
];
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">📢 Admin Announcements</h2>
        <div className="space-y-6">
          {announcements.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.message}</p>
              <p className="text-sm text-gray-500 mt-2">Posted on {item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Announcement