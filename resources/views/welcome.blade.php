<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Playground</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <!-- Styles -->
        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body>
        <div class="container-fuild mt-5 text-center" id="app">
            <AppBase />
        </div>
    </body>
    <script>
        {!! Vite::content('resources/js/app.js') !!}
    </script>
</html>
