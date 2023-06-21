import PrimaryButton from "@/components/ui/primary.button";
import PrimaryText from "@/components/ui/primary.text";

export default function Home() {
    return (
        <main className="mt-20">
            <section className="grid grid-cols-2 grid-rows-3">
                <div className="text-[4rem] w-[36rem] leading-tight">
                    <PrimaryText text="Mental health" /> shouldn't be taken for
                    granted.
                </div>
                <div className="flex items-center justify-center">
                    <div>Image</div>
                </div>
                <div className="mt-6 text-lg w-[36rem]">
                    <PrimaryText text="Mental health" /> Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco.
                </div>
                <PrimaryButton className="mt-8" text="Browse events" />
            </section>
        </main>
    );
}
