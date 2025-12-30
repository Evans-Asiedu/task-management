import Header from "src/components/layout/Header";
import MentorCardDetailed from "src/components/cards/MentorCardDetailed";
import { mentors } from "src/data";
import MentorsListSlider from "src/components/MentorsListSlider";
import { useSearch } from "src/context/SearchContext";
import { useMemo } from "react";

const Mentors = () => {
  const { searchQuery } = useSearch();

  const filteredMentors = useMemo(() => {
    if (!searchQuery.trim()) {
      return mentors;
    }

    const query = searchQuery.toLowerCase().trim();
    return mentors.filter((mentor) => {
      const nameMatch = mentor.name?.toLowerCase().includes(query);
      const roleMatch = mentor.role?.toLowerCase().includes(query);
      const bioMatch = mentor.bio?.toLowerCase().includes(query);
      return nameMatch || roleMatch || bioMatch;
    });
  }, [searchQuery]);

  // Get the first 6 filtered mentors for the grid
  const featuredMentors = filteredMentors.slice(0, 6);

  return (
    <>
      <Header showActions={true} title="Mentors" />
      <main className="h-full flex bg-n-2">
        <div className="p-6 lg:p-8 w-full space-y-6">
          <MentorsListSlider title="Recent Mentors" mentors={filteredMentors} />

          <div>
            <h2 className="text-lg font-semibold mb-3">Mentors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredMentors.map((mentor) => (
                <MentorCardDetailed key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mentors;
