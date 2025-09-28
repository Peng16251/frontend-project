import { getJwtToken } from "./auth";

export async function uploadFile(file,imageType="") {
    const formData = new FormData();
    formData.append("files", file);
    const response = await fetch(`/api/images/upload/${imageType}`, {
        method: "POST",
        body: formData,
        headers: {
            authorization: `Bearer ${getJwtToken()}`,
        },
    });
    const result = await response.json();
    return result.url;
}
