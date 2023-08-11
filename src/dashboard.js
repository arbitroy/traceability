function PackageTimeline({data}) {
   // Function to format the date in "dd/mm/yyyy" format
  function formatDate(date) {
    const currentDate = new Date(date);
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const currentDate = new Date();

    return (
        data && (<div className="p-1 mt-4">
            <h1 className="text-3xl text-center font-semibold mb-6">Crop status</h1>
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                    {/* dialog 2 */}
                    <div className="flex md:contents">
                        <div className="col-start-2 mt-9 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-600 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-0 -mt-3 rounded-full bg-green-600 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-green-600 col-start-4 col-end-12 p-3 rounded-xl my-1 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Date collected</h3>
                            <p className="leading-tight text-justify w-full">
                                {data.Dateofcollection}
                            </p>
                        </div>
                    </div>
                    {/* dialog */}
                    <div className="flex md:contents">
                        <div className="col-start-2 mb-8 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex botto-0 items-center justify-center">
                                <div className="h-14 bottom-2 w-1 bg-green-600 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute bottom-0 -mt-3 rounded-full bg-green-600 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-green-600 col-start-4 col-end-12 p-3 rounded-xl mt-2 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg ">Today</h3>
                            <p className="leading-tight text-justify w-full">
                            {formatDate(currentDate)}
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    ));
}

export default function Dashboard({data}) {

    return (
        data && (<div className="flex flex-wrap gap-64">
            <div className="block p-4 bg-gray-200 ">
                <h3 className="text-4xl font-semibold">Group Name</h3>
                <p className="my-6"><span className="text-lg font-semibold"> {data.GroupName}</span> </p>
                <h3 className="text-4xl font-semibold mt-20">Product Name</h3>
                <p className="my-6"><span className="text-lg font-semibold">{data.Account}</span> </p>
            </div>  
            <div className=" block p-4 bg-gray-200">
                <h3 className="text-4xl font-semibold">Country</h3>
                <p className="my-6"><span className="text-lg font-semibold">{data.Country}</span> </p>
                <p className="my-6"><span className="text-lg font-semibold">{data.AdminLevel2}</span> </p>
                <h3 className="text-4xl font-semibold">GPS</h3>
                <p className="my-6">Latitude : <span className="text-lg font-semibold">{data.Latitude}</span> </p>
                <p className="my-6">Longitude : <span className="text-lg font-semibold">{data.Longitude}</span> </p>
            </div>
            <div className="grow block">
                <PackageTimeline data = {data} />
            </div>
        </div>
        )

    )
};