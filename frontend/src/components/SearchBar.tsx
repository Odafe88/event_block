

const SearchBar = () => {


    return (
        <div className="relative my-4 flex flex-row justify-center items-center gap-4">
            <input
                type="search"
                className="relative m-0 block w-3/4 rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-gray-800 font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                placeholder="Search"
                aria-label="Search" />
            <select
                className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-pink-200 focus:border-pink-200 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option className="text-gray-900 text-sm">Choose a state</option>
                <option className="text-gray-900 text-sm" selected value="Abia">Abia</option>
                <option className="text-gray-900 text-sm" value="Adamawa">Adamawa</option>
                <option className="text-gray-900 text-sm" value="Akwa Ibom">Akwa Ibom</option>
                <option className="text-gray-900 text-sm" value="Anambra">Anambra</option>
                <option className="text-gray-900 text-sm" value="Bauchi">Bauchi</option>
                <option className="text-gray-900 text-sm" value="Bayelsa">Bayelsa</option>
                <option className="text-gray-900 text-sm" value="Benue">Benue</option>
                <option className="text-gray-900 text-sm"  value="Borno">Borno</option>
                <option className="text-gray-900 text-sm"  value="Cross River">Cross River</option>
                <option className="text-gray-900 text-sm"  value="Delta">Delta</option>
                <option className="text-gray-900 text-sm"  value="Eboyin">Eboyin</option>
                <option className="text-gray-900 text-sm"  value="Edo">Edo</option>
                <option className="text-gray-900 text-sm"  value="Ekiti">Ekiti</option>
                <option className="text-gray-900 text-sm"  value="Enugu">Enugu</option>
                <option className="text-gray-900 text-sm"  value="FCT-Abuja">FCT-Abuja</option>
                <option className="text-gray-900 text-sm"  value="Gombe">Gombe</option>
                <option className="text-gray-900 text-sm"  value="Imo">Imo</option>
                <option className="text-gray-900 text-sm"  value="Jigiwa">Jigiwa</option>
                <option className="text-gray-900 text-sm"  value="Kaduna">Kaduna</option>
                <option className="text-gray-900 text-sm"  value="Kano">Kano</option>
                <option className="text-gray-900 text-sm"  value="Katsina">Katsina</option>
                <option className="text-gray-900 text-sm"  value="Kebbi">Kebbi</option>
                <option className="text-gray-900 text-sm" value="Kogi">Kogi</option>
                <option className="text-gray-900 text-sm"  value="Kwara">Kwara</option>
                <option className="text-gray-900 text-sm"  value="Lagos">Lagos</option>
                <option className="text-gray-900 text-sm"  value="Nasarawa">Nasarawa</option>
                <option className="text-gray-900 text-sm"  value="Niger">Niger</option>
                <option className="text-gray-900 text-sm"  value="Ogun">Ogun</option>
                <option className="text-gray-900 text-sm"  value="Ondo">Ondo</option>
                <option className="text-gray-900 text-sm"  value="Osun">Osun</option>
                <option className="text-gray-900 text-sm"  value="Oyo">Oyo</option>
                <option className="text-gray-900 text-sm"  value="Plateau">Plateau</option>
                <option className="text-gray-900 text-sm"  value="Rivers">Rivers</option>
                <option className="text-gray-900 text-sm"  value="Sokoto">Sokoto</option>
                <option className="text-gray-900 text-sm"  value="Taraba">Taraba</option>
                <option className="text-gray-900 text-sm"  value="Yobe">Yobe</option>
                <option className="text-gray-900 text-sm"  value="Zamfara">Zamfara</option>
            </select>
        </div>
  )
}

export default SearchBar