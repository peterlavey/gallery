import Image from "next/image";

const images = [
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        alt: "Square Image",
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        alt: "Square Image",
    },
]

export default function Images () {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
                <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="h-auto max-w-full rounded-lg"
                />
            ))}
        </div>
    )
}