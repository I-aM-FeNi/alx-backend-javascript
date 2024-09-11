from django.urls import path
from .views import *

app_name = 'school'

urlpatterns = [
    path('api/create_school/', create_school, name='create_school'),
    path('api/school_list/', school_list, name='school_list' ),
    path('api/update/<school_code>/', school_detail, name='school_detail')
]