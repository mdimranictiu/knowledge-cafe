import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-auto w-4/5  p-4  border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile" />
        </div>
    );
};

export default Header;