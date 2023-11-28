import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useArticles from "../../../hooks/useArticles";
import { useState } from "react";
import ArticleTabs from "../ArticleTabs/ArticleTabs";
import { Helmet } from "react-helmet-async";

const Articles = () => {
    const [articles] = useArticles();
    const [tabIndex, setTabIndex] = useState(0);

    const business = articles.filter(article => article.tag === "business");
    const education = articles.filter(article => article.tag === "education");
    const food = articles.filter(article => article.tag === "food");
    const lifestyle = articles.filter(article => article.tag === "lifestyle");
    const politics = articles.filter(article => article.tag === "politics");
    const sports = articles.filter(article => article.tag === "sports");
    const technology = articles.filter(article => article.tag === "technology");
    const publisher = articles.filter(article => article.tag === "publisher");

    return (
        <div className=" pt-24">
            <Helmet>
                <title>
                    Newspaper | articleDetails
                </title>
            </Helmet>

            {/*react tabs - Controlled mode  */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Business</Tab>
                    <Tab>Education</Tab>
                    <Tab>Food</Tab>
                    <Tab>Lifestyle</Tab>
                    <Tab>Politics</Tab>
                    <Tab>Sports</Tab>
                    <Tab>Technology</Tab>
                    <Tab>All Publisher</Tab>
                </TabList>

                <TabPanel>
                    <ArticleTabs items={business}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={education}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={food}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={lifestyle}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={politics}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={sports}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={technology}>
                    </ArticleTabs>
                </TabPanel>

                <TabPanel>
                    <ArticleTabs items={publisher}>
                    </ArticleTabs>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Articles;