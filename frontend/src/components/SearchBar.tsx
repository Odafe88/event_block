

const SearchBar = () => {


    return (
        <div className="relative my-4 flex flex-row justify-center items-center gap-4">
            <input
                type="search"
                className="relative m-0 block w-3/4 rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                placeholder="Search"
                aria-label="Search" />
            <select
                className="bg-[#31363F] text-[#EEEEEE] text-sm rounded-lg focus:border-none block w-1/4 p-2.5"
            >
                <option className="text-[#EEEEEE] text-sm">Choose a state</option>
                <option className="text-[#EEEEEE] text-sm" selected value="Abia">Abia</option>
                <option className="text-[#EEEEEE] text-sm" value="Adamawa">Adamawa</option>
                <option className="text-[#EEEEEE] text-sm" value="Akwa Ibom">Akwa Ibom</option>
                <option className="text-[#EEEEEE] text-sm" value="Anambra">Anambra</option>
                <option className="text-[#EEEEEE] text-sm" value="Bauchi">Bauchi</option>
                <option className="text-[#EEEEEE] text-sm" value="Bayelsa">Bayelsa</option>
                <option className="text-[#EEEEEE] text-sm" value="Benue">Benue</option>
                <option className="text-[#EEEEEE] text-sm"  value="Borno">Borno</option>
                <option className="text-[#EEEEEE] text-sm"  value="Cross River">Cross River</option>
                <option className="text-[#EEEEEE] text-sm"  value="Delta">Delta</option>
                <option className="text-[#EEEEEE] text-sm"  value="Eboyin">Eboyin</option>
                <option className="text-[#EEEEEE] text-sm"  value="Edo">Edo</option>
                <option className="text-[#EEEEEE] text-sm"  value="Ekiti">Ekiti</option>
                <option className="text-[#EEEEEE] text-sm"  value="Enugu">Enugu</option>
                <option className="text-[#EEEEEE] text-sm"  value="FCT-Abuja">FCT-Abuja</option>
                <option className="text-[#EEEEEE] text-sm"  value="Gombe">Gombe</option>
                <option className="text-[#EEEEEE] text-sm"  value="Imo">Imo</option>
                <option className="text-[#EEEEEE] text-sm"  value="Jigiwa">Jigiwa</option>
                <option className="text-[#EEEEEE] text-sm"  value="Kaduna">Kaduna</option>
                <option className="text-[#EEEEEE] text-sm"  value="Kano">Kano</option>
                <option className="text-[#EEEEEE] text-sm"  value="Katsina">Katsina</option>
                <option className="text-[#EEEEEE] text-sm"  value="Kebbi">Kebbi</option>
                <option className="text-[#EEEEEE] text-sm" value="Kogi">Kogi</option>
                <option className="text-[#EEEEEE] text-sm"  value="Kwara">Kwara</option>
                <option className="text-[#EEEEEE] text-sm"  value="Lagos">Lagos</option>
                <option className="text-[#EEEEEE] text-sm"  value="Nasarawa">Nasarawa</option>
                <option className="text-[#EEEEEE] text-sm"  value="Niger">Niger</option>
                <option className="text-[#EEEEEE] text-sm"  value="Ogun">Ogun</option>
                <option className="text-[#EEEEEE] text-sm"  value="Ondo">Ondo</option>
                <option className="text-[#EEEEEE] text-sm"  value="Osun">Osun</option>
                <option className="text-[#EEEEEE] text-sm"  value="Oyo">Oyo</option>
                <option className="text-[#EEEEEE] text-sm"  value="Plateau">Plateau</option>
                <option className="text-[#EEEEEE] text-sm"  value="Rivers">Rivers</option>
                <option className="text-[#EEEEEE] text-sm"  value="Sokoto">Sokoto</option>
                <option className="text-[#EEEEEE] text-sm"  value="Taraba">Taraba</option>
                <option className="text-[#EEEEEE] text-sm"  value="Yobe">Yobe</option>
                <option className="text-[#EEEEEE] text-sm"  value="Zamfara">Zamfara</option>
            </select>
        </div>
  )
}

export default SearchBar