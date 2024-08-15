
// sections
import Header from "@/sections/Header";

const Home = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
        </>
    );
}

export default Home



