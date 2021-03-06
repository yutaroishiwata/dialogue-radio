import Link from 'next/link'

export default function MoreStories({ members }) {
  return (
    <section className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <Link as={`/members/${member.slug}`} href="/members/[member.slug]">
        <a>
          <div className="bg-white rounded-xl p-8 pb-9 duration-150 hover:shadow-xl">
            <img src={member.picture.url} className="w-28 h-28 mb-5 mx-auto border-4 border-primary rounded-full" alt={member.name} />
            <h3 className="mb-3 text-xl text-center leading-snug font-bold">
              {member.name}
            </h3>
            <p className="text-center text-gray3 font-bold">{member.role}</p>
          </div>
        </a>
        </Link>
      ))}
    </section>
  )
}
