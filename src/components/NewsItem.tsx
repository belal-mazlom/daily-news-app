import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { Article } from '../types/index';

export const NewsItem = ({ item }: { item: Article }) => {
  const handlePress = async () => {
    const canOpen = await Linking.canOpenURL(item.url);
    if (canOpen) {
      await Linking.openURL(item.url);
    }
  };
  
  return (
    <View className={styles.container}>
      <Image source={{ uri: item.urlToImage }} className={styles.image} />
      <Text className={styles.title}>{item.title}</Text>
      <Text className={styles.description}>{item.description}</Text>
      <Text className={styles.publishedAt}>Published at: {new Date(item.publishedAt).toLocaleDateString()}</Text>
      <TouchableOpacity onPress={handlePress} className={styles.link}>
        <Text>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: 'flex flex-1 border-b-2 border-stone-500 p-2 m-4',
  title: 'text-lg font-bold mb-2',
  description: 'text-base mb-2',
  image: 'w-full h-40 mb-2 rounded-xl',
  publishedAt: 'text-sm text-gray mb-2',
  link: 'text-blue-500',
};
