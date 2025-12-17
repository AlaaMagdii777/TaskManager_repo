# Task Manager - React Native App

A simple task management application built with React Native and TypeScript, supporting both iOS and Android platforms.

## Features

- ✅ Add new tasks with a text input and "Add" button
- ✅ Display all tasks in a list
- ✅ Mark tasks as complete/incomplete by clicking on them (with visual indication)
- ✅ Delete tasks using a delete button
- ✅ Show a count of total tasks and completed tasks
- ✅ Completed tasks have strikethrough style
- ✅ Built with reusable components

## Project Structure

```
task/
├── src/
│   ├── components/
│   │   ├── TaskInput.tsx    # Component for adding new tasks
│   │   ├── TaskItem.tsx     # Component for displaying individual tasks
│   │   └── TaskStats.tsx    # Component for displaying task statistics
│   └── types/
│       └── Task.ts          # TypeScript interface for Task
├── ios/                     # iOS native folder
├── android/                 # Android native folder
├── App.tsx                  # Main application component
└── index.js                # Entry point
```

## Prerequisites

- Node.js (>=16)
- React Native development environment set up
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS, install CocoaPods dependencies:
```bash
cd ios && pod install && cd ..
```

**Note:** If you encounter Podfile errors, make sure you have CocoaPods installed:
```bash
sudo gem install cocoapods
```

3. For Android, ensure you have:
   - Android Studio installed
   - Android SDK configured
   - JAVA_HOME environment variable set
   - An Android emulator running or a physical device connected

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

## Development

Start the Metro bundler:
```bash
npm start
```

## Components

### TaskInput
Reusable component for adding new tasks. Includes a text input and an "Add" button.

### TaskItem
Reusable component for displaying individual tasks. Shows task text, completion status, and a delete button.

### TaskStats
Reusable component for displaying task statistics (total tasks and completed tasks count).

## Troubleshooting

### iOS Issues

**Podfile Error: `undefined method 'prepare_react_native!'`**
- This has been fixed in the Podfile. If you still encounter issues:
  1. Delete `ios/Pods` folder and `Podfile.lock`
  2. Run `cd ios && pod install && cd ..`

**CocoaPods not found:**
```bash
sudo gem install cocoapods
```

### Android Issues

**Build failed:**
- Make sure you have Android SDK installed and configured
- Check that `ANDROID_HOME` environment variable is set
- Ensure you have accepted all Android licenses: `sdkmanager --licenses`
- Try cleaning the build: `cd android && ./gradlew clean && cd ..`

**Metro bundler issues:**
- Clear Metro cache: `npm start -- --reset-cache`

## Technologies Used

- React Native 0.72.6
- TypeScript 4.8.4
- React 18.2.0
- React Hooks (useState)

# TaskManager_repo
