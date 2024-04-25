const imageURL = 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'
const ChannelAvatar = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img
                src={url || imageURL}
                width='100%'
                height='100%'
                alt="Avatar" />
        </div>
    )
}

export const ChannelCard = (
    {
        title,
        id,
        username,
        isOnline,
        avatarUrl,
        navigateToChannelHandle
    }) => {
    const hanldeNavigate = () => {
        navigateToChannelHandle(id)
    }
    return (
        <div className="channels-card" onClick={hanldeNavigate}>
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span
                className="channels-card-title"
                style={{ color: isOnline ? 'green' : 'red' }}
            >
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}
