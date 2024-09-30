
import { Link } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

const NotFoundPage = () => {
  return (
    <MainLayout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-indigo-900 text-white">
      <img 
        src="https://tse2.mm.bing.net/th?id=OIP.3vwSl2HNBnDvKieP-hxTBQHaFl&pid=Api&P=0&h=220" 
        alt="Page Not Found" 
        className="w-80 h-64 object-cover mb-8 shadow-lg rounded-lg"
      />
      <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <p className="text-2xl mb-8 font-semibold drop-shadow-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 duration-300 shadow-lg"
      >
        Go to Homepage
      </Link>
    </div>
    </MainLayout>
  );
};

export default NotFoundPage;
