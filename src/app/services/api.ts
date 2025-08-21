import { getDataCat, getDataDog } from "./services";

type CallApi = {
    page: number;
    valueTab: Number;
    setApiDataCat: React.Dispatch<React.SetStateAction<any>>;
    setApiDataDog: React.Dispatch<React.SetStateAction<any>>;
    setPageLoader: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const callApi = async (props: CallApi) => {
    const {
        page,
        valueTab,
        setApiDataCat,
        setApiDataDog,
        setPageLoader
    } = props;

    if (valueTab === 0) {
        await getDataCat(page).then(response => {
            if(response.status === 200) {
                setApiDataCat(response.data);
                setPageLoader(false);
            } else {
            }
            console.log(response);
        });
    }

    if (valueTab === 1) {
        await getDataDog(page).then(response => {
            if(response.status === 200) {
                setApiDataDog(response.data);
                setPageLoader(false);
            } else {

            }
            console.log(response);
        });
    }
};