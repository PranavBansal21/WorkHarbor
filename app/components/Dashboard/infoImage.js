export default function InfoImage() {
    return (
        <>
            <div
                className="relative"
            >
                <img src="/Images/back.jpg" className="object-cover w-full h-64 rounded-[50px]" />
                <div className="absolute top-36 left-16">
                    <img src="/Images/profilePic2.jpg" className="object-cover rounded-full w-40 h-40" />
                </div>
            </div>
        </>
    )
}