import 'package:client/services/auth_service.dart';
import 'package:client/utils/show_snackbar.dart';
import 'package:flutter/material.dart';
import 'package:form_validator/form_validator.dart';

class LoginScreen extends StatelessWidget {
  static const routeName = '/login';
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    AuthService authService = AuthService();
    final GlobalKey<FormState> formState = GlobalKey<FormState>();
    final TextEditingController emailController = TextEditingController();
    final TextEditingController passwordController = TextEditingController();

    void clearInputFields() {
      emailController.clear();
      passwordController.clear();
    }

    void handleLogin() {
      if (formState.currentState?.validate() ?? false) {
        authService.login(
          email: emailController.text,
          password: passwordController.text,
          onError: (error) => showSnackbar(context, error),
        );
      }
    }

    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Login"),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Form(
            key: formState,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextFormField(
                  controller: emailController,
                  keyboardType: TextInputType.emailAddress,
                  textInputAction: TextInputAction.next,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Enter your email",
                  ),
                  validator: ValidationBuilder().email().maxLength(50).build(),
                ),
                const SizedBox(height: 16),
                TextFormField(
                  obscureText: true,
                  controller: passwordController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    hintText: "Enter your password",
                  ),
                  validator: ValidationBuilder().minLength(6).build(),
                ),
                const SizedBox(height: 16),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: handleLogin,
                    child: const Text('Login'),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
