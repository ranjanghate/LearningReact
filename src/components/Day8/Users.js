import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
export const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active'

  return (
    <div>
        <Link to='/users/1'> User 1</Link>
        <Link to='/users/2'> User 2</Link>
        <Link to='/users/3'> User 3</Link>

        <button onClick={() => setSearchParams({ filter: 'active' })}> Filter Users </button>
        <button onClick={() => setSearchParams({})}> All Users </button>
        { showActiveUsers ? ( <h1> Filter Users </h1>) : ( <h1> Show all users </h1>) }
        <Outlet />
    </div>
  )
}
