## 🧾 Git Commit Convention

### ✅ Commit Message 구조 

```
<타입>: <간단한 설명>   

본문 (선택)
```

### 📌 사용 가능한 타입(Type)

| 타입       | 설명                                   |
|------------|----------------------------------------|
| `feat`     | 새로운 기능 추가                        |
| `fix`      | 버그 수정                              |
| `docs`     | 문서 수정 (README 등)                   |
| `style`    | 코드 포맷팅, 세미콜론 누락 등 기능 변화 없는 수정 |
| `refactor` | 코드 리팩토링 (기능 변화 없음)           |
| `test`     | 테스트 코드 추가/수정                   |
| `chore`    | 빌드 업무, 패키지 매니저 설정 등 기타 변경 |
| `perf`     | 성능 개선                              |
| `ci`       | CI 설정 수정                           |
| `build`    | 빌드 관련 파일 수정                     |

### ✏️ 예시

```
feat: 사용자 로그인 기능 구현  

로그인 성공 시 JWT 발급 및 로컬스토리지 저장 로직 추가 
```

```
fix: 회원가입 시 중복 이메일 체크 오류 수정
```

```
docs: 프로젝트 소개 및 기술 스택 문서 추가
```

```
style: 세미콜론 누락 및 공백 정리
```

### 📖 커밋 메시지 작성 규칙

1. 제목은 **50자 이내**로 작성, 첫 글자는 소문자.
2. 제목 끝에 `마침표(.)` 쓰지 않기.
3. **한글 또는 영어** 자유롭게 사용 가능 (팀 합의 기준).
4. 본문이 있다면, 제목과 본문 사이에 한 줄 공백 삽입.
5. 본문은 **무엇을, 왜** 변경했는지 설명.

---

## 🌿 Git 브랜치 전략

### 📌 브랜치 종류

| 브랜치 이름   | 용도 |
|---------------|------|
| `main`        | 실제 배포되는 운영 브랜치 (최종 제품) |
| `develop`     | 통합 개발 브랜치 (모든 기능이 merge됨) |
| `feature/*`   | 새로운 기능 개발용 브랜치 |
| `fix/*`       | 버그 수정용 브랜치 |
| `hotfix/*`    | 운영 중 긴급 수정 브랜치 |
| `release/*`   | 배포 준비 브랜치 (버전 태깅 등 포함) |

### 🛠 브랜치 네이밍 규칙

- `feature/login-api`  
- `fix/signup-validation`  
- `hotfix/server-crash`  
- `release/v1.0.0`  

### 🔁 브랜치 사용 흐름

1. 기능 개발 시:  
   → `develop` 브랜치에서 `feature/기능명` 브랜치 생성 후 작업  
   → 완료되면 `develop`에 Pull Request로 merge

2. 버그 수정 시:  
   → `develop` 또는 `main` 기준으로 `fix/버그명` 브랜치 생성 후 수정  
   → 완료되면 `develop`에 merge (운영 이슈면 `main`에 바로 hotfix 가능)

3. 배포 준비 시:  
   → `develop` → `release/vX.X.X` 브랜치 생성  
   → 테스트 완료 후 `main`에 merge + 버전 태깅

4. 긴급 수정 시:  
   → `main`에서 `hotfix/이슈명` 브랜치 생성  
   → 수정 후 `main` + `develop`에 각각 merge

---

## 🚀 프로젝트 실행 가이드 (Expo)

이 문서는 `Gogildong` 프로젝트를 안드로이드 스튜디오로 처음부터 설정하고 실행하는 전체 과정을 안내합니다.

### **1. 필수 프로그램 설치**

1.  **Node.js & npm:**
    *   [Node.js 공식 홈페이지](https://nodejs.org/)에서 **LTS 버전**을 다운로드하여 설치합니다. (npm은 Node.js에 포함되어 있습니다.)
    *   설치 후 터미널(Git Bash 또는 CMD)에서 `node -v`와 `npm -v` 명령어로 설치를 확인합니다.

2.  **Git:**
    *   [Git 공식 홈페이지](https://git-scm.com/)에서 Git을 다운로드하여 설치합니다.

3.  **Android Studio:**
    *   [Android Studio 공식 홈페이지](https://developer.android.com/studio)에서 최신 버전을 다운로드하여 설치합니다.
    *   설치 마법사에서 **"Custom"** 설치를 선택하고, 다음 항목들이 모두 체크되어 있는지 확인합니다.
        *   `Android SDK`
        *   `Android SDK Platform`
        *   `Android Virtual Device`
    *   설치를 완료합니다.

### **2. 안드로이드 스튜디오 SDK 설정**

1.  Android Studio를 실행하고, 우측 하단의 **`More Actions`** > **`SDK Manager`**를 선택합니다.
2.  **`SDK Platforms`** 탭으로 이동하여, 우측 하단의 **`Show Package Details`**를 체크합니다.
3.  `Android 14.0 ("Upside Down Cake")` 항목을 찾아 펼친 후, 다음 두 가지 항목이 체크되어 있는지 확인하고, 체크되어 있지 않다면 체크하여 설치합니다.
    *   `Android SDK Platform 34`
    *   `Google APIs Intel x86_64 Atom System Image`
4.  **`SDK Tools`** 탭으로 이동하여, 우측 하단의 **`Show Package Details`**를 체크합니다.
5.  `Android SDK Build-Tools` 항목을 찾아 펼친 후, **`34.0.0`** 버전이 체크되어 있는지 확인하고 설치합니다.
6.  `Apply` 또는 `OK`를 눌러 모든 변경 사항을 적용하고 설치를 완료합니다.

### **3. 안드로이드 환경 변수 설정**

1.  **시스템 환경 변수 편집** 창을 엽니다. (Windows 검색에서 "시스템 환경 변수 편집" 검색)
2.  **`환경 변수...`** 버튼을 클릭합니다.
3.  **`시스템 변수`** 섹션에서 **`새로 만들기...`**를 클릭하고, `ANDROID_HOME`이라는 이름의 새 변수를 만듭니다.
    *   **변수 값:** `C:\Users\<사용자_이름>\AppData\Local\Android\Sdk`
        *   `<사용자_이름>` 부분은 본인의 Windows 사용자 이름으로 변경해야 합니다.
        *   `AppData` 폴더가 보이지 않으면, 파일 탐색기 상단의 '보기' 탭에서 '숨긴 항목'을 체크해야 합니다.
4.  **`시스템 변수`** 목록에서 `Path` 변수를 찾아 선택하고 **`편집...`**을 클릭합니다.
5.  **`새로 만들기`**를 클릭하여 다음 **세 가지 경로**를 각각 추가합니다.
    *   `%ANDROID_HOME%\platform-tools`
    *   `%ANDROID_HOME%\emulator`
    *   `%ANDROID_HOME%\tools`
6.  모든 창에서 **`확인`**을 눌러 변경 사항을 저장합니다.
7.  **[중요]** 모든 터미널 창을 닫았다가 **새로 열어서** 변경된 환경 변수를 적용합니다.
8.  새 터미널에서 `adb --version` 명령어를 실행하여 `Android Debug Bridge version...` 메시지가 나오면 성공입니다.

### **4. 안드로이드 에뮬레이터 생성**

1.  Android Studio를 실행합니다.
2.  우측 상단의 **`More Actions`** > **`Virtual Device Manager`**를 선택합니다.
3.  **`Create device`** 버튼을 클릭합니다.
4.  `Pixel 6` 또는 원하는 기기를 선택하고 `Next`를 클릭합니다.
5.  `Recommended` 탭에서 `API Level 34` 시스템 이미지를 선택하고 `Next`를 클릭합니다. (만약 다운로드 링크가 보인다면, 먼저 다운로드를 완료해야 합니다.)
6.  `Finish`를 눌러 에뮬레이터 생성을 완료합니다.

### **5. 프로젝트 설정 및 실행**

1.  **EAS CLI 설치 및 로그인:**
    *   터미널에서 다음 명령어를 실행하여 EAS CLI를 전역으로 설치합니다.
        ```bash
        npm install -g eas-cli
        ```
    *   Expo 계정이 없다면 [Expo 홈페이지](https://expo.dev/)에서 회원가입 후, 터미널에서 로그인합니다.
        ```bash
        eas login
        ```

2.  **프로젝트 클론 및 의존성 설치:**
    *   프로젝트를 Git에서 클론합니다.
        ```bash
        git clone <저장소_URL>
        ```
    *   **[중요]** 프로젝트 **최상위 폴더**로 이동하여 `npm install`을 실행합니다.
        ```bash
        cd Gogildong
        npm install
        ```

3.  **안드로이드 개발 빌드 생성 및 설치 (최초 1회만 필요):**
    *   `front` 폴더로 이동하여 안드로이드용 개발 빌드를 생성합니다.
        ```bash
        cd front
        eas build --platform android --profile development
        ```
    *   빌드가 완료되면 터미널에 `.apk` 파일을 다운로드할 수 있는 링크가 나타납니다.
    *   해당 링크를 통해 `.apk` 파일을 다운로드합니다.
    *   Android Studio의 Virtual Device Manager에서 생성한 에뮬레이터를 실행하고, **다운로드한 `.apk` 파일을 실행 중인 에뮬레이터 화면 위로 드래그 앤 드롭**하여 앱을 설치합니다.

4.  **앱 실행:**
    *   개발 빌드 앱이 에뮬레이터에 설치된 후, 터미널에서 다음 명령어를 실행하여 개발 서버를 시작하고 앱을 실행합니다.
        ```bash
        cd front
        npm run android
