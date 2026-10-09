import Banner from "@/components/home/Banner";

const HomePageLayout = ({ children }) => {
    return (
        <div>
            <Banner />

            {children}
        </div>
    );
};

export default HomePageLayout;