import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="diary" options={{ title: 'Diary' }} />
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="cat-list" options={{ title: 'My Cats' }} />
      <Tabs.Screen name="mypage" options={{ title: 'My Page' }} />
    </Tabs>
  );
}
