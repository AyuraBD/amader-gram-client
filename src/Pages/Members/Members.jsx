import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { Link } from 'react-router';
const Members = () => {
  const axiosSecure = useAxiosSecure();
  const {data: members = []} = useQuery({
    queryKey: ['users'],
    queryFn: async ()=>{
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  return (
    <div className='h-dvh'>
      <SectionTitle heading="All village Members" subHeading="Our all members at a glance"></SectionTitle>
      {/* All villagers */}
      <div className='container m-auto px-2'>
        <div className="w-full">

          {/* Desktop / Tablet: table (hidden on very small screens) */}
          <div className="overflow-x-auto bg-gray-200 rounded-lg shadow-sm">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="w-16">Photo</th>
                  <th>Name</th>
                  <th>Workplace</th>
                  <th className="hidden md:table-cell">Address</th>
                  <th>Phone</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member._id}>
                    <td>
                      <img
                        src={member.profilePic || "/default-avatar.png"}
                        alt={member.nickName}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="font-medium">{member.name}</td>
                    <td>{member.workplace}</td>
                    <td className="hidden md:table-cell truncate max-w-xs">{member.address}</td>
                    <td>
                      <a href={`tel:${member.phone}`} className="text-blue-600 underline">
                        {member.phone}
                      </a>
                    </td>
                    <td className="text-right">
                      <Link to="/" className="btn btn-sm btn-outline btn-primary">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}

                {members.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No members found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members