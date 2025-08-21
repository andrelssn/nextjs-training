'use client'

// Dependences
import React from "react";
import Link from "next/link";
import { Box, CircularProgress, Divider, Pagination, Skeleton, Snackbar, styled, Tab, Tabs, Typography } from "@mui/material";

// Services
import { callApi } from "@/app/services/api";

// Style
import "./Style.css";

const CustomTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
        backgroundColor: "#1976d2",
        height: 3,
        borderRadius: 3,
    },
});

const CustomTab = styled(Tab)({
    textTransform: "none",
    fontWeight: 600,
    fontSize: "14px",
    color: "#777",
    "&.Mui-selected": {
        color: "#1976d2",
    },
});

export default function Table() {
    const [apiDataCat, setApiDataCat] = React.useState<any>(null);
    const [apiDataDog, setApiDataDog] = React.useState<any>(null);
    const [valueTab, setValueTab]     = React.useState<Number>(0);
    const [page, setPage]             = React.useState<number>(1);
    const [pageLoader, setPageLoader] = React.useState<Boolean>(true);
    const [tableLoader, setTableLoader] = React.useState<Boolean>(false);

    React.useEffect(() => {
       callApi({page, valueTab, setApiDataCat, setApiDataDog, setPageLoader});
    }, []);

    if (pageLoader) return (
        <CircularProgress/>
    );

    const handleChangePage = async (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setTableLoader(true);

        await callApi({page: value, valueTab, setApiDataCat, setApiDataDog, setPageLoader});

        setTableLoader(false);
    };

    const handleChangeTab = async (event: React.SyntheticEvent, newValue: number) => {
        setPage(1);
        setValueTab(newValue);
        setTableLoader(true);

        await callApi({page: 1, valueTab: newValue, setApiDataCat, setApiDataDog, setPageLoader});

        setTableLoader(false);
    };


    return (
        <div className="flex flex-col justify-self-center mt-6 mb-10 w-[95%]">
            <div className="flex flex-col justify-center border border-gray-300 rounded-xl mb-5 shadow-md/30 bg-neutral-100 pl-4 pr-4 pt-2">
                <Typography variant="h6" color="#1976d2" fontWeight={"bold"} className="rounded-t-lg">
                    List
                </Typography>

                <Typography color="#666666ff"fontSize={14}>
                    Here you can check out all the breeds of dogs and cats, to view more details click in the "View More" button on the list.
                </Typography>

                <Divider sx={{ m: "0px 10px", mt: 1 }}/>

                <Box sx={{ margin: "auto" }}>
                    <CustomTabs value={valueTab} onChange={handleChangeTab}>
                        <CustomTab label="Cat List" />
                        <CustomTab label="Dog List" />
                    </CustomTabs>
                </Box>
            </div>

            <section>
                <div className="relative w-[100%] min-h-160 justify-self-center border border-gray-300 rounded-xl shadow-md/30 bg-neutral-100 overflow-auto">
                    { tableLoader
                        ? <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", p: "20px 0px" }}>
                            <Skeleton animation="wave" sx={{ width: "100%", height: "100px" }}/>
                            <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", height: "200px" }}/>
                            <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", height: "100px", mt: 1 }}/>
                            <Skeleton variant="rectangular" animation="wave" sx={{ width: "100%", height: "100px", mt: 1 }}/>
                        </Box>
                        : <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl">
                            <thead className="text-xs text-gray-200 uppercase">
                                <tr className="bg-blue-500">
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Breed
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Origin
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { valueTab === 0 && apiDataCat.map((item: any) => {
                                    return (
                                        <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-200">
                                            <td className="px-6 py-4">
                                                { item.id }
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                { item.name }
                                            </th>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                { item.origin }
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link href={`/posts/${item.id}`} className="view-more-btn inline items-center px-2 py-1 whitespace-nowrap">
                                                    View More
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}

                                { valueTab === 1 && apiDataDog.map((item: any) => {
                                    return (
                                        <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-200">
                                            <td className="px-6 py-4">
                                                { item.id }
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                { item.name }
                                            </th>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                { item.origin }
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link href={`/posts/${item.id}`} className="view-more-btn inline items-center px-2 py-1 whitespace-nowrap">
                                                    View More
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>

                <Box className="mt-5 p-2 flex justify-center">
                    <Pagination
                        count={valueTab === 0 ? 6 : 17}
                        page={page}
                        color="primary"
                        onChange={handleChangePage}
                    />
                </Box>
            </section>
        </div>
    )
}