#!/bin/bash
chmod +x init-db.sh

# Espera a que SQL Server esté listo
until /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Hola123." -Q "SELECT 1" > /dev/null 2>&1; do
  echo "Esperando a que SQL Server esté listo..."
  sleep 1
done

# Ejecuta el script de seed
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "Hola123." -i /usr/src/app/seed.sql
