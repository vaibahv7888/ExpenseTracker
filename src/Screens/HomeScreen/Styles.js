import { StyleSheet } from "react-native";
import values from "../../Constants/Values";
import colors from "../../Constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: values.verticalPadding,
        backgroundColor: colors.background,
        justifyContent: 'space-between'
    },
    horizontalPaddingView: {
        paddingHorizontal: values.horizontalPadding
    }
})

export default styles;