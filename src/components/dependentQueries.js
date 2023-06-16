import axios from 'axios'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => axios.get(`http://localhost:4000/users/${email}`)

const fetchCoursesByChannelId = (id) => axios.get(`http://localhost:4000/channels/${id}`)

const DependentQueries = ({ email }) => {

  const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email));
  const channelId = user?.data.channelId;

  //this query depedns on value of channelId
  const { data: channels } = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: channelId ? true : false,
    select: (data) => data.data
  })

  console.log({ channels })
  return (
    <div>DependentQueries
      <p>
        channel id : {user?.data.channelId}
        <ul>
          {channels?.courses.map((channel, id) => (
            <li key={id}>{channel}</li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export default DependentQueries