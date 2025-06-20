import MemberCard from "@/components/Team/MemberCard";
import { GetTeam } from "../actions";

export default async function TeamPage() {
  const members = await GetTeam();

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-logoColor flex items-center justify-center">
            Meet Our Team
          </h2>
          <p className="font-light text-textColor3 sm:text-xl">
            Get to know the dedicated members who make our club thrive. Each
            member brings unique skills and passion to our community.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
