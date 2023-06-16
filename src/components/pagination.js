import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function Paginated() {
  const [page, setPage] = useState(1)

  const fetchProjects = (page = 1) => axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)

  const {
    isLoading,
    isError,
    error,
    data: colors,
    isFetching,
    isPreviousData,
  } = useQuery(['colors', page], () => fetchProjects(page), { keepPreviousData: true, select: (data) => data?.data })


  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {
            colors?.map((color, id) => (
              <li key={color.id}>{color.id} : {color.label}</li>
            ))
          }
        </ul>
      )}
      <span>Current Page: {page}</span>
      <div>
        <button
          onClick={() => setPage(page => page - 1)}
          disabled={page === 1}
        >
          prev
        </button>
        <button
          onClick={() => setPage(page => page + 1)}
          disabled={page === 4}

        >
          Next
        </button>
      </div>

      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}

export default Paginated