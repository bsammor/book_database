# Generated by Django 3.1.1 on 2020-09-28 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='recipe_image',
            field=models.ImageField(null=True, upload_to='recipes'),
        ),
    ]
