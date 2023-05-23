<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="app">
    <app></app>
</div>
</body>
@vite('resources/js/front/app.js')
<script>
    window.core = {
        filepath: '{{asset('')}}',
        APP_URL: '{{env('APP_URL')}}',
    };
</script>
</html>
