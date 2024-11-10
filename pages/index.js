import { useContext, useEffect, useState } from "react";

import { Card, Hero, PopUp } from "../Components";
import { CrowdFundingContext } from "../Context/CrowdFunding";

const index = () => {
    const {
        titleData,
        getCampaigns,
        createCampaign,
        donate,
        getUserCampaigns,
        getDonations,
    } = useContext(CrowdFundingContext);

    const [ allcampaign, setAllcampaign] = useState();
    const [ userCampaign, setUsercampaign] = useState();

    /* useEffect(() => {
        const getCampaignsData = getCampaigns();
        const userCampaignsData = getUserCampaigns();
        return async () => {
            const allData = await getCampaignsData;
            const userData = await userCampaignsData;
            setAllcampaign(allData);
            setUsercampaign(userData);
        }
    }, []);*/
    useEffect(() => {
        const fetchCampaigns = async () => {
            const allData = await getCampaigns();
            const userData = await getUserCampaigns();
            console.log("Fetched all campaigns:", allData);
            console.log("Fetched user campaigns:", userData);
            setAllcampaign(allData || []);
            setUsercampaign(userData || []);
        }
        fetchCampaigns();
    }, [])

    // Donate Popup Model
    const [openModel, setOpenModel] = useState(false);
    const [donateCampaign, setDonateCampaign] = useState();

    console.log(donateCampaign);
    return (
        <>
        
        <Hero titleData={titleData} createCampaign={createCampaign} />
        
        <Card title="All Listed Campaign"
            allcampaign={allcampaign}
            setOpenModel={setOpenModel}
            setDonate={setDonateCampaign}/>
        
        <Card title="Your Created Campaign"
            allcampaign={userCampaign}
            setOpenModel={setOpenModel}
            setDonate={setDonateCampaign}/>

        { openModel && (
            <PopUp setOpenModel={setOpenModel}
                getDonations={getDonations}
                donate={donateCampaign}
                donateFunction={donate}/>
        )}
        </>
    )
}

export default index;