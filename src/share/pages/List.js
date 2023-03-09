import React, { useEffect } from 'react'
import routes from '../routes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadUsers } from '../../store/features/users/usersSlice'

function List ({ users, dispatch }) {
  useEffect(() => {
    try {
      // 这里做数据长度判断是为了避免服务端已经渲染过一遍的情况下页面组件初始化时再次渲染
      users.length === 0 &&
        dispatch(loadUsers('https://jsonplaceholder.typicode.com/users'))
      // dispatch(setTodos(data))
    } catch (error) {
      console.log(error)
    }
    return () => {
      console.log('Component unmounted')
      // 卸载回调
      window.INITIAL_STATE = undefined
    }
  }, [])
  return (
    <div>
      ListPage<Link to='/8888'>To a not found page</Link>
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateProps = state => {
  return { users: state.users }
}
// 添加loadData 方法, 被服务器端调用
const loadData = async store => {
  return store.dispatch(loadUsers('https://jsonplaceholder.typicode.com/users'))
}

// export default connect(mapStateProps)(List)
// 把页面组件封装成路由对象所需的内容
export default {
  element: connect(mapStateProps)(List),
  loadData
}
