function PackageTimeline() {
    return (
        <div class="p-1 mt-4">
            <h1 class="text-4xl text-center font-semibold mb-6">Crop status</h1>
            <div class="container">
                <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

                    <div class="flex md:contents">
                        <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                <i class="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 class="font-semibold text-lg mb-1">Shelf Date</h3>
                            <p class="leading-tight text-justify w-full">
                                21 July 2021, 04:30 PM
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
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="block bg-green-500 flex ml-28 justify-center w-1/2 h-64 rounded-xl shadow border">
                <img className="h-24 mt-20" src={require("./potato.png")} crossOrigin="anonymous" alt="Crop" />
            </div>
            <div className="block p-6">
                <PackageTimeline />
            </div>
            <div className="block  p-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Product Info</h3>
                        <p><span className="font-bold">Product Name:</span> </p>
                        <p><span className="font-bold">Country:</span> </p>
                        <p><span className="font-bold">Group Name:</span> </p>
                    </div>
                    <div className="p-4 bg-gray-200">
                        <h3 className="text-xl font-semibold">Farmer Info</h3>
                        <p><span className="font-bold">County:</span> </p>
                        <p><span className="font-bold">Farmer Name:</span> </p>
                        <p><span className="font-bold">Location:</span> </p>
                    </div>
                </div>
            </div>
            <div className="block bg-turqoise-500 p-6">Map</div>
        </div>
    )
};