\documentclass[titlepage,14pt]{article}
\usepackage{markdown}
\usepackage[utf8]{inputenc}
\markdownInput{example.md}

\begin{document}
\begin{titlepage}
    \begin{center}
        \vspace*{1cm}

        \Huge
        \textbf{Trabajo Práctico }

        \vspace{0.5cm}
        \LARGE
        Sistemas y Telecomunicaciones

        \vspace{1.5cm}

        \includegraphics[width=0.3\textwidth]{imagenes/villada.png}
        
        \vspace{1.5 cm}
        \textbf{
        Andino Guillermo,
        Carranza Santiago,
        Cimatti Bautista,
        Galaverna Lorenzo,
        Marchisone Mateo}

        \vspace{1.5 cm}
        \textbf{
         Profesores:}
         Teodoro Reyna, Luciano Bossio
         
        \large
         \vspace{1.5cm}
        Instituto Técnico Salesiano Villada,\
        Córdoba, Argentina\
        1 de diciembre de 2022

    \end{center}
\end{titlepage}

\cleardoublepage

\begin{markdown}


# Introducción
En este trabajo realizaremos distintas actividades con una Raspberry integrando muchos de los conocimientos que hemos adquirido a lo largo del año.
## Raspberry:
La Raspberry Pi es una serie de ordenadores de placa reducida, ordenadores de placa única u
ordenadores de placa simple de bajo costo desarrollado en el Reino Unido por la Raspberry Pi
Foundation, con el objetivo de poner en manos de las personas de todo el mundo el poder de la informática y la creación digital.
## Raspberry PI Imager: 
Herramienta que nos permite instalar sistemas operativos en una tarjeta SD de manera fácil y rápida. Descargamos el OS deseado, lo seleccionamos en la aplicación, esta precederá formateando la tarjeta SD y escribiéndole el OS en ella.
## LAN:
Una red de área local o LAN es una red de computadoras que permite la comunicación y el
intercambio de datos entre diferentes dispositivos a nivel local, ya que está limitada a distancias
cortas.
## Sudo: prefijo que permite ejecutar cualquier comando como otro usuario, tal como "superusuario" con privilegios elevados. Esto equivale a "ejecutar como administrador" en Windows
## apt-get install: 
apt-get es una utilidad de manejo de paquetes mediante el terminal e install indica a esta herramienta qué paquete instalar
## systemctl: 
comando que permite controlar los servicios en un sistema Linux.
### enable: 
habilita o enciende un servicio
### status: 
nos indica el estado del servicio
### restart: 
reinicia el servicio
## Nano:
Editor de texto para sistemas operativos que usan una interfaz basada en la línea de comandos.
### -w (--nowrap):
Deshabilita el wrapping de las líneas largas.
## hostname:
muestra o establece el hostname del sistema
### -I (--all-ip-addresses):
Muestra todas las direcciones IP del host. Enumera todas las direcciones configuradas en todas las interfaces.
## SSH (o Secure Shell, en español: 
Intérprete de órdenes seguro) es el nombre de un protocolo y del programa que lo implementa cuya principal función es el acceso remoto a un servidor por medio
de un canal seguro en el que toda la información está cifrada. Además de la conexión a otros
dispositivos, SSH permite copiar datos de forma segura (tanto archivos sueltos como simular
sesiones FTP cifradas), gestionar claves RSA para no escribir contraseñas al conectar a los
dispositivos y pasar los datos de cualquier otra aplicación por un canal seguro tunelizado mediante SSH y también puede redirigir el tráfico del (Sistema de Ventanas X) para poder ejecutar programas gráficos remotamente.
## X11 Forwarding
Es un mecanismo que permite a los usuarios iniciar aplicaciones remotamente y luego mostrar la interfaz gráfica localmente.
## GNOME (GNU Network Object Model Environment)
Entorno de escritorio para Linux
## Gedit
Editor de texto diseñado para el entorno de escritorio GNOME
## Nautilus
Gestor de archivos oficial de GNOME
## DHCP (Dynamic Host Configuration Protocol)
Protocolo que asigna direcciones IP de forma automática a los otros dispositivos conectados a la red usando la arquitectura de cliente-servidor.
## FTP (File Transfer Protocol)
El protocolo FTP funciona con una arquitectura cliente-servidor para comunicarse y transferir archivos entre el servidor FTP y los clientes FTP. Un servidor FTP permite la conexión de múltiples clientes FTP para transferir datos. Por defecto, el servidor FTP hace uso del puerto 21 TCP como canal de control, para el establecimiento de la conexión, autenticación en el servidor y también para terminar definitivamente la conexión con el servidor FTP.

**19 de septiembre - Clase 1 Raspberry - SSH**

# Instalación de SSH

- Descargamos el Raspberry PI Imager, (Es una herramienta creada por la fundación Raspberry Pi que nos permite instalar sistemas operativos (SO) en nuestra Raspberry PI de una manera sencilla paso a paso. Es una solución integral que descarga el sistema operativo elegido, permite configurarlo, formatea la tarjeta SD y luego escribe el sistema operativo en ella.) donde luego de formatear la tarjeta SD (Secure Digital es un dispositivo en formato de tarjeta de memoria para dispositivos portátiles.), instalamos el SO
correspondiente (Raspberry PI OS Lite), el cual no tiene entorno visual, consiste solo de terminal.
- Después insertamos la SD en la Raspberry, conectamos el monitor y el teclado.
- Al completarse el booteo, ingresamos el usuario (grupo1) y contraseña (pepe1234).
- Para instalar SSH debemos ejecutar los siguientes comandos:
```sudo apt-get install openssh-server``` (El comando sudo permite a los usuarios no root ejecutar otros comandos Linux que normalmente requerirían privilegios de superusuario) (apt-get sirve para instalar paquetes)
```sudo systemctl enable ssh``` (comando para activar el servicio recién instalado)
- Conectamos el cliente con la Raspberry a través del switch o directamente mediante el cable ethernet.
- Instalamos SSH en el cliente y corroboramos el estado con ```sudo systemctl status ssh```
- Ejecutamos ```sudo service ssh restart```
- Conectamos la Raspberry y nuestra computadora al switch, a su vez conectamos el switch a una roseta del laboratorio.
- Ingresamos a la Raspberry con nuestra computadora con el comando ```ssh grupo1@169.254.110.106``` (la dirección IP pertenece a la Raspberry)
- Luego ingresamos la contraseña del usuario grupo1, perteneciente al servidor. 
- Ingresamos comandos, desde el cliente, de instalación paquetes que serán instalados en el servidor Raspberry: sl y cmatrix. (Los anteriores son mini programas que corren a través de la terminal una animación) 


**26 de septiembre - Clase 2 Raspberry - XORG**

# Instalación de ForwardX11

- A traves del comando: ```sudo nano -w /etc/ssh/ssh_config``` (nano es un editor de texto minimalista, con el mismo accedemos a los diferentes archivos de configuración del ssh y ForwardX11)
Accedemos a la configuración del SSH para cambiar la configuración del ForwardX11 a YES y des comentamos la línea borrando el "#". (Con este paso estaríamos habilitando el protocolo para funcionar en el servidor)

- Desde el cliente ingresamos el siguiente comando para activar el X11 Forwarding
```ssh -X grupo1@192.168.60.21``` (él -X habilita el ForwardX11 del cliente)

- Una vez conectados por el ssh instalamos gedit ```sudo apt install gedit```(editor de texto convencional de linux) o nautilus ```sudo apt install nautilus``` (gestor de archivos por defecto de linux) para poder hacer la prueba.

- Procedemos a ingresar “gedit” para que se abra la ventana del editor de texto desde el cliente. 

- Se puede ver el gestor de archivos y junto con el nautilus podemos crear y guardar un archivo de texto. (con este paso comprobamos el poder correr aplicaciones del servidor de forma gráfica en el cliente.)


**31 de octubre - Clase 3 Raspberry - DHCP**

# Instalación del servicio DHCP

- Instalamos el servicio DHCP en la Raspberry con el comando ```sudo apt install isc-dhcp-server```
- Modificamos el archivo dhcpcd.conf que se encuentra en /etc con el comando ```sudo nano dhcpcd.conf```
- En el archivo buscamos el apartado "Example static IP configuration" y escribimos:
    - ``` interface eth0 ```
    - ```static ip_address=192.168.73.1/24```
    - ```static routers=192.168.73.1```
    - ```static domain_name_servers=192.168.73.1```
    - (Realizando esta configuración le asignamos una IP estática al servidor, la Raspberry.)
En el caso de que esto ya este escrito, lo des comentamos y hacemos las correcciones necesarias.
- Modificamos el archivo dhcpd.conf que se encuentra en /etc/dhcp con el comando ```sudo nano dhcpd.conf```
- Buscamos lo siguiente: option domain-name y ponemos entre comillas "home.lan" y en option domain-name-servers ponemos "8.8.8.8, 8.8.4.4"
- Escribimos lo siguiente en el archivo:
    - ```subnet 192.168.73.0 netmask 255.255.255.0 {```
    - ```range dynamic-bootp 192.168.73.10 192.168.73.100;```
    - ```option broadcast-address 192.168.73.255;```
    - ```option routers 192.168.73.1;```
    - ```}```
    - (Actualizando esta configuración estamos generando la pool del servicio DHPC, indicando el límite de las IP otorgadas a los clientes)
- Creamos un archivo llamado eth0 en el directorio /etc/network/interfaces.d con el comando ```sudo nano eth0``` 
- Editamos el mismo y escribimos lo siguiente: 
    - ```auto eth0```
    - ```iface eth0 inet static```
    - ```address 192.168.73.1```
    - ```netmask 255.255.255.0```
    - (Colocamos una ip estática directamente en el puerto eth0)
- Editamos el archivo interfaces en la ruta /etc/network con el comando ```sudo nano interfaces``` y escribimos lo siguiente: ```source /etc/network/interfaces.d/*``` (Con este comando le estamos asignando la configuración estática del eth0 a la configuración de la Raspberry)
- Reiniciamos la Raspberry con el comando ```sudo reboot```
- Mientras se reinicia la Raspberry, la conectamos al switch y conectamos 2 compus, al finalizar el inicio de la Raspberry ejecutamos el comando ```hostname -I``` en las computadoras conectadas al switch y vemos que las direcciones IP que muestra son están en el rango de 192.168.73.10 y 192.168.73.100 como ingresamos anteriormente.


**17 de octubre - Clase 4 Raspberry - FTP**

#Instalación del servicio vsftpd

- ```sudo apt-get install vsftpd``` (vsftpd "very secure FTP daemon")

      * "Vsftpd es uno de los servidores FTP más potentes y completos disponibles para la mayoría de distribuciones de Linux. Este servidor FTP es el favorito de muchos administradores de sistemas por la configurabilidad que es capaz de proporcionarnos, y por la facilidad de configuraciones avanzadas en el propio servidor FTP".
- ```sudo nano /etc/vsftpd.conf```

    - Acá podremos ingresar a la configuración para des comentar las siguientes configuraciones 
        ```* local_enable=YES
        * write_enable=YES``` 
    - Con el fin de habilitar la escritura de datos desde un cliente hacia la Raspberry. 
     
- ```sudo service vsftpd restart```
    - Reiniciamos el servicio para aplicar todos los cambios correctamente.

- ```sudo apt-get install filezilla```
    - Instalamos en el cliente filezilla
     Este es un cliente FTP que nos permite visualmente realizar transferencias de archivos usando dicho protocolo.
\end{markdown}

 \begin{figure}[h!]
\centering
\includegraphics[width=1.1\textwidth]{imagenes/entrega4im1.png}
\end{figure}

 \begin{markdown} 
- Rellenamos los campos para conectarse con la Raspberry:
\end{markdown}

 \begin{figure}[h!]
\centering
\includegraphics[width=1.1\textwidth]{imagenes/entrega4im2.png}
\end{figure}
\begin{markdown}
-  Una vez ya conectados podemos realizar transferencias de archivos arrastrándolos de una ventana a otra.

# Conclusión
Al finalizar estos trabajos llegamos a la conclusión de que la Raspberry es una herramienta muy potente, ya que es una microcomputadora, por lo que la podemos usar como un servidor, ya sea DHCP o demás cosas relacionadas con el networking.
También pudimos armar una red LAN con un servidor DHCP con los conocimientos adquiridos en Packet Tracer este año. Además de eso, aprendimos como establecer una conexión con el protocolo SSH y transferir archivos con el protocolo FTP.

# Bibliografía

## Raspberry PI Imager:
https://www.youngwonks.com/blog/Raspberry-Pi-Imager

## Sudo: 
 https://www.geeksforgeeks.org/sudo-command-in-linux-with-examples/

## apt-get install:
https://explainshell.com/explain?cmd=apt-get+install

## systemctl:
https://documentation.suse.com/smart/linux/html/reference-systemctl-enable-disable-services/index.html

## Nano:
https://en.wikipedia.org/wiki/GNU_nano

## Hostname
https://explainshell.com/explain?cmd=hostname+-I

## SSH
https://www.ionos.es/digitalguide/servidores/configuracion/activar-ssh-en-raspberry-pi/

## XORG
https://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-to-run-graphics-applications-remotely

## DHCP
https://servidordebian.org/es/buster/intranet/dhcp/server
https://sobrebits.com/montar-un-servidor-casero-con-raspberry-pi-parte-3-configurar-servidor-dhcp/

## FTP
https://geekytheory.com/tutorial-raspberry-pi-9-servidor-ftp/



\end{markdown}
\end{document}
