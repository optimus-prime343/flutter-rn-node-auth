import 'package:dio/dio.dart';

BaseOptions baseOptions = BaseOptions(
  baseUrl: 'http://192.168.101.4:8000/api/v1',
);
Dio dioClient = Dio(baseOptions);
