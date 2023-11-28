import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Button from '../button';
import styles from './styles';
import {color} from '../../../theme/color';
import {observer} from 'mobx-react-lite';
import {FlatList} from 'react-native-gesture-handler';

interface AnyObject {
  [key: string]: any;
}

interface OnChangeProps {
  item: AnyObject;
}

interface Props {
  activeId: string;
  dataKey: string;
  onChange: ({item}: OnChangeProps) => void;
  data: AnyObject[];
}

const TagTabs = observer(({activeId, dataKey, onChange, data}: Props) => {
  const [activeTab, setActiveTab] = useState<AnyObject | null>(null);

  const renderItem = ({item}: any) => {
    const isActiveTab = activeTab
      ? item[dataKey] === activeTab[dataKey]
      : false;

    const onClick = () => {
      setActiveTab(item);
      onChange({item});
    };

    return (
      <Button
        text={item.name}
        color={isActiveTab ? color.brightRed : null}
        onClick={onClick}
        textStyle={{color: isActiveTab ? color.white : color.smokyBlack}}
      />
    );
  };

  useEffect(() => {
    const activeItem = data.find(item => {
      return item[dataKey] === activeId;
    });

    if (activeItem) {
      setActiveTab(activeItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, data]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.tags}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.list}
    />
  );
});

export default TagTabs;
