# Generated by Django 4.2.6 on 2023-11-01 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lab_net_manager', '0006_lab'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lab',
            name='computers',
        ),
        migrations.AddField(
            model_name='computer',
            name='lab',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='computers', to='lab_net_manager.lab'),
            preserve_default=False,
        ),
    ]
