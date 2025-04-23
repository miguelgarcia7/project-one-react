import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Shortlist} from "./components/Shortlist";
import {PuppiesList} from "./components/PuppiesList";
import {PuppiesForm} from "./components/PuppiesForm";
import {puppies as puppiesData} from "./data/puppies";
import {useState} from "react";
import {Puppy} from "./types";

export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </PageWrapper>
    )
}

function Main() {
    const [liked, setLiked] = useState<Puppy['id'][]>([1, 3]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);
    return(
        <main>
            {/* Search & Shortlist */}
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                {/* Search */}
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                {/* Shortlist */}
                <Shortlist liked={liked} setLiked={setLiked} puppies={puppies} />
            </div>
            {/* Puppies list */}
            <PuppiesList searchQuery={searchQuery} puppies={puppies} liked={liked} setLiked={setLiked} />
            {/* New Puppy form */}
            <PuppiesForm puppies={puppies} setPuppies={setPuppies} />
        </main>
    )
}