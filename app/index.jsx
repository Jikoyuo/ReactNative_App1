import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-light">
            <Text className="text-3xl font-pblack">Welcome !</Text>
            <StatusBar style="auto"/>
            <Link href="/home" style={{ color: 'blue'}}>Go To Home</Link>
        </View>
    )
}


