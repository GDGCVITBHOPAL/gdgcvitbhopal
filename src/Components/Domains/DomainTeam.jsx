import React from "react";
import { Users, Linkedin, Github, Mail } from "lucide-react";

function PersonCard({ person, roleLabel, domainColor }) {
  return (
    <div
      className="flex items-center gap-6 p-6 border-2 rounded-2xl bg-white"
      style={{ borderColor: domainColor }}
    >
      {/* Avatar */}
      <div className="shrink-0 w-32 h-32 rounded-2xl overflow-hidden bg-gray-100">
        {person.avatar ? (
          <img
            src={person.avatar}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-3xl font-bold"
            style={{ color: domainColor }}
          >
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h4
          className="text-lg font-bold leading-tight break-words line-clamp-2"
          title={person.name}
        >
          {person.name}
        </h4>
        <p className="text-sm font-medium" style={{ color: domainColor }}>
          {roleLabel || person.role || "Member"}
        </p>

        <div className="flex gap-3 mt-2">
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
            </a>
          )}
          {person.github && (
            <a href={person.github} target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
          )}
          {person.email && (
            <a href={`mailto:${person.email}`}>
              <Mail className="w-5 h-5 text-gray-600 hover:text-red-500" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function DomainTeam({ team, domainColor }) {
  if (!team) {
    return (
      <section className="mb-12">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
          <Users className="w-6 h-6" style={{ color: domainColor }} />
          Our Team
        </h2>
        <div className="bg-secondary rounded-2xl p-8 text-center">
          Team information coming soon!
        </div>
      </section>
    );
  }

  const { lead, coLead, members } = team;

  // There can be 2 colead hehehe
  const coLeads = coLead
    ? Array.isArray(coLead)
      ? coLead
      : [coLead]
    : [];

  return (
    <section className="mb-12">
      <h2 className="flex items-center gap-2 text-xl font-bold mb-6">
        <Users className="w-6 h-6" style={{ color: domainColor }} />
        Our Team
      </h2>

      {/* Lead */}
      {lead && (
        <>
          <h3 className="text-sm font-semibold uppercase mb-3 text-gray-500">
            Domain Lead
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PersonCard
              person={lead}
              roleLabel="Domain Lead"
              domainColor={domainColor}
            />
          </div>
        </>
      )}

      {/* Co Lead(s) */}
      {coLeads.length > 0 && (
        <>
          <h3 className="text-sm font-semibold uppercase mt-8 mb-3 text-gray-500">
            {coLeads.length > 1 ? "Co Leads" : "Co Lead"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coLeads.map((cl, i) => (
              <PersonCard
                key={i}
                person={cl}
                roleLabel="Co Lead"
                domainColor={domainColor}
              />
            ))}
          </div>
        </>
      )}

      {/* Members */}
      {members && members.length > 0 && (
        <>
          <h3 className="text-sm font-semibold uppercase mt-10 mb-4 text-gray-500">
            Team Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m, i) => (
              <PersonCard
                key={i}
                person={m}
                roleLabel={m.role || "Member"}
                domainColor={domainColor}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default DomainTeam;
