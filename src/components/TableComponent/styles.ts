import { StyleSheet } from "react-native";
import { COLORS } from "@app/constants/themes";

const styles =StyleSheet.create({
        tableContainer: {
        //   padding: 15,
        marginTop:15
        },
        tableHeader: {
          backgroundColor: COLORS.grayshade1,
          borderTopLeftRadius:10,
          borderTopRightRadius: 10,
        },
})

export default styles