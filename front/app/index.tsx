import { Text, View } from "react-native";
//View : 전체를 감싸는 컨테이너
//Text : 글자를 표시하는 컴포넌트
//style : 스타일을 지정하는 속성
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello - Gogildong</Text>
    </View>
  );
}
