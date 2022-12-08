import {useState} from "react";

export const useDisplayImage = () => {
    const [result, setResult] = useState<string>("");

    function uploader(e: any) {
        const imageFile = e.target.files[0];

        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            const result = e?.target?.result;
            if (result) {
                setResult(result as string);
            }
        });

        reader.readAsDataURL(imageFile);
    }

    return {result, uploader};
}