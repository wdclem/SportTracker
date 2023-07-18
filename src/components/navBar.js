import SmallLogo from '../assets/Homepagelogo.png'

const NavBar = () => {

    return(
    <div className='relative'>
        <div className='flex justify-center items-center z-1 gap-5'>
            <a href="/">
             <img src={SmallLogo} className="small-logo" alt="small-logo" />
            </a>
            <a className="mr-10 text-[#593228]" href="/about">
             About
            </a>
            <a className="mr-10 text-[#593228]" href="/about">
             Contact
            </a>
        </div>
    </div>
   )
}

export default NavBar;