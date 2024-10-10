import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

	const [visible, setVisible] = useState(false);
	const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

	const logout = () => {
		navigate("/login")
		localStorage.removeItem("token")
		setToken("")
		setCartItems({})
	}


	return (
		<div className="flex items-center justify-between py-5 font-medium">
			<Link to ="/">
				<img className="w-36" src={assets.logo} alt="logo" />
			</Link>
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
				<NavLink to="/" className="flex flex-col items-center gap-1">
					<p>HOME</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />

				</NavLink>
				<NavLink to="/collection" className="flex flex-col items-center gap-1">
					<p>COLLECTION</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />

				</NavLink>
				<NavLink to="/about" className="flex flex-col items-center gap-1">
					<p>ABOUT</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />

				</NavLink>
				<NavLink to="/contact" className="flex flex-col items-center gap-1">
					<p>CONTACT</p>
					<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />

				</NavLink>
			</ul>

			<div className="flex items-center gap-6">
				<img onClick={() => setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="search" />

				<div className="group relative">
					<img onClick={() => token ? null : navigate("/login") } className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
					{/* dropdown menu */}
					{token ? <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
							<p className="cursor-pointer hover:text-black"> My Profile</p>
							<p onClick={() =>navigate("/orders")} className="cursor-pointer hover:text-black">Order</p>
							<p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
						</div>
					</div> : "" }

				</div>
				<Link to="/cart" className="relative">
					<img className="w-5 min-w-5" src={assets.cart_icon} alt="cart" />
					<p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
				</Link>

				<img onClick={() => setVisible(true)} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="" />
			</div>

			{/* Sidebar menu for small screen */}
			<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all cursor-pointer
			${visible ? "w-full" : "w-0"}
			 `}>
				<div className="flex flex-col text-gray-600">
					<div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
						<img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropdown" />
						<p>Back</p>
					</div>
					<NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
					<NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6 border">COLLECTION</NavLink>
					<NavLink onClick={() => setVisible(false)} to="/about" className="py-2 pl-6 border">ABOUT</NavLink>
					<NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 pl-6 border">CONTACT</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar