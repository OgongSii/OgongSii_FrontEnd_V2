import { useCallback, useState } from "react";

export function useWriteToggle(){
    const [isPost,SetIsPost] = useState<boolean>(false);

    const onPostToggle = useCallback((isPost:boolean)=>{
        SetIsPost(isPost);
    },[]);

    return { onPostToggle, isPost };
}