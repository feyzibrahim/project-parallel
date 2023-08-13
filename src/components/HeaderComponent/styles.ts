import { COLORS } from "@app/constants/themes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.darkBlueShade,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:16,
        paddingVertical: 20
    },
    headerText:{
        color:COLORS.primary,
        fontSize: 25,
        fontWeight:'bold'
    },
    logoutButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 16,
        // marginRight: 10,
      },
      logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})
export default styles