# Analisis estatico SonarQube

## Instalacion SonarQube en Local

```sh
docker pull sonarqube
docker pull sonarqube:9.9.5-community
```

## Primera Ejecucion

```sh
docker run -d --name sonarqube -p 9000:9000 sonarqube
docker run -d --name sonarqube -p 9000:9000 sonarqube:9.9.5-community
```


## Ejecuciones Siguientes

```sh
docker container start sonarqube
```

---

# Ejecutar el Analisis

## Herrameinta Global Install

```sh
dotnet tool install --global dotnet-sonarscanner
```

## Manually

> Start

```sh
dotnet sonarscanner begin /d:sonar.login=admin /d:sonar.password=admin /k:"MFConfiguracion"
```

> Build

```sh
dotnet build
```

> Test

```sh
dotnet test
```

> End

```sh
dotnet sonarscanner end /d:sonar.login=admin /d:sonar.password=admin2
```

---