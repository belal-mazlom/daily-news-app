import { Stack } from 'expo-router';

import { getNews } from '@apis/index';
import { Container } from '@components/Container';
import { SearchNews } from '@components/SearchNews';
import { useEffect, useState } from 'react';
import { NewsList } from '@components/NewsList';

export default function Home() {
  const [news, setNews] = useState([]);

  const fetchNews = async (text?: string) => {
    const news = await getNews(text);
    setNews(news.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Daily News' }} />
      <Container>
        <SearchNews onChangeText={(text) => {
          fetchNews(text);
        }} />
        <NewsList news={news} />
      </Container>
    </>
  );
}
