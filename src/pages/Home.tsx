
// sections
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
const Home = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <Hero data={data.heroSection}/>
        </>
    );
}

export default Home



