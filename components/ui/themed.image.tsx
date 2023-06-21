import Image from "next/image";

export type ThemedImageProps = {
    name: string;
    alt: string;
    height: number;
    width: number;
}

export default function ThemedImage({ name, alt, height, width }: ThemedImageProps) {
    return (
        <>
            <Image
                src={`/images/${name}.svg`}
                alt={alt}
                height={height}
                width={width}
                className="dark:hidden"
            />
            <Image
                src={`/images/${name}.dark.svg`}
                alt={alt}
                height={height}
                width={width}
                className="hidden dark:inline-block"
            />
        </>
    );
}