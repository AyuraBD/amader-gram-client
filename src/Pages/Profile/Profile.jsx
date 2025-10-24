import useAuth from "../../Hooks/useAuth/useAuth"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { Camera, Mail, Phone, MapPin, Briefcase, Building2, Users, Droplet, AlertCircle, Edit2, Save, X, Facebook, MessageCircle } from 'lucide-react';
import { useState } from "react";

const Profile = ({onEdit}) => {
  const {user, logOut} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setLoading(false);
  };

  // const signOut = () =>{
  //   logOut();
  // }
  // const {data: profile} = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: async () =>{
  //     const res = await axiosSecure.get(`/profile/${user?.email}`);
  //     return res.data
  //   }
  // })
  const profile = {
    id: '1',
    name: 'Rajesh Kumar',
    profession: 'Teacher',
    designation: 'Senior Mathematics Teacher',
    contact: '+880 1712-345678',
    email: 'rajesh.kumar@email.com',
    address: 'House 42, Main Road, Village Center',
    company: 'Village High School',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bloodGroup: 'O+',
    emergencyContact: '+880 1798-765432',
    emergencyContactName: 'Priya Kumar (Wife)',
    familyMembers: [
      { name: 'Priya Kumar', relation: 'Wife' },
      { name: 'Aarav Kumar', relation: 'Son' },
      { name: 'Devi Kumar', relation: 'Daughter' }
    ],
    skills: ['Mathematics Tutoring', 'Computer Basics', 'Community Event Planning'],
    availability: 'Available on weekends',
    socialLinks: {
      facebook: 'rajesh.kumar',
      whatsapp: '+880 1712-345678'
    }
  };
  // if (!profile) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-50">
  //       <div className="text-center p-8 bg-white rounded-lg shadow-md">
  //         <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
  //         <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Not Found</h2>
  //         <p className="text-gray-600">Unable to load profile information. Please try again later.</p>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-4">
              <div className="relative">
                {loading && (
                  <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse border-4 border-white"></div>
                )}
                {!imageError ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    className={`w-32 h-32 rounded-full border-4 border-white object-cover ${loading ? 'hidden' : ''}`}
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center">
                    <span className="text-4xl text-gray-400">{profile.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                <p className="text-lg text-gray-600">{profile.profession}</p>
                {profile.designation && (
                  <p className="text-sm text-gray-500">{profile.designation}</p>
                )}
              </div>
              <button
                onClick={onEdit}
                className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Phone className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800">{profile.contact}</p>
              </div>
            </div>
            {profile.email && (
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{profile.email}</p>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={20} />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-800">{profile.address}</p>
              </div>
            </div>
            {profile.company && (
              <div className="flex items-start gap-3">
                <Building2 className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="text-gray-800">{profile.company}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Emergency & Health Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.bloodGroup && (
              <div className="flex items-start gap-3">
                <Droplet className="text-red-600 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Blood Group</p>
                  <p className="text-gray-800 font-semibold">{profile.bloodGroup}</p>
                </div>
              </div>
            )}
            {profile.emergencyContact && (
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-600 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Emergency Contact</p>
                  <p className="text-gray-800">{profile.emergencyContactName}</p>
                  <p className="text-gray-600 text-sm">{profile.emergencyContact}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {profile.familyMembers && profile.familyMembers.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users size={24} />
              Family Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.familyMembers.map((member, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-3">
                  <p className="font-semibold text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.relation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {profile.skills && profile.skills.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Skills & Services Offered</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            {profile.availability && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Availability</p>
                <p className="text-gray-800">{profile.availability}</p>
              </div>
            )}
          </div>
        )}

        {profile.socialLinks && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Connect</h2>
            <div className="flex gap-4">
              {profile.socialLinks.facebook && (
                <a
                  href={`https://facebook.com/${profile.socialLinks.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Facebook size={20} />
                  Facebook
                </a>
              )}
              {profile.socialLinks.whatsapp && (
                <a
                  href={`https://wa.me/${profile.socialLinks.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile