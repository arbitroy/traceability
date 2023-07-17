import MapboxMap from './map';
function PackageTimeline() {
    
    return (
        <div class="p-1 mt-4">
            <h1 class="text-3xl text-center font-semibold mb-6">Crop status</h1>
            <div class="container">
                <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
                    {/* dialog 1 */}
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
                            <h3 class="font-semibold text-lg mb-1">Date planted</h3>
                            <p class="leading-tight text-justify w-full">
                                21 July 2021, 04:30 PM
                            </p>
                        </div>
                    </div>
                    {/* dialog 2 */}
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
                            <h3 class="font-semibold text-lg mb-1">Date collected</h3>
                            <p class="leading-tight text-justify w-full">
                                21 July 2021, 04:30 PM
                            </p>
                        </div>
                    </div>
                    {/* dialog */}
                    <div class="flex md:contents">
                        <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-blue-500 pointer-events-none"></div>
                            </div>
                            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow text-center">
                                <i class="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div class="bg-blue-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 class="font-semibold text-lg mb-1">Today</h3>
                            <p class="leading-tight text-justify w-full">
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
  
 
  <div className="block flex-auto ">
    <div className="flex flex-col-2 flex-wrap gap-4 mt-4">
      <div className="p-4 bg-gray-200 ">
        <h3 className="text-3xl font-semibold">Product Info</h3>
        <p className="my-4"><span className="text-lg font-semibold">Product Name:</span> </p>
        <p className="my-4"><span className="text-lg font-semibold py-2 ">Country:</span> </p>
        <p className="my-4"><span className="text-lg font-semibold py-2">Group Name:</span> </p>
      </div>
      <div className="p-4 bg-gray-200">
        <h3 className="text-3xl font-semibold">Farmer Info</h3>
        <p className="my-4"><span className="text-lg font-semibold">County:</span> </p>
        <p className="my-4"><span className="text-lg font-semibold">Farmer Name:</span> </p>
        <p className="my-4"><span className="text-lg font-semibold">Location:</span> </p>
      </div>
    </div>
  </div>
  <div className="block ">
    <PackageTimeline />
  </div>
  <div className="block flex-auto place-self-stretch">
    <MapboxMap/>
    </div>

  
</div>

    )
};