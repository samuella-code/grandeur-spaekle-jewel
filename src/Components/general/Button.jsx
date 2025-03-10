/* eslint-disable react/prop-types */

const Button = ({ title, outline = false }) => {
  const solid = "button rounded text-white hover:border-2 font-bold w-32 h-10 text-sm cursor-pointer bg-[#000] hover:bg-[#050305]";
  const outlineS = "button rounded  text-black font-bold w-32 h-10 text-sm cursor-pointer border-3 border-[#000] hover:bg-[#050305]";
  return (
    <button className={outline ? outlineS : solid}>{title}</button>
  )
}

export default Button