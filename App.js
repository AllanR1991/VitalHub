import { useFonts, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <></>
  );
}
