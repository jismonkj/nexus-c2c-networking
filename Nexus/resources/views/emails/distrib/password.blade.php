@component('mail::message')
# Your Login Credentials
Dear {{ $name }},<br/>
you can login to your nexus distributor panel using the following credentials.

email : {{ $email }}
password: {{ $password }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
