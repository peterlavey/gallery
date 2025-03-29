import Image from "next/image";

const socialMedia = [
    {
        image: "/icons/facebook.svg",
        alt: "Facebook"
    },
    {
        image: "/icons/instagram.svg",
        alt: "Instagram"
    },
    {
        image: "/icons/x.svg",
        alt: "X"
    }
]

export default function Footer() {
    return (
        <footer className="flex items-center justify-between p-6 lg:px-8 bg-gray-900">
            <section>
                <p className="text-gray-400">© 2024 Your Company, Inc. All rights reserved.</p>
            </section>
            <section className="flex text-gray-400">
                {socialMedia.map((item) => (
                    <Image src={item.image} alt={item.alt} width={30} height={30} key={item.alt} className="ml-3" />
                ))}
            </section>
        </footer>
    )
};