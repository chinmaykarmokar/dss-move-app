import React from "react";
import SearchItemsPage from "./components/pages/SearchPage";
import { SimpleGrid } from "@chakra-ui/react";

const Search = () => {
    return (
        <>  
            <SimpleGrid columns={[1, null, 2]} alignItems="center">
                <SearchItemsPage />
            </SimpleGrid>
        </>
    )
}

export default Search;