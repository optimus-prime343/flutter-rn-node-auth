import 'package:flutter/material.dart';

import 'screens/index.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter NodeJS Authentication',
      debugShowCheckedModeBanner: false,
      initialRoute: HomeScreen.routeName,
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      routes: {
        HomeScreen.routeName: (context) => const HomeScreen(),
        LoginScreen.routeName: (context) => const LoginScreen(),
        RegisterScreen.routeName: (context) => const RegisterScreen(),
        ProfileScreen.routeName: (context) => const ProfileScreen(),
      },
    );
  }
}
