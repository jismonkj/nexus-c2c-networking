@component('mail::message')
# Verify Your Payment
Dear {{ $name }},<br/>
Use this password to verify your payment. Expires in 5 minutes.

@component('mail::button', ['url'=>''])
    {{ $token }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
