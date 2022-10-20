import Head from "next/head";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { AdminLayout } from "../../../../layouts";
import { NextPageWithLayout } from "../../../../models/layout";
import { getBlogCates } from "../../../../redux/blogCateSlice";
import { getBlog, updateBlog } from "../../../../redux/blogSlice";
import { RootState } from "../../../../redux/store";
import { addUser, getUser, updateUser } from "../../../../redux/userSlice";
import { uploadImage } from "../../../../untils";

type Props = {};

type Inputs = {
    title: string;
    slug: string;
    desc: string;
    content: string;
    categoryId: string;
    thumbnail: {
        0: File;
    };
};

const EditBlog: NextPageWithLayout = (props: Props) => {
    const [preview, setPreview] = useState<string>();
    const dispatch = useDispatch<any>();
    const blogCate = useSelector((state: RootState) => state.blogCate.blogCates);

    const router = useRouter();
    const { id } = router.query;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    useEffect(() => {
        dispatch(getBlogCates());
    }, [dispatch]);
    const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
        try {
            if (typeof values.thumbnail === "object") {
                const { data } = await uploadImage(values.thumbnail[0]);
                values.thumbnail = data.url;
            }

            await dispatch(updateBlog(values)).unwrap();
            toast.success("Cập nhật  thành công");
            router.push("/admin/blogs");
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (async () => {
            try {
                const user = await dispatch(getBlog(id)).unwrap();

                reset(user);
                setPreview(user.avatar);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch, id, reset]);
    return (
        <>
            <Head>
                <title>Sửa bài viết</title>
            </Head>
            <header className="z-10 fixed top-0 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                        Users
                    </h5>
                    <span>Add User</span>
                </div>
                <Link href="/admin/users">
                    <button
                        type="button"
                        className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        DS User
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">
                                Thêm bài viết mới
                            </span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label
                                        htmlFor="form__add-user-fullname"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        {...register("title", { required: "Vui lòng không để trống" })}
                                        id="form__add-user-fullname"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.title?.message}
                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-3">
                                    <label
                                        htmlFor="form__add-user-role"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Danh mục bài biết
                                    </label>
                                    <select {...register('categoryId', { required: true })} >
                                        <option className="py-1">Categorys</option>
                                        {blogCate.map((item: any, index: any) => {
                                            return <option key={index} className="py-1" value={item._id}>{item.name}</option>
                                        })}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">

                                    </div>
                                </div>

                                <div className="col-span-6 md:col-span-3">
                                    <label
                                        htmlFor=""
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Slug
                                    </label>
                                    <input
                                        type="text"
                                        {...register("slug", {
                                            required: "Vui lòng không để trống",
                                        })}
                                        id=""
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.slug?.message}
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="form__add-user-email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Content
                                    </label>
                                    <input
                                        {...register("content", {
                                            required: "Vui lòng nhập địa chỉ email",
                                        })}
                                        type="text"
                                        id="form__add-user-email"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.content?.message}
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="form__add-user-password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nội dung bài viết
                                    </label>
                                 
                                    <textarea id=""  {...register("desc", {
                                        required: "Vui lòng không để trống",
                                    })} className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[100px]"
                                    >

                                    </textarea>
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.desc?.message}
                                    </div>
                                </div>

                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Xem trước ảnh
                                    </label>
                                    <div className="mt-1 w-40 h-40 relative">
                                        <img
                                            src={
                                                preview ||
                                                "https://drums71.ru/wp-content/uploads/2018/02/no-img.jpg"
                                            }
                                            alt="Preview Image"
                                            className="h-40 w-40 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Ảnh bài viết
                                    </label>
                                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="form__add-user-avatar"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="form__add-user-avatar"
                                                        {...register("thumbnail", {
                                                            required: "Vui lòng chọn ảnh",
                                                        })}
                                                        onChange={(e: any) => {
                                                            setPreview(
                                                                URL.createObjectURL(e.target.files[0])
                                                            );
                                                        }}
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-sm mt-0.5 text-red-500">
                                        {errors.thumbnail?.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {" "}
                                Thêm bài viết{" "}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

EditBlog.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default EditBlog;
