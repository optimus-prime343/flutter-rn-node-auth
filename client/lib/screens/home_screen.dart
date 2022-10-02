import 'dart:math';

import 'package:client/screens/login_screen.dart';
import 'package:client/screens/register_screen.dart';
import 'package:flutter/material.dart';

import 'profile_screen.dart';

class HomeScreen extends StatelessWidget {
  static const routeName = '/';
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    bool isUserLoggedIn = Random().nextBool();

    Widget loggedInRow = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () => Navigator.of(context).pushNamed(
            ProfileScreen.routeName,
          ),
          child: const Text('Profile'),
        ),
        const SizedBox(width: 10),
        ElevatedButton(
          onPressed: () => Navigator.of(context).pushNamed(
            HomeScreen.routeName,
          ),
          child: const Text('Logout'),
        )
      ],
    );
    Widget notLoggedInRow = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () => Navigator.of(context).popAndPushNamed(
            LoginScreen.routeName,
          ),
          child: const Text('Login'),
        ),
        const SizedBox(width: 10),
        ElevatedButton(
          onPressed: () => Navigator.of(context).pushNamed(
            RegisterScreen.routeName,
          ),
          child: const Text('Register'),
        )
      ],
    );

    return SafeArea(
      child: Scaffold(
        body: Center(
          child: isUserLoggedIn ? loggedInRow : notLoggedInRow,
        ),
      ),
    );
  }
}
