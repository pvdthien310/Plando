import { ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import { useData } from '../../hooks/useData'
import { TodoWorkSpaceProps } from '../../navigation/types'
import { SessionItem } from './components'
import styles from './style'

interface todo {
    accountId?: any,
    body?: String,
    start?: Date,
    end?: Date,
    point?: Number,
    sessionId?: any,
    isDone?: Boolean,
    isExpired?: Boolean
}
export default function TodoWorkSpace({
    navigation,
}: TodoWorkSpaceProps<'TodoWorkSpace'>) {

    const { fetchData, loading, error, data } = useData()

    return (
        <View style={styles.container}>
            <View style={styles.panel_1}>
                <Image
                    style={styles.logo_app}
                    source={require('../../assets/images/logo_.png')}
                ></Image>
                <View style={styles.panel_2}>
                    <Text style={styles.title}>
                        Workspace
                    </Text>
                    <View style={styles.line}></View>
                </View>
            </View>
            <TouchableOpacity >
                <Text style={{ backgroundColor: 'black' }} onPress={() => fetchData()}
                >aaaa</Text>
            </TouchableOpacity>
            {
                loading ? <ActivityIndicator size="small" color="#0000ff" />
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data.sessions ? data.sessions : []}
                        renderItem={({ item }) => (
                            <SessionItem key={item._id} item={item} />
                        )}
                        keyExtractor={item => item._id}
                        onRefresh={() => fetchData()}
                        refreshing={loading}
                    />
            }
        </View>
    )
}