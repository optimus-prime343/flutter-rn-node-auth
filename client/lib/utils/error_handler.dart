import 'package:dio/dio.dart';

void errorHandler({
  required DioError error,
  required void Function(String message) callback,
  String Function(Response<dynamic>? response)? errorResponseParser,
}) {
  if (error.response != null) {
    late String message;
    if (errorResponseParser != null) {
      message = errorResponseParser(error.response);
    } else {
      message = error.response?.data?['message'] as String;
    }
    callback(message);
  } else {
    callback(error.message);
  }
}
