import PrimaryButton from "@/components/ui/primary.button";
import PrimaryText from "@/components/ui/primary.text";
import ThemedImage from "@/components/ui/themed.image";

export default function Home() {
    return (
        <main>
            <section className="min-h-screen flex items-center px-32">
                <div>
                    <div className="text-[4rem] w-[44rem] leading-tight">
                        <PrimaryText text="Mental health" /> shouldn't be taken for
                        granted.
                    </div>
                    <div className="mt-6 text-lg w-[40rem]">
                        <PrimaryText text="Mental health" /> Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco.
                    </div>
                    <PrimaryButton className="mt-8" text="Browse events" />
                </div>
                <div className="flex flex-1 justify-end">
                    <ThemedImage
                        name="jogging"
                        alt="Jogging call to action"
                        width={700}
                        height={700}
                    />
                </div>
            </section>
        </main>
    );
}
