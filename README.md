# remote-sync
Está procurando uma maneira simples de sincronizar alterações locais em seu servidor remoto? Pois você encontrou!

Esse script irá observar os arquivos, e, quando houver uma mudança, ele irá enviar via FTP para seu servidor remoto.

## Configuração
```json
{
    "ftp": {
        "host": "vps.remoteserver.com",
        "port": 21,
        "user": "root",
        "password": ""
    },
    "path": {
        "/srv/development/app-1.jar": "/srv/development/app-1.jar",
        "/srv/development/app-2.jar": "/srv/development/app-2.jar"
    }
}
```

## Está usando Linux?
Se você estiver usando Linux, você pode criar uma tela para deixar rodando o script enquanto você programa.

### 1. instale o aplicativo "screen"
```sh
sudo apt install screen
```

### 2. crie a sua tela virtual
```sh
screen -S <nome desejado>
```

### 3. inicie o script
```sh
node .
```

### 4. saia da tela virtual
Use CTRL+A e depois CTRL+D para sair.

### 5. para retornar a tela
```sh
screen -r <nome usado>
```

## Pronto!
Agora você tem um script que vai ficar rodando enquanto seu computador estiver ligado.
