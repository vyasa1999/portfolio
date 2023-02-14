import Image from 'next/image'
export default function RoundImage(props: { path: string, alt: string }) {
    return (
        <>
        <style jsx>{`
            .imgContainer {
                width: 10vh;
                height: 10vh;
            }
        `}</style>
            <div className='imgContainer'>
                <Image
                    src={props.path}
                    alt={props.alt}
                    sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                        33vw"
                    width={100}
                    height={100}
                    style={{ borderRadius: '50%', maxWidth: '100%', maxHeight: '100%' }}
                />
            </div>
        </>
    )
}