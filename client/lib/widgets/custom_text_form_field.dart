import 'package:flutter/material.dart';

class CustomTextFormField extends TextFormField {
  CustomTextFormField({super.key}) : super();

  Widget build(BuildContext context) {
    return TextFormField(
      decoration: const InputDecoration(
        border: OutlineInputBorder(),
        labelText: 'Password',
      ),
    );
  }
}
