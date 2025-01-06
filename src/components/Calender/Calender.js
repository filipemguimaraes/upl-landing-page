import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { eventDetails } from "../../assets/textConst";
import "./Calender.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const parseEventDate = (buttonDate, buttonHour) => {
  const monthMap = {
    janeiro: "January",
    fevereiro: "February",
    março: "March",
    abril: "April",
    maio: "May",
    junho: "June",
    julho: "July",
    agosto: "August",
    setembro: "September",
    outubro: "October",
    novembro: "November",
    dezembro: "December",
  };

  try {
    const [day, month] = buttonDate.toLowerCase().split(" de "); // Extract day and month
    const formattedMonth = monthMap[month.trim()];

    if (!formattedMonth) throw new Error(`Invalid month: ${month}`);

    // Replace 'h' in time with ':'
    const formattedTime = buttonHour.replace("h", ":").trim();

    // Construct the date string
    const dateString = `${formattedMonth} ${day.trim()}, ${new Date().getFullYear()} ${formattedTime}`;
    const parsedDate = new Date(dateString);

    if (isNaN(parsedDate.getTime())) throw new Error("Invalid Date");

    return parsedDate;
  } catch (error) {
    console.error("Error parsing date:", buttonDate, buttonHour, error.message);
    return null; // Return null if parsing fails
  }
};

export const Calender = () => {
  const currentDate = new Date();

  // Reorder events: future events first, past events later
  const reorderedEvents = [...eventDetails].sort((a, b) => {
    const dateA = parseEventDate(a.buttonDate, a.buttonHour);
    const dateB = parseEventDate(b.buttonDate, b.buttonHour);

    if (!dateA || !dateB) return 0; // Handle invalid dates gracefully
    if (dateA > currentDate && dateB > currentDate) return dateA - dateB; // Sort future events by date
    if (dateA > currentDate) return -1; // Future events come before past events
    if (dateB > currentDate) return 1;
    return dateA - dateB; // Sort past events by date
  });

  // Find the index of the first upcoming event
  const initialSlideIndex = reorderedEvents.findIndex((event) => {
    const eventDate = parseEventDate(event.buttonDate, event.buttonHour);
    return eventDate && eventDate > currentDate;
  });

  // Default to the first slide if all events are in the past
  const startIndex = initialSlideIndex !== -1 ? initialSlideIndex : 0;

  return (
    <div id="calender-section">
      <Typography variant="h3" id="calender-title">
        Agenda
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1250: { slidesPerView: 3 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        initialSlide={startIndex} // Start with the next event or fallback to 0
      >
        {reorderedEvents.map((event, index) => {
          const eventDate = parseEventDate(event.buttonDate, event.buttonHour);
          const isPast = eventDate && eventDate < currentDate;
          const notActive = isPast || event.buttonLink === "#";

          return (
            <SwiperSlide key={index}>
              <Card className="calender-card">
                <CardContent style={{ textAlign: "center" }}>
                  <Typography variant="h5" className="calender-card-title">
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="calender-card-subtitle"
                  >
                    {event.subtitle}
                  </Typography>
                  <Button
                    variant="contained"
                    className={`calender-button ${
                      notActive ? "not-active" : ""
                    }`}
                    component="a"
                    href={event.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    {event.buttonLink !== "#" ? (
                      <div className="button-content">
                        <div className="button-date-time">
                          <span>{event.buttonDate}</span>
                          <span>{event.buttonHour}</span>
                        </div>
                        <LocationOnIcon className="calender-icon" />
                      </div>
                    ) : (
                      <div className="button-text-wrapper">
                        <span className="event-text">{event.buttonDate}</span>
                        <span className="confirm-text">A Confirmar</span>
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
