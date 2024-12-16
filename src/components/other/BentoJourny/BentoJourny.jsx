import "./BentoJourny.css";

const BentoJourny = () => {
  const milestones = [
    { label: "2019", title: "Completed 10th", icon: "🎓" },
    { label: "2021", title: "Started Collage", icon: "💼" },
    { label: "2024", title: "internship", icon: "👍" },
    { label: "Current", title: "Searching a Job", icon: "❌" },
  ];

  return (
    <div className="journey-chart">
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone">
            <div className="marker">{milestone.icon}</div>
            <div className="label">{milestone.label}</div>
            <div className="title">{milestone.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoJourny;
