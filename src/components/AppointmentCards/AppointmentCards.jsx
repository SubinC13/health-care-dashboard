import "./styles.css";

const AppointmentCards = ({ appointments, showDoctor = true }) => (
  <div className="appointment-cards-container">
    {appointments.map((app, idx) => (
      <div
        key={idx}
        className="appointment-card"
        style={{
          backgroundColor: app.bgColor || "#dde2f9",
          color: app.textColor || "#3634a8",
        }}
      >
        <div className="appointment-card-header">
          <span className="appointment-title">{app.title}</span>
          <span className="appointment-icon">{app.icon}</span>
        </div>
        <div className="appointment-time">{app.time}</div>
        {showDoctor && app.doctor && (
          <div className="appointment-doctor">{app.doctor}</div>
        )}
      </div>
    ))}
  </div>
);

export default AppointmentCards;
