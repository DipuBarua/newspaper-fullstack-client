
const Plans = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-24">

            <div className=" border-4 border-blue-600 rounded p-5">
                <div>
                    <span className=" p-2 bg-blue-600 rounded text-xl text-white font-bold">Free For 1 Month</span>
                </div>
                <div className="flex justify-between font-semibold bg-gray-400 mt-3 p-2">
                    <p>Premium Individul</p>
                    <p><span>Free</span> For 1 Month</p>
                </div>
                <div className=" pt-2 pb-12">
                    <ul className=" list-disc ml-5">
                        <li>1 Primium account</li>
                        <li>Cancel any time</li>
                        <li>15hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                </div>
                <div className=" text-center">
                    <button className=" btn btn-primary w-full rounded-none">Try free for 1 month</button>
                    <p>Free for 1 month then 10.99$ per month after offer only available.<span className=" link text-blue-600">Terms apply</span></p>
                </div>
            </div>

            <div className=" font-semibold border-4 border-blue-600 rounded p-5">
                <div className="flex justify-between bg-gray-400 mb-9 p-2">
                    <p>Premium Duo</p>
                    <p><span>$14.99</span> Per Month</p>
                </div>
                <div className=" pt-2 pb-12">
                    <ul className=" list-disc ml-5">
                        <li>1 Primium account</li>
                        <li>Cancel any time</li>
                        <li>15hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                </div>
                <div className=" text-center">
                    <button className=" btn btn-primary w-full rounded-none">Get Premium Duo</button>
                    <p>Free for 1 month then 14.99$ per month after offer only available.<span className=" link text-blue-600">Terms apply</span></p>
                </div>
            </div>

            <div className=" font-semibold border-4 border-blue-600 rounded p-5">
                <div className="flex justify-between bg-gray-400 mb-9 p-2">
                    <p>Premium Family</p>
                    <p><span>$16.99</span> Per Month</p>
                </div>
                <div className=" pt-2 pb-12">
                    <ul className=" list-disc ml-5">
                        <li>1 Primium account</li>
                        <li>Cancel any time</li>
                        <li>15hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                </div>
                <div className=" text-center">
                    <button className=" btn btn-primary rounded-none w-full">Get Premium Family</button>
                    <p>Free for 1 month then 16.99$ per month after offer only available.<span className=" link text-blue-600">Terms apply</span></p>
                </div>
            </div>
        </div>
    );
};

export default Plans;