# licensePlate #

<h2> 커밋 메시지의 형식 </h2>

커밋 메시지는 아래와 같이 제목/본문/꼬리말으로 구성한다.

```
<타입>(<적용범위>): 제목
<type>(<scope>): <subject>
--------(BLANK LINE)--------
본문<body>...(생략 가능)
--------(BLANK LINE)--------
꼬리말<footer>...(생략가능)
```

```
ex) 
docs(readme): README 문서 수정

- readme.md에 커밋 메시지 형식 추가함.
--------(BLANK LINE)--------
- 내용이 길어지면 빈 행(blank line)을 둬서 구분합니다.
- 추가 내용이 있을 시 "-"을 추가하면서 적어 줍니다.

현재 꼬리말은 사용하지 않도록 하겠습니다.
어렵습니다.
```

아래 타입, 적용범위, 제목, 본문 작성법은 아래를 참고하시오.

<h2> 1. 타입 </h2>

* `feat` : 새로운 기능에 대한 커밋
* `fix` : 버그 수정에 대한 커밋
* `!hotfix` : 급하게 치명적인 버그를 고쳐야하는 경우
* `build` : 빌드 관련 파일 수정에 대한 커밋
* `docs` : 도큐먼트에 수정에 대한 커밋
* `style` : 코드 문법 또는 포맷에 대한 수정에 대한 커밋
* `refactor` : 코드 리팩토링에 대한 커밋
* `chore` : 그 외 자잘한 수정에 대한 커밋

<h2>  2. 제목 </h2>

* 명령조로 적는다.
* 과거형으로 적지 않는다.
* 끝에 <strong>. 닷</strong> 을 붙이지 않는다.
* 제목과 본문은 <strong>빈 행(blank line)</strong>으로 구분한다.
* 타입(적용범위): <strong>(한칸 띄고)</strong> 제목

``` 
ex) 
feat(package.json): react 화면전환 기능 추가

-> package.jason 파일에서 화면전환 기능을 추가했다는 뜻입니다.
```


<h2> 3. 본문 </h2>

* 구체적으로 적는다.
* 본문 내용은 <strong>어떻게 변경했는지</strong> 보다 <strong>무엇을 왜 변경했는지</strong>를 설명한다.
* 본문에 여러줄의 메시지를 작성할 땐 <strong>"-"</strong>로 구분
* 내용이 길어지면 <strong>빈 행(blank line)</strong>을 둬서 가독성이 좋게한다.
* <strong>"-"</strong>뒤에는 <strong>한칸 띄고</strong> 내용을 작성한다.

```
ex)
- 내용을 여기다가 적으시면 됩니다.
- README 파일 문제있어서 삭제 후 올립니다.
```

git 커밋 메시지를 위한 약속을 지킨다면 <strong>가독성</strong>과 <strong>유지보수</strong>를 편하게, 그리고 더 나은 <strong>협업</strong>을 할 수 있을 것 같습니다.

<h1>Contributors</h1>
<table style="text-align: center;width : 300px;">
  <tr>
    <th>김현빈</th>
    <th>송고은</th>
    <th>오현택</th>
    <th>조윤근</th>
  </tr>
  <tr>
    <th><a href="https://github.com/biiiiiin">@biiiiiin</a></th>
    <th><a href="https://github.com/goeunsong">@goeunsong</a></th>
    <th><a href="https://github.com/hyeontack5">@hyeontack5</a></th>
    <th><a href="https://github.com/Yunkeun">@Yunkeun</a></th>
  </tr>
  <tr>
    <td>Front-End<br/>Developer</td>
    <td>AI<br/>Developer</td>
    <td>AI, Dev<br/>Developer</td>
    <td>Back-End<br/>Developer</td>
  </tr>
</table>
