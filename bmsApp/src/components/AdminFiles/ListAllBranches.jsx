import React, { useEffect } from 'react'
import axiosInstance from '../axiosInstance';

const ListAllBranches = () => {
    const [branches, setBranches] = React.useState([]);

    useEffect(() => {
        const getAllBranches = async () => {
            try {
                const response = await axiosInstance.get("/branch/allbranchlist");
                console.log(response.data);

                if (response.status === 200) {
                    setBranches(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getAllBranches();
    }, []);
    return (
        <div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Branch List</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 text-left">Branch Name</th>
                                <th className="py-2 px-4 text-left">IFSC Code</th>
                                <th className="py-2 px-4 text-left">Created Date</th>
                                <th className="py-2 px-4 text-left">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                branches.map((branch) => {
                                    return (
                                        <tr key={branch.branchId}>
                                            <td className="py-2 px-4">{branch.branchName}</td>
                                            <td className="py-2 px-4">{branch.branchIFSC}</td>
                                            <td className="py-2 px-4">{branch.createdOn}</td>
                                            <td className="py-2 px-4">{branch.branchAddress}</td>
                                        </tr>
                                    )
                                })
                            }

                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ListAllBranches
