import { ScrollView, View, Text } from 'react-native';
import { Article } from '@types/index';
import { NewsItem } from '@components/NewsItem';

export const NewsList = ({ news }: { news: Article[] }) => {
  return (
    <ScrollView className={styles.container}>
      {news.map((item) => (
        <NewsItem key={item.title} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = {
  container: 'flex flex-1',
};
