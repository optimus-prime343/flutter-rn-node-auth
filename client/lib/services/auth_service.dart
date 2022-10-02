import 'package:client/utils/error_handler.dart';
import 'package:dio/dio.dart';

import '../constants/api_urls.dart';
import '../utils/dio_client.dart';

typedef CustomCallback = void Function(String message);

class AuthService {
  Future<void> login({
    required String email,
    required String password,
    CustomCallback? onError,
    CustomCallback? onSuccess,
  }) async {
    try {
      Response response = await dioClient.post(
        kLoginURL,
        data: {"email": email, "password": password},
      );
      String token = response.data['data']['token'];
      if (onSuccess != null) onSuccess(token);
    } on DioError catch (error) {
      if (onError != null) {
        errorHandler(
          error: error,
          callback: onError,
        );
      }
    }
  }

  Future<void> register({
    required String name,
    required String email,
    required String password,
  }) async {
    return Future.delayed(const Duration(seconds: 2));
  }
}
