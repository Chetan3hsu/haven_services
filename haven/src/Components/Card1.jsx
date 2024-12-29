import React from 'react' ;

const Card1 = () => {
                return (
                        <div className="flex flex-wrap -mx-4 text-white">
    {[
        {
            title: "For Services",
            text: "Win more servicing deals by offering your clients best-in-class recapture functionality.",
            imgSrc: "https://havenservicing.com/static/5316b58d87c030a171a640fc6a1e0115/14908/servicer.webp",
            linkText: "Services",
        },
        {
            title: "For Subservices",
            text: "Improve yields on your MSR with technology that enables your recapture and cross-sell strategy.",
            imgSrc: "https://havenservicing.com/static/ff39766aae5f14d201d9bf27d2363fac/98613/subservicer.webp",
            linkText: "Subservices",
        },
        {
            title: "For Lenders",
            text: "Ensure your LOs focus to recapture the highest-intent leads from your portfolio.",
            imgSrc: "https://havenservicing.com/static/bc1fdbf5bf0368adcd8c484e9847e537/2d1d2/lender.webp",
            linkText: "Lenders",
        }
    ].map((card, index) => (
        <div key={index} className="w-80 h-30rem xl:w-1/3 p-4 rounded-t-3xl">
            <div className="bg-emerald-900 border border-gray-200 rounded shadow p-6 w-full h-full flex flex-col justify-between group">
                <p className="text-2xl font-bold text-center">{card.title}</p>
                {card.text && (
                    <p className="hidden group-hover:block mt-4 text-center trantion duration-1000">
                        {card.text}
                    </p>
                )}
                <img className="w-full h-48 mt-auto" src={card.imgSrc} alt="" />
                <a href="https://www.google.com" className="mt-4 block text-center px-2 py-2 rounded hover:bg-blue-500 transition-all duration-1000 group-hover:bg-blue-500 group-hover:text-white transform">
                    {card.linkText}
                </a>
                
            </div>
        </div>
    ))}
</div>
                        


                    




                ) ;
}
export default Card1 ;
