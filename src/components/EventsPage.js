import React from "react"
import "../styles/EventsPage.css"
import YogaDay23 from "../EventImages/YogaDay23.jpg"
import Rpd from "../EventImages/RepublicDay.jpg"
import tcd from "../EventImages/TeachersDay2022.jpg"
import ssm from "../EventImages/StaffSportsMeet22.jpg"
import interiiit from "../EventImages/InterIIIT.jpg"
import asm from "../EventImages/AnnualSportsMeet22.jpg"
import habba from "../EventImages/IIITHabba.jpg"
import idd from "../EventImages/IndependenceDay22.jpg"
import tfs from "../EventImages/Techfest.jpg"
import gbn from "../EventImages/Garba2022.jpg"
import bogm from "../EventImages/BOGmeet.jpg"
import conv from "../EventImages/Convocation2022.jpg"

const eventsData = [
  {
    id: 1,
    name: "Yoga Day 2023",
    thumbnail: YogaDay23,
    driveLink:
      "https://drive.google.com/drive/folders/10xInGPjI0_n5u9OU-JJcojt1K-G7iC67?usp=drive_link",
  },
  {
    id: 2,
    name: "Republic Day 2023",
    thumbnail: Rpd,
    driveLink:
      "https://drive.google.com/drive/folders/1ijtDX3OGMmmaAbXztIR5di5Yn8EiOw2M?usp=drive_link",
  },
  {
    id: 5,
    name: "Inter IIIT 2023",
    thumbnail: interiiit,
    driveLink:
      "https://drive.google.com/drive/folders/1CqQdCtPzytWVwy9bpASCszKKstsYfZu1?usp=drive_link",
  },
  {
    id: 3,
    name: "Teachers Day 2022",
    thumbnail: tcd,
    driveLink:
      "https://drive.google.com/drive/folders/1yq-iEW-gNo7_EeNACLcKq_ZNH3FGAxs9?usp=drive_link",
  },
  {
    id: 4,
    name: "Staff Sports Meet 2022",
    thumbnail: ssm,
    driveLink:
      "https://drive.google.com/drive/folders/1-c8Bf8-s6tcDRKRgH6d_A_rvsy7MdrGY?usp=drive_link",
  },
  {
    id: 6,
    name: "Annual Sports Meet 2022",
    thumbnail: asm,
    driveLink:
      "https://drive.google.com/drive/folders/1RapqAE0hIZ9sGROAgcqVcDR_E3iNWD_x?usp=drive_link",
  },
  {
    id: 7,
    name: "IIIT Habba 2022",
    thumbnail: habba,
    driveLink:
      "https://drive.google.com/drive/folders/1nUoDRiXthCbz0XQ3vLyJ3aEPJ1nkkMOh?usp=drive_link",
  },
  {
    id: 8,
    name: "Independence Day 2022",
    thumbnail: idd,
    driveLink:
      "https://drive.google.com/drive/folders/1hRB6OZsglxUVu6POwksf-0_V8FRitNyO?usp=drive_link",
  },
  {
    id: 9,
    name: "Tech Fest 2022",
    thumbnail: tfs,
    driveLink:
      "https://drive.google.com/drive/folders/140pRFFCYbxXuq8y3HdiDO0GJGCWh5Q-2?usp=drive_link",
  },
  {
    id: 10,
    name: "Garba Night 2022",
    thumbnail: gbn,
    driveLink:
      "https://drive.google.com/drive/folders/1c8J79WRkeWlLUgEZDoER9ggBvwlo3cqi?usp=drive_link",
  },
  {
    id: 11,
    name: "BOG Meet",
    thumbnail: bogm,
    driveLink:
      "https://drive.google.com/drive/folders/1ojtaomEGf8Yqrbb8DItNnTrhj6ceExad?usp=drive_link",
  },
  {
    id: 12,
    name: "Convocation 2022",
    thumbnail: conv,
    driveLink:
      "https://drive.google.com/drive/folders/1YJqDgyfPUxL9HoqpY5CphEkxPkGH7LzP?usp=drive_link",
  },
]

const EventCard = ({ event }) => {
  const { id, name, thumbnail, driveLink } = event

  return (
    <a href={driveLink} target="_blank" rel="noopener noreferrer">
      <div className="event-card">
        <div
          className="event-thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="event-info">
            <p className="event-name">{name}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

const EventsPage = () => {
  return (
    <div className="events-page">
      {eventsData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventsPage
