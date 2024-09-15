import "./EventItem.css";

const EventItem = (props) => {
  const { imageSrc, location, day, month, title } = props;

  const isTBA = !location && !day && !month && !title;

  return (
    <div className="event-item">
      <a href="/#">
        {imageSrc && (
          <div className="event-item-image-wrapper">
            <img
              src="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png"
              alt=""
              className="event-item-image"
            />
          </div>
        )}

        <div className="event-item-content-wrapper">
          <div className="event-date">
            {day && month ? (
              <>
                <span className="event-day">{day}</span>
                <span className="event-month">{month}</span>
              </>
            ) : (
              <span className="event-month-unknown" style={{ fontSize: "13px" }}>
                Nežinoma
              </span>
            )}
          </div>
          <div className="event-item-content">
            {isTBA ? (
              <span className="event-location" style={{ fontWeight: "bold", fontSize: "20px" }}>
                Bus paskelbta vėliau
              </span>
            ) : (
              <span className="event-location">
                {location ? location : "Event will be hosted Online"}
              </span>
            )}
            {title && <h3 className="event-title">{title}</h3>}
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventItem;
