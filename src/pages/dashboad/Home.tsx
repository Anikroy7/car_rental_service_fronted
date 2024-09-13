
export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card shadow-lg bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Total Userssfad</h2>
                        <p className="text-3xl font-semibold">1,234</p>
                    </div>
                </div>

                <div className="card shadow-lg bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Revenue</h2>
                        <p className="text-3xl font-semibold">$23,456</p>
                    </div>
                </div>

                <div className="card shadow-lg bg-white">
                    <div className="card-body">
                        <h2 className="card-title">New Orders</h2>
                        <p className="text-3xl font-semibold">58</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Action</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>Created a post</td>
                                <td>2024-09-12</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Doe</td>
                                <td>Updated profile</td>
                                <td>2024-09-11</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bob Smith</td>
                                <td>Deleted a comment</td>
                                <td>2024-09-10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
