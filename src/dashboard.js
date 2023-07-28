
function PackageTimeline() {

    return (
        <div className="p-1 mt-4">
            <h1 className="text-3xl text-center font-semibold mb-6">Crop status</h1>
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                    {/* dialog 2 */}
                    <div className="flex md:contents">
                        <div className="col-start-2 mt-9 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-0 -mt-3 rounded-full bg-green-500 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-green-500 col-start-4 col-end-12 p-3 rounded-xl my-1 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Date collected</h3>
                            <p className="leading-tight text-justify w-full">
                                21 July 2021, 04:30 PM
                            </p>
                        </div>
                    </div>
                    {/* dialog */}
                    <div className="flex md:contents">
                        <div className="col-start-2 mb-8 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex botto-0 items-center justify-center">
                                <div className="h-14 bottom-2 w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute bottom-0 -mt-3 rounded-full bg-green-500 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-green-500 col-start-4 col-end-12 p-3 rounded-xl mt-2 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg ">Today</h3>
                            <p className="leading-tight text-justify w-full">
                                {Date()}
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default function Dashboard() {

    return (
        <div className="flex flex-wrap gap-4">
            <div className="block p-4 bg-gray-200 ">
                <h3 className="text-4xl font-semibold">Group Name</h3>
                <p className="my-4"><span className="text-lg font-semibold">Potatoes Growers</span> </p>
            </div>
            <div className="block p-4 bg-gray-200 ">
                <h3 className="text-4xl font-semibold">Product Name</h3>
                <p className="my-4"><span className="text-lg font-semibold">Potatoes</span> </p>
            </div>
            <div className=" block p-4 bg-gray-200">
                <h3 className="text-4xl font-semibold">Country</h3>
                <p className="my-4"><span className="text-lg font-semibold">Kenya</span> </p>
                <p className="my-4"><span className="text-lg font-semibold">Nyeri</span> </p>
            </div>
            <div className="block p-4 bg-gray-200">
                <h3 className="text-4xl font-semibold">GPS</h3>
                <p className="my-4">Latitude : <span className="text-lg font-semibold">8239</span> </p>
                <p className="my-4">Longitude : <span className="text-lg font-semibold">-1</span> </p>
            </div>
            <div className="block">
                <PackageTimeline />
            </div>
        </div>

    )
};