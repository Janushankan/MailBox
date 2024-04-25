import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Drafts from "./../screens/Drafts"
import AppBar from "../components/AppBar"


const Stack = createNativeStackNavigator()

export const DraftsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DraftsScreen" component={Drafts}
                options={{ headerTitle: (props) => <AppBar title="Drafts" /> }}
            />
        </Stack.Navigator>
    )
}