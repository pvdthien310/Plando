import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { Text, View } from '../../components/Themed';
import { useData } from '../../hooks/useData';
import { TodoWorkSpaceProps } from '../../navigation/types';
import { SessionItem } from './components';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AddSessionModal from './components/addSessionModal';
import { useAppSelector } from '../../hooks/useSelector';

interface todo {
  accountId?: any;
  body?: String;
  start?: Date;
  end?: Date;
  point?: Number;
  sessionId?: any;
  isDone?: Boolean;
  isExpired?: Boolean;
}
export default function TodoWorkSpace({
  navigation
}: TodoWorkSpaceProps<'TodoWorkSpace'>) {
  const user = useAppSelector((state) => state.account.user);
  const { fetchData, loading } = useData();
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.panel_1}>
        <Image
          style={styles.logo_app}
          source={require('../../assets/images/logo_.png')}
        ></Image>
        <View style={styles.panel_2}>
          <Text style={styles.title}>Workspace</Text>
          <View style={styles.line}></View>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <FlatList
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
          data={user.sessions ? user.sessions : []}
          renderItem={({ item }) => (
            <SessionItem key={item._id} item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
          onRefresh={() => fetchData()}
          refreshing={loading}
        />
      )}

      <TouchableOpacity
        style={{
          backgroundColor: '#B6E9E0',
          borderRadius: 90,
          padding: 20,
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 0,
          right: 2,
          margin: 10
        }}
        onPress={() => setOpenModal(true)}
      >
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <AddSessionModal
        open={openModal}
        setOpen={setOpenModal}
        fetchData={fetchData}
      />
    </View>
  );
}
