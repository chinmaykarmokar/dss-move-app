import { ListItem, UnorderedList } from "@chakra-ui/react";

const UnorderedListItems = (props) => {
    return (
        <>
            <UnorderedList>
                <ListItem>{props.list1}</ListItem>
                <ListItem>{props.list2}</ListItem>
                <ListItem>{props.list3}</ListItem>
                <ListItem>{props.list4}</ListItem>
            </UnorderedList>
        </>
    )
}

export default UnorderedListItems;