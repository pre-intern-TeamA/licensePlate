# What the Park #
주차장 자동화 서비스를 위한 번호판 인식 프로젝트

## 백엔드 구조

```bash
|-- licensePlate // Backend
  |-- flask
      |-- detection
      |   |-- data
      |   |   ... // Yolov5 관련 파일
      |   |
      |   |-- migrations
      |   |   ... // db migrate 관련 파일
      |   |
      |   |-- models
      |   |   ... // Yolov5 관련 파일
      |   |
      |   |-- runs/detect
      |   |   ... // training 관련 파일
      |   |
      |   |-- utils
      |   |   ... // Yolov5 관련 파일
      |   |
      |   |-- weights
      |   |   ... // 가중치 관련 파일
      |   |
      |   |-- yolov5
      |   |   ... // Yolov5 관련 파일
      |   |
      |   |-- app.py // flask 
      |   |-- model.py  // table 생성
      |   |-- carnumber.py  // 번호판 추출 파일
      |   |-- detect.py   // yolov5 학습 파일
      |   |
      |-- app.db  // db
      |-- config.py
```
