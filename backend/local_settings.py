# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-zzn!^x4s=a4nx1@y54*$ejp$46(w8hc&+y=$j@&b52qt=3ou@m'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'youtube_database',
        'HOST': '127.0.0.1',
        'USER': 'root',
        'PASSWORD': 'password',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}