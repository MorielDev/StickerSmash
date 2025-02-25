import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
      <>
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
    <StatusBar style="light" />
    </>
    );
}
/*
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
*/