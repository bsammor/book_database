# Generated by Django 3.1.1 on 2020-09-28 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_recipe_instructions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='instructions',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
