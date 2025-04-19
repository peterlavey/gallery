'use client'

import Image from "next/image";
import {useState} from "react";

interface ImageProps {
    src: string;
    alt: string;
}

export default function Item({ image }: { image: ImageProps }) {
    const [details, setDetails] = useState(false);
    const showDetails = () => {
        setDetails(!details);
    }

    return (
        <div>
            <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="h-auto max-w-full rounded-lg"
                onClick={showDetails}
            />
            <div className="flex fixed w-full h-full items-center justify-center right-0 top-0 bg-black/75" hidden={!details} onClick={showDetails} >
                <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="h-auto max-w-full rounded-lg"
                />
            </div>
        </div>
    )
}
