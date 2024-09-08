import '../assets/css/Location.css'
export default function Location() {

    return (
        <section className="loc-sec">
            <div className="main-sec z-50 bg-white ca grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="pick bg-white">
                    <label htmlFor="location">Pick Up Location</label>
                    <p><i className="fa-solid fa-location-dot"></i> Mumbai, India</p>
                </div>

                <div className="pick bg-white">
                    <label htmlFor="location">Pick Up Location</label>
                    <p><i className="fa-solid fa-location-dot"></i> Surat, India</p>
                </div>

                <div className="pick bg-white">
                    <label htmlFor="location">Pick Up Date</label>
                    <p><i className="fa-solid fa-calendar-days"></i> 14-02-2024</p>
                    {/* <input type="date" name="date" id=""> */}
                </div>

                <div className="pick bg-white">
                    <label htmlFor="location">Return Date</label>
                    <p><i className="fa-solid fa-calendar-days"></i> 16-02-2024</p>
                </div>

                <div className="pick bg-white sm:col-span-2">
                    <input type="button" value="Search Car" />
                </div>
            </div>
        </section>

    )
}
