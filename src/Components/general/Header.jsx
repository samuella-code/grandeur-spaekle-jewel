import Button from "./Button"

const Header = () => {
    return (
        <div className="w-full h-auto flex items-center justify-between px-22 py-3">
            <div className="flex-1">
                <a href="#" className="">
                    <img
                        alt=""
                        src="https://tailwindui.starxg.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                    />
                </a>
            </div>

            <div className="flex-2">
                    <input type="text" className="w-full h-full border-2 text-sm rounded border-gray-600 px-4 py-2" placeholder="Search..." />
            </div>

            <div className="flex items-center space-x-3">
                <div className="heart"></div>
                <div className="wish"></div>
                <div className="flex items-center space-x-2">
                    <Button title='Login' outline={true}/>
                    <Button title='Register'/>
                </div>

            </div>
        </div>
    )
}

export default Header