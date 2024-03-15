import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang )

  return (
    <div className="pt-[8%] flex justify-center">
        <form className=" w-1/3 bg-gray-600 opacity-90 grid grid-cols-12 rounded-lg">
            <input type="text" className="p-2 m-4 col-span-9" 
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="py-1 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"> {lang[langKey].search} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;