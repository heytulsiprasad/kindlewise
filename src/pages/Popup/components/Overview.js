import React from 'react';

/**
 * This is a container file which sends necessary data imports to its
 * corresponding components.
 *
 * Get total number of files synced
 * Get total words highlighted
 * Get time saved based on that
 */

const Overview = () => {
  return (
    <div>
      <h2>Good Morning Tulsi 👋</h2>
      <div>
        <button>Add highlights</button>
        {/* <p>File format not supported. Try adding HTML/CSV format.</p> */}
      </div>
      <div>
        <ul>
          <li>
            <h2>12</h2>
            <h4>Files synced</h4>
          </li>
          <li>
            <h2>68</h2>
            <h4>Words highlighted</h4>
          </li>
          <li>
            <h2>45</h2>
            <h4>Time saved</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
