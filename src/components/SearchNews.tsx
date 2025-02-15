import { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native'
import { useDebounce } from '@utils/helpers';

type SearchNewsProps = {
  onChangeText: (text: string) => void;
};

export const SearchNews = ({ onChangeText }: SearchNewsProps) => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 300);

  useEffect(() => {
    onChangeText(debouncedText);
  }, [debouncedText]);

  return (
    <View className={styles.container}>
      <TextInput
        className={styles.input}
        placeholder="Search topics"
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};
const styles = {
  container: `flex-row items-center justify-between border-b-2 border-stone-200 m-2 p-2`,
  title: `text-xl font-bold flex-2 p-2`,
  input: `border-2 border-stone-200 rounded-full py-4 px-2 flex-1 placeholder:text-stone-600`,
};
