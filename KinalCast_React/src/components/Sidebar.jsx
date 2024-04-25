import React from 'react'

export const Sidebar = () => {
  //Codigo momentaneo
  const channels = [
    {id: '1', username: 'lolo', isOnline: false},
    {id: '2', username: 'Parmas', isOnline: true}
  ]

  return (
    <div className='sidebar-container'>
      <span className='sidebar-title'>For you</span>
      <span className='sidebar-subtitle'>Followed Channels</span>
      {
        channels.map((channel)=>{
          return(
            <div key={channel.id} className='sidebar-list-item'>
              <span className='sidebar-list-username'>{channel.username}</span>
              <span style={{color: channel.isOnline ? 'green': 'red'}}>{channel.isOnline ? 'Online': 'Offline'}</span>
            </div>
          )
        })
      }
    </div>
  )
}
