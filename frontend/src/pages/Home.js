import { useEffect, useState } from 'react';


//components
import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        
        if (json) {
          setWorkouts(json); // Only set workouts if json is valid
        }
      } catch (err) {
        setError(err.message); // Set error message in state
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="Home">
      <div className="workouts">
        {error && <p>Error: {error}</p>} {/* Display error if present */}
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
