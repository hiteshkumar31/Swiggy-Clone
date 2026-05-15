

function DineoutCard({dineoutData}){
    return(
<div className="max-w-sm flex-none">
  <div className="relative">
    <a href={dineoutData.cta.link}><img
      className="w-80 h-52 object-cover rounded-lg"
      src={
        dineoutData?.info?.mediaFiles?.[0]?.url
          ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
            dineoutData.info.mediaFiles[0].url
          : "https://via.placeholder.com/320x200"
      }
      alt={dineoutData?.info?.name || "Restaurant Image"}
    /> </a>

    {/* Gradient overlay */}
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>

    {/* Restaurant Name */}
    <p className="absolute bottom-2 left-2 text-white font-bold text-lg z-10">
      {dineoutData?.info?.name}
    </p>

    {/* Rating */}
    <p className="absolute bottom-2 right-2 text-white font-bold text-lg z-10">
      ⭐ {dineoutData?.info?.rating?.value}
    </p>
  </div>
</div>

    )
}
export default DineoutCard;