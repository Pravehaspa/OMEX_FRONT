import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Loader from "./Loader";

const CONTRIBUTORS_API = "https://api.github.com/repos/Roshansuthar1105/Omex/contributors";

const ContributorsLeaderboard = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CONTRIBUTORS_API)
      .then((res) => res.json())
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader fullscreen size="xl" color="purple" text="Loading leaderboard..." />;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-600">Top Contributors</h1>
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {contributors.map((contributor, idx) => (
          <li key={contributor.id || contributor.login} className="flex items-center py-4">
            <span className="font-bold text-lg w-8 text-right mr-4">{idx + 1}</span>
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400"
            />
            <a
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline flex items-center"
            >
              <FaGithub className="mr-2" />
              {contributor.login}
            </a>
            <span className="ml-auto text-gray-500 dark:text-gray-400">{contributor.contributions} contributions</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributorsLeaderboard;