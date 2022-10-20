import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteBlog, getBlog, getBlogs } from "../../../redux/blogSlice";
import { RootState } from "../../../redux/store";
// import { deleteUser, getUsers } from "../../../redux/userSlice";
import { formatDate } from "../../../untils";

type Props = {};

const BlogList = (props: Props) => {
    const blogs = useSelector((state: RootState) => state.blog.blogs);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const handleRemove = (id: any) => {
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa không?",
            text: "Không thể hoàn tác sau khi xóa",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(deleteBlog(id)).unwrap();
                Swal.fire("Thành công!", "Xóa thành công.", "success");
            }
        });
    };

    return (
        <table
            className="min-w-full divide-y divide-gray-200"
            id="cate__list-table"
        >
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {" "}
                        STT{" "}
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {" "}
                        Title{" "}
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {" "}
                        Content{" "}
                    </th>
                    
                    {/* <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {" "}
                        Category{" "}
                    </th> */}
                    <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {" "}
                        Actions{" "}
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {blogs?.map((item, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {++index}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <div className="w-10 h-10 relative rounded-full object-cover">
                                        
                                        {item.title}
                                    </div>
                                </div>
                                {/* <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        {item.slug}
                                    </div>
                                   
                                </div> */}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <div className="w-10 h-10 relative rounded-full object-cover">   
                                        {item.content}
                                    </div>
                                </div>                            
                            </div>
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <div className="w-10 h-10 relative rounded-full object-cover">   
                                        {item.categoryId}
                                    </div>
                                </div>                            
                            </div>
                        </td> */}
                        
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link href={`/admin/blogs/${item._id}/edit`}>
                                <span className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Edit
                                </span>
                            </Link>
                            {/* <Link href={`/admin/blogs/${item._id}/info`}>
                                <span className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Xem chi tết
                                </span>
                            </Link> */}
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BlogList;
