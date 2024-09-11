const EventItem = (props) => {
  const { imageSrc, location, day, month, title } = props;

  return (
    <div className="event-item">
      <a href="/#">
        {imageSrc && (
          <div className="event-item-image-wrapp">
            <img src="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png" alt="" className="event-item-image" />
          </div>
        )}

        <div className="event-item-content-wrapper">
          <div className="event-date">
            {day && month ? (
              <>
                <span className="event-day">30</span>
                <span className="event-month">Geg</span>
              </>
            ) : (
              <span className="event-month">Bus paskelbta</span>
            )}
          </div>
          <div className="event-item-content">
            <span className="event-location">{location ? location : "Event will be hosted Online"} </span>
            {title && <h3 className="event-title">{title}</h3>}
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventItem;
