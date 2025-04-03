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
import AssignmentIcon from "@mui/icons-material/Assignment";
import LanguageIcon from "@mui/icons-material/Language";

// Simplified date parser for ISO format
const parseEventDate = (buttonDate, buttonHour) => {
  try {
    // Combine ISO date and time into a single string
    const dateString = `${buttonDate}T${buttonHour}`;
    const parsedDate = new Date(dateString);

    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid Date");
    }

    return parsedDate;
  } catch (error) {
    console.error("Error parsing date:", buttonDate, buttonHour, error.message);
    return null;
  }
};

const formatDateToReadable = (isoDate) => {
  const monthMap = {
    "01": "janeiro",
    "02": "fevereiro",
    "03": "março",
    "04": "abril",
    "05": "maio",
    "06": "junho",
    "07": "julho",
    "08": "agosto",
    "09": "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
  };

  try {
    // Split the ISO date into parts
    const [year, month, day] = isoDate.split("-");
    const readableDate = `${parseInt(day, 10)} de ${monthMap[month]}`; // Convert day to integer to remove leading zero

    return readableDate;
  } catch (error) {
    console.error("Error formatting date:", isoDate, error.message);
    return isoDate; // Return the original date if there's an error
  }
};

export const Calender = () => {
  const currentDate = new Date();

  // Sort events by date and time
  const reorderedEvents = [...eventDetails].sort((a, b) => {
    const dateA = parseEventDate(a.buttonDate, a.buttonHour);
    const dateB = parseEventDate(b.buttonDate, b.buttonHour);

    if (!dateA || !dateB) return 0; // If any date is invalid, keep original order
    return dateA - dateB; // Chronological order
  });

  // Find the index of the first upcoming event
  const initialSlideIndex = reorderedEvents.findIndex((event) => {
    const eventDate = parseEventDate(event.buttonDate, event.buttonHour);
    return eventDate && eventDate > currentDate;
  });

  // Default to the first slide if all events are in the past
  const startIndex = initialSlideIndex !== -1 ? initialSlideIndex : 0;

  // Map icon names to components
  const iconMap = {
    LocationOnIcon: LocationOnIcon,
    AssignmentIcon: AssignmentIcon,
    LanguageIcon: LanguageIcon,
  };

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
        initialSlide={startIndex} // Start with the next event
      >
        {reorderedEvents.map((event, index) => {
          const eventDate = parseEventDate(event.buttonDate, event.buttonHour);
          const isPast = eventDate && eventDate < currentDate;
          const notActive = isPast || event.buttonLink === "#";

          return (
            <SwiperSlide key={index}>
              <Card className="calender-card">
                <CardContent className="calender-card-content">
                  <Typography variant="h5" className="calender-card-subtitle">
                    {event.subtitle}
                  </Typography>
                  <Typography variant="body1" className="calender-card-title">
                    {event.title}
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
                          <span>{formatDateToReadable(event.buttonDate)}</span>
                          <span>{event.buttonHour}</span>
                        </div>
                        {React.createElement(
                          iconMap[event.eventIcon] || LocationOnIcon,
                          {
                            className: "calender-icon",
                          }
                        )}
                      </div>
                    ) : (
                      <div className="button-text-wrapper">
                        <span>{formatDateToReadable(event.buttonDate)}</span>
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
