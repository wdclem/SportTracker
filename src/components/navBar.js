import SmallLogo from '../assets/Bslogo.png'

const NavBar = () => {

    return(
        <div className='relative'>
          <div className='flex items-center justify-between z-1 gap-4 max-w-[680px] mx-auto'>
            <div className="flex items-center space-x-2">
              <a href="/">
                <img src={SmallLogo} className="small-logo" alt="small-logo" />
              </a>
            </div>
            <div className="flex items-center gap-4 space-x-2 mr-1">
              <a className="font-semibold text-[#000033]" href="/league-selector">
                Homepage
              </a>
              <a className="font-semibold text-[#000033]" href="/about">
                About
              </a>
              <a className="font-semibold text-[#000033] " href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
    )
}

export default NavBar;