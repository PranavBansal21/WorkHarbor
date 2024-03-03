export default function InfoImage() {
    return (
        <>
            <div
                className="w-1/2 relative"
            >
                <img src="/Images/back.jpg" className="object-cover w-full h-64 rounded-[50px]" />
                <div className="absolute top-36 left-16">
                    <img src="/Images/profilePic2.jpg" className="object-cover rounded-full w-44 h-44" />
                </div>
            </div>
        </>
    )
}