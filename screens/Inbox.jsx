import { Avatar, Box, ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native";

const Inbox = ({ navigation }) => {

    const [mails, setMails] = useState([
        { id: "1", subject: "Hello Guys...", content: "Lorem ipsum dolor sit amet, urus feugiat, molestie ipsum id, lacinia nunc" },
        { id: "2", subject: "Good Morning", content: "Lorem ipsum dipsum id, lacinia nunc" },
        { id: "3", subject: "General Meeting", content: "Lorem ipsum dolor sit amet, ur l;k afdfk adflkjd f kf jlkja df aldkfjf ipsum id, lacinia nunc" },
    ])

    const handleTap = (item) => {
        console.log('Tapped')
        console.log(item)
        navigation.push('DetailsScreen', { item })
    }

    return (
        <>
            <Box>
                <FlatList
                    data={mails}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <ListItem
                            leadingMode="avatar"
                            leading={
                                <Avatar image={{ uri: `https://mui.com/static/images/avatar/${index + 1}.jpg` }} />
                            }
                            title={item.subject}
                            secondaryText={item.content}
                            onPress={() => handleTap(item)}
                        />
                    )}
                />
            </Box>
        </>
    );
}

export default Inbox;