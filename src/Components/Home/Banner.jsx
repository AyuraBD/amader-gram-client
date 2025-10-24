
const Banner = () => {
  return (
    <section className="relative bg-cover bg-center h-[80vh] text-white" style={{ backgroundImage: "url('/images/village-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Amader Gram</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          A digital home for our community — connect, share, and grow together.
        </p>
        <div className="flex gap-4">
          <a href="/register" className="bg-primary hover:bg-green-700 text-white font-semibold duration-300 hover-glow py-2 px-6 rounded">
            Join the Community
          </a>
          <a href="/notices" className="bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white duration-300 font-semibold py-2 px-6 rounded">
            View Notices
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner