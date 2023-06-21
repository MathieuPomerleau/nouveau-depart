import Image from "next/image";

export type Event = {
    imageSrc: string;
    title: string;
    date: string;
    amountRaised: string;
}

export default function Events() {
    return <main>
        <section className="min-h-screen flex flex-col pt-32 px-32">
            <div className="text-3xl mb-8">
                Upcoming events
            </div>
            <EventCardList list={[{ imageSrc: "/images/forest.jpg", title: "Cross country race ", date: "Jun 17th", amountRaised: "Raised $1,000" }]} />
            <div className="text-3xl mt-16 mb-8">
                Past events
            </div>
            <EventCardList list={[{ imageSrc: "/images/forest.jpg", title: "Cross country race ", date: "Jun 17th", amountRaised: "Raised $1,000" }]} />
        </section>
    </main>;
}

function EventCardList({ list }: { list: Event[] }) {
    return <>
        {list.map((event) => (
            <div className="relative overflow-hidden rounded-lg border border-white/10 w-[24rem] h-[12rem]">
                <Image className="rounded-lg" src={event.imageSrc} alt={"alt"} width={384} height={192} />
                <div className="absolute bottom-0 w-full h-12 bg-dark-tint-two">
                    <div className="text-xl text-white/[0.85]">
                        {event.title}
                    </div>
                    <div className="text-sm font-light text-white/[0.65]">
                        {event.date}
                    </div>
                </div>

                <div className="absolute top-1 right-1 w-40 rounded-lg h-10 bg-dark-tint-two">
                    <div className="flex h-full items-center justify-center text-white/[0.85]">
                        {event.amountRaised}
                    </div>
                </div>
            </div>
        ))}
    </>
}