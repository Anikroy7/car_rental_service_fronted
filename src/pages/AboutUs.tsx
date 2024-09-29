import MainLayout from "../components/layouts/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
        <div className="max-w-7xl mx-auto p-6 space-y-12">
      
      {/* Company History */}
      <section id="company-history" className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Company History</h2>
        <p className="text-lg text-gray-700">
          Our company was founded in [Founding Year] with a mission to provide top-notch car rental services to our valued customers. 
          Our vision is to become the leading car rental service known for customer satisfaction, innovation, and reliability.
        </p>
      </section>

      {/* Our Team */}
      <section id="our-team" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <img src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1290/files/2018/03/troystreckenbach.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img src="https://up.yimg.com/ib/th?id=OIP.c3xZFEubLwRrbMU1w2W1uwHaHa&pid=Api&rs=1&c=1&qlt=95&w=103&h=103" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">COO</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img src="https://tse4.mm.bing.net/th?id=OIP.2ee18sbrNMOWWFIBiuy2cwHaH0&pid=Api&P=0&h=220" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section id="our-fleet" className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Our Fleet</h2>
        <p className="text-lg text-gray-700 mb-4">
          We offer a wide range of vehicles to meet your needs, from economy cars for budget-conscious travelers to luxury vehicles 
          for those seeking comfort and style. We also have a range of SUVs perfect for family trips or off-road adventures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Economy Cars</h3>
            <p className="text-gray-600">Affordable and fuel-efficient.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Luxury Cars</h3>
            <p className="text-gray-600">Travel in style and comfort.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">SUVs</h3>
            <p className="text-gray-600">Perfect for family trips and off-road.</p>
          </div>
        </div>
      </section>

      {/* Values & Commitment */}
      <section id="values" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
        <p className="text-lg text-gray-700">
          At our core, we are committed to providing exceptional customer service. We believe in sustainability and strive to 
          minimize our environmental impact. We also prioritize transparency and fairness in all of our transactions.
        </p>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-4">Have any questions? Feel free to reach out to us:</p>
        <ul className="text-lg text-gray-700">
          <li><strong>Phone:</strong> 01786-335131</li>
          <li><strong>Email:</strong> anikkumerroy7@gmail.com</li>
          <li><strong>Address:</strong> Mirpur-2, Dhaka</li>
        </ul>
      </section>

    </div>
    </MainLayout>
  );
};

export default AboutUs;
