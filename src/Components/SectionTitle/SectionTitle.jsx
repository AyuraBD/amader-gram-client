
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="py-5 text-center">
      <h3 className='text-3xl font-semibold mb-2'>{heading}</h3>
      <p>{subHeading}</p>
    </div>
  )
}

export default SectionTitle