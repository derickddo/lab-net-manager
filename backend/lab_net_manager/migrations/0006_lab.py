# Generated by Django 4.2.6 on 2023-11-01 14:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lab_net_manager', '0005_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lab',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('description', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('computers', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='lab_net_manager.computer')),
            ],
        ),
    ]