import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="find-id" options={{ title: 'Find ID' }} />
      <Stack.Screen name="find-password" options={{ title: 'Find Password' }} />
    </Stack>
  );
}
