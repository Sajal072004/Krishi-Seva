import React from 'react'

const arr = [
  {
    id: 1,
    name: "John",
    activity: "Ordered a new plant",
    time: "1 min ago",
    img: "profile_icon.png"
  },
  {
    id: 2,
    name: "Alice",
    activity: "Bought a gardening tool",
    time: "5 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 3,
    name: "Bob",
    activity: "Reviewed a plant",
    time: "10 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 4,
    name: "Charlie",
    activity: "Added a new plant to wishlist",
    time: "15 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 5,
    name: "Diana",
    activity: "Checked out with a new pot",
    time: "20 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 6,
    name: "Eve",
    activity: "Asked a question about a plant",
    time: "30 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 7,
    name: "Frank",
    activity: "Made a comment on a review",
    time: "40 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 8,
    name: "Grace",
    activity: "Saved a plant to favorites",
    time: "50 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 9,
    name: "Hannah",
    activity: "Followed a seller",
    time: "1 hour ago",
    img: "profile_icon.png"
  },
  {
    id: 10,
    name: "Ian",
    activity: "Shared a plant post",
    time: "2 hours ago",
    img: "profile_icon.png"
  }
];


const RecentActivity = () => {
  return (
    <div>
      <div className='flex justify-between items-center mx-2'>
        <h1 className='text-2xl text-green-500'>Recent Activity</h1>
        <p>View All </p>
      </div>
    </div>
  )
}

export default RecentActivity