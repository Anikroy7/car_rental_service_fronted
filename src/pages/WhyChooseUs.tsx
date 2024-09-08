import '../assets/css/WCU.css'
export default function WhyChooseUs() {
    return (
        <section className="container">
            <div className="center-div">
                <h2>Why Choose Us?</h2>
                <p>At EasyRide Rentals, we provide an unparalleled car rental experience. With a diverse fleet of vehicles, competitive rates, and exceptional customer service, we ensure your journey is smooth and enjoyable. Whether you're traveling for business or pleasure, we've got the perfect vehicle for you.</p>
            </div>

            <div className="choices">
                <div className="left-top">
                    <div className="left-top-circle">
                        <img src="https://i.ibb.co/VJmZKFj/high-quality.png" alt="High Quality Cars" />
                    </div>
                    <div className="left-top-text">
                        <h3>High-Quality Vehicles</h3>
                        <p>Our fleet includes the latest models, meticulously maintained for a safe and comfortable ride.</p>
                    </div>
                </div>

                <div className="right-top">
                    <div className="right-top-circle">
                        <img src="https://i.ibb.co/qgKNr59/backup.png" alt="Flexible Options" />
                    </div>
                    <div className="right-top-text">
                        <h3>Flexible Rental Options</h3>
                        <p>Choose from a variety of rental plans, whether you need a car for a day, a week, or longer.</p>
                    </div>
                </div>

                <div className="right-bottom">
                    <div className="right-bottom-circle">
                        <img src="https://i.ibb.co/Kbd0xbp/smart.png" alt="Smart Technology" />
                    </div>
                    <div className="right-bottom-text">
                        <h3>Smart Booking Technology</h3>
                        <p>Our user-friendly platform allows you to book and manage your rental seamlessly from anywhere.</p>
                    </div>
                </div>

                <div className="left-bottom">
                    <div className="left-bottom-circle">
                        <img src="https://i.ibb.co/G53sbGK/customer.png" alt="Customer Support" />
                    </div>
                    <div className="left-bottom-text">
                        <h3>24/7 Customer Support</h3>
                        <p>Our dedicated support team is available around the clock to assist you with any questions or concerns.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
