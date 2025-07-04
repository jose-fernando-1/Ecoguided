# Generated by Django 5.1.5 on 2025-03-03 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0008_auto_20250302_1540'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userpreference',
            name='faixa_etaria',
            field=models.CharField(blank=True, choices=[('18-24 anos', '18-24 anos'), ('25-34 anos', '25-34 anos'), ('35-44 anos', '35-44 anos'), ('45-54 anos', '45-54 anos'), ('55+ anos', '55+ anos')], max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='userpreference',
            name='importancia_sustentabilidade',
            field=models.CharField(blank=True, choices=[('Muito Importante', 'Muito Importante'), ('Importante', 'Importante'), ('Pouco Importante', 'Pouco Importante'), ('Nada Importante', 'Nada Importante')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='userpreference',
            name='viagens_anuais',
            field=models.CharField(blank=True, choices=[('Nunca', 'Nunca'), ('1-2 vezes', '1-2 vezes'), ('3-5 vezes', '3-5 vezes'), ('5+ vezes', '5+ vezes')], max_length=15, null=True),
        ),
    ]
