const Upcoming = ({ upcoming }) => {
  const data = upcoming.data;

  return (
    <div>
      <div>
        <h3>Upcoming</h3>
        <a href="/search">View All</a>
      </div>
      {data && data.map((anime, index) => <div key={index}>{anime.title}</div>)}
    </div>
  );
};

export default Upcoming;
