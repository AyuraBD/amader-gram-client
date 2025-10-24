
const Donation = () => {
  const goal = 20000;
  const raised = 12000;
  const progress = Math.min((raised / goal) * 100, 100);
  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Support the Helpless</h2>
        <p className="text-gray-700 mb-6">
          We're raising funds to help families affected by recent floods. Your contribution can make a real difference.
        </p>

        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-6 w-full mb-4 overflow-hidden">
          <div
            className="bg-green-600 h-full text-xs text-white text-center"
            style={{ width: `${progress}%` }}
          >
            ৳{raised} raised of ৳{goal}
          </div>
        </div>

        {/* Donate Button */}
        <a
          href="/donate"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded"
        >
          Donate Now
        </a>

        {/* Optional Image */}
        <div className="mt-6">
          <img
            src="/images/donation-banner.jpg"
            alt="Donation cause"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Donation