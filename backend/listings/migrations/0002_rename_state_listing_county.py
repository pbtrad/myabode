# Generated by Django 4.0.2 on 2022-02-23 07:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listing',
            old_name='state',
            new_name='county',
        ),
    ]