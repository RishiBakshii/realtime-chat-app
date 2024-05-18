type PropTypes = {
    openFriendRequestForm:()=>void
    numberOfFriendRequest:number
}

export const FriendRequestButton = ({numberOfFriendRequest,openFriendRequestForm}:PropTypes) => {
  return (
    <button onClick={openFriendRequestForm}>
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="absolute font-light text-sm  -top-3 -right-3 bg-violet-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {numberOfFriendRequest}
            </span>
        </div>
    </button>
  )
}