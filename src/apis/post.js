import { getJwtToken, getUser } from "./auth";
import { request } from "../utils/request";
export async function createPost(image, description) {
    const formData = new FormData(); // strapi 接收 formdata 格式來處理 image
    formData.append("files.image", image); // strapi => keys 為 files.image value 為 image
    formData.append("data", JSON.stringify({ description })); // strapi => 其他的存為 data

    await fetch("/api/posts", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${getJwtToken()}`,
        },
    });
}


export async function loadPosts() {
    const response = await request("/api/posts?populate=*");
    // TODO
    return response.data.map((post) => ({
        id: post?.id,
        ...post?.attributes,
        image: post?.attributes?.image?.data?.[0]?.attributes?.url,
        user: {
            id: post?.attributes?.user?.data?.id,
            ...post?.attributes?.user?.data?.attributes,
        },
    }));
}
