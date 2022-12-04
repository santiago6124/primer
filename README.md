Trabajo Practico

Sistemas y Telecomunicaciones

![](Aspose.Words.8ffc5618-32b9-4567-acdb-40255a3df820.001.png)

Andino Guillermo, Carranza Santiago, Cimatti Bautista, Galaverna Lorenzo,

Marchisone Mateo

Profesores: Teodoro Reyna, Luciano Bossio

Instituto Tecnico Salesiano Villada, C´ordoba, Argentina 1 de

diciembre de 2022

1  Introduccion

En este trabajo relizaremos distintas actividades con una Raspberry integrando muchos de los conocimientos que hemos adquirido a lo largo del ano.˜

1. Raspberry:

La Raspberry Pi es una serie de ordenadores de placa reducida, ordenadores de placaunica´ u ordenadores de placa simple de bajo costo desarrollado en el Reino Unido por la Raspberry Pi Foundation, con el objetivo de poner en manos de las personas de todo el mundo el poder de la inform´atica y la creaci´on digital.

2. LAN:

Una red de ´area local o LAN es una red de computadoras que permite la comu- nicaci´on y el intercambio de datos entre diferentes dispositivos a nivel local, ya que est´a limitada a distancias cortas.

3. SSH (o Secure Shell, en espanol:˜ Int´erprete de ´ordenes seguro) es el nombre de un protocolo y del

programa que lo implementa cuya principal funci´on es el acceso remoto a un servidor por medio de un canal seguro en el que toda la informaci´on est´a cifrada. Adem´as de la conexi´on a otros dispositivos, SSH permite copiar datos de forma segura (tanto archivos sueltos como simular sesiones FTP cifradas), gestionar claves RSA para no escribir contrasenas˜ al conectar a los dispositivos y pasar los datos de cualquier otra aplicaci´on por un canal seguro tunelizado mediante SSH y tambi´en puede redirigir el tr´afico del (Sistema de Ventanas X) para poder ejecutar programas gr´aficos remotamente.

4. X11 Forwarding

Es un mecanismo que permite a los usuarios iniciar aplicaciones remotamente y luego mostrar la interfaz grafica localmente.

5. GNOME (GNU Network Object Model Environment)

Entorno de escritorio para Linux

6. Gedit

Editor de texto disenado˜ para el entorno de escritorio GNOME

7. Nautilus

Gestor de archivos oficial de GNOME

8. DHCP (Dynamic Host Configuration Protocol)

Protocolo que asigna IPs de forma automatica a los otros dispositivos conectados a la red usando la arquitectura de cliente-servidor.

9. FTP (File Transfer Protocol)

El protocolo FTP funciona con una arquitectura cliente-servidor para comuni- carse y transferir archivos entre el servidor FTP y los clientes FTP. Un servidor FTP permite la conexi´on de multiples´ clientes FTP para transferir datos. Por defecto, el servidor FTP hace uso del puerto 21 TCP como canal de control, para el establecimiento de la conexi´on, autenticaci´on en el servidor y tambi´en para terminar definitivamente la conexi´on con el servidor FTP”.

\vspace{20pt}

19 de Septiembre - Clase 1 Raspberry - SSH

2  Instalacion de SSH
- Descargamos el raspberry PI Imager, (Es una herramienta creada por

la fundaci´on Raspberry Pi que nos permite instalar sistemas operativos

(SO) en nuestra raspberry pi de una manera sencilla paso a paso. Es

una soluci´on integral que descarga el sistema operativo elegido, permite configurarlo, formatea la tarjeta SD y luego escribe el sistema operativo

en ella.) donde luego de formatear la tarjeta SD (Secure Digital es un dispositivo en formato de tarjeta de memoria para dispositivos port´atiles.), instalamos el SO correspondiente (Raspberry PI OS Lite), el cual no tiene entorno visual, consiste solo de terminal.

- Despu´es insertamos la SD en la Raspberry, conectamos el monitor y el teclado.
- Al completarse el booteo, ingresamos el usuario (grupo1) contrasena˜ (pepe1234).
- Para istalar SSH debemos ejecutar los siguientes comandos: sudo apt-get install openssh-server (El comando sudo permite a los usuarios no root ejecutar otros comandos Linux que normalmente requerir´ıan privile- gios de superusuario) (apt-get sirve para instalar paquetes) sudo systemctl enable ssh (comando para activar el servicio reci´en instalado)
- Conectamos el cliente con la raspberry a trav´es del switch o directamente mediante el cable ethernet.
- Instalamos SSH en el cliente y corroboramos el estado con sudo systemctl status ssh
- Ejecutamos sudo service ssh restart
- Conectamos la Raspberry y nuestra computadora al switch, a su vez conec- tamos el switch a una rosetta del laboratorio.
- Ingresamos a la Raspberry con nuestra computadora con el comando ssh grupo1@169.254.110.106 (la direcci´on IP pertenece a la raspberry)
- Luego ingresamos la contrasen˜a del usuarui grupo1, perteneciente al servi-

dor.

- Ingresamos comandos, desde el cliente, de instalaci´on paquetes que ser´an instalados en el servidor Raspberry: sl y cmatrix. (Los anteriores son mini pgrogramas que corren atrav´es de la terminal una animaci´on) \vspace{20pt}

26 de Septiembre - Clase 2 Raspberry - XORG

3  Instalacion de ForwardX11
- A traves del comando: sudo nano -w /etc/ssh/ssh~~ config (nano es un editor de texto minimalista, con el mismo accedemos a los diferentes archivos de configuraci´on del ssh y ForwardX11) Accedemos a la config- uracion del SSH para cambiar la configuracion del ForwardX11 a YES y descomentamos la linea borrando el ”#”. (Con este paso estar´ıamos habilitando el protocolo para funcionar en el servidor)
- Desde el cliente ingresamos el siguiente comando para activar el X11 For- warding ssh -X grupo1@192.168.60.21 (el -X habilita el ForwardX11 del cliente)
- Una vez conectados por el ssh instalamos gedit sudo apt install gedit (editor de texto convencional de linux) o nautilus sudo apt install nautilus (gestor de archivos por defecto de linux) para poder hacer la prueba.
- Procedemos a ingresar “gedit” para que se abra la ventana del editor de texto desde el cliente.
- Se puede ver el gestor de archivos y junto con el nautilus podemos crear y guardar un archivo de texto. (con este paso comprobamos el poder correr aplicaciones del servidor de forma gr´afica en el cliente.)

\vspace{20pt}

31 de Octubre - Clase 3 Raspberry - DHCP

4  Instalacion del servicio DHCP
- Instalamos el servicio DHCP en la Raspberry con el comando sudo apt install isc-dhcp-server
- Modificamos el archivo dhcpcd.conf que se encuentra en /etc con el co- mando sudo nano dhcpcd.conf
- En el archivo buscamos el apartado ”Example static IP configuration” y escribimos:
- interface eth0
- static ip~~ address=192.168.73.1/24
- static routers=192.168.73.1
- static domain~~ name~~ servers=192.168.73.1
- (Realizando esta configuraci´on le asignamos una IP est´atica al servi-

dor, la Raspberry.) En el caso de que esto ya este escrito, lo descon-

mentamos y hacemos las correcciones necesarias.

- Modificamos el archivo dhcpd.conf que se encuentra en /etc/dhcp con el comando sudo nano dhcpd.conf
- Buscamos lo siguiente: option domain-name y ponemos entre comillas ”home.lan” y en option domain-name-servers ponemos ”8.8.8.8, 8.8.4.4”
- Escribimos lo siguiente en el archivo:
- subnet 192.168.73.0 netmask 255.255.255.0 {
- range dynamic-bootp 192.168.73.10 192.168.73.100;
- option broadcast-address 192.168.73.255;
- option routers 192.168.73.1;
- }
- (Actualizando esta configuraci´on estamos generando la pool del ser-

vicio DHPC, indicando el l´ımite de las ip otorgadas a los clientes)

- Creamos un archivo llamado eth0 en el directorio /etc/network/interfaces.d con el comando sudo nano eth0
- Editamos el mismo y escribimos lo siguiente:
  - auto eth0
  - iface eth0 inet static
  - address 192.168.73.1
  - netmask 255.255.255.0
  - (Colocamos una ip est´atica directamente en el puerto eth0)
- Editamos el el archivo interfaces en la ruta /etc/network con el comando

sudo nano interfaces y escribimos lo siguiente: source /etc/network/interfaces.d/\* (Con este comando le estamos asignando la configuraci´on est´atica del eth0

a la configuraci´on de la Raspberry)

- Reiniciamos la Raspberry con el comando sudo reboot
- Mientras se reinicia la Raspberry, la conectamos al switch y conecta-

mos 2 compus, al finalizar el inicio de la Raspberry ejecutamos el co-

mando hostname -I en las computadoras conectadas al switch y vemos

que las direcciones IP que muestra son estan en el rango de 192.168.73.10

y 192.168.73.100 como ingresamos anteriormente.

\vspace{20pt}

17 de Octubre - Clase 4 Raspberry - FTP

5  Instalaci´on del servicio vsftpd
- sudo apt-get install vsftpd (vsftpd ”very secure FTP daemon”)
- ”Vsftpd es uno de los servidores FTP m´as potentes y completos disponibles para la mayor´ıa de distribuciones de Linux. Este servi- dor FTP es el favorito de muchos administradores de sistemas por la configurabilidad que es capaz de proporcionarnos, y por la facilidad de configuraciones avanzadas en el propio servidor FTP”.
- sudo nano /etc/vsftpd.conf
- Ac´a podremos ingresar a la configuraci´on para descomentar las sigu- ientes configuraciones \* local~~ enable=YES \* write~~ enable=YES
- Con el fin de habilitar la escritura de datos desde un cliente hacia la raspberry.
- sudo service vsftpd restart
  - Reiniciamos el servicio para aplicar todos los cambios correctamente.
- sudo apt-get install filezilla
- Instalamos en el cliente filezilla Este´ es un cliente FTP que nos per- mite visualmente realizar transferencias de archivos usando dicho pro-

tocolo.

![](Aspose.Words.8ffc5618-32b9-4567-acdb-40255a3df820.002.png)

- Rellenamos los campos para conectarse con la raspberry:

![](Aspose.Words.8ffc5618-32b9-4567-acdb-40255a3df820.003.png)

- Una vez ya conectados podemos realizar transferencias de archivos arras- trandolos de una ventana a otra.
6  Conclusi´on

Al finalizar estos trabajos llegamos a la concluision de que la Raspberry es una herramienta muy potente ya que es una micro computadora por lo que la podemos usar como un servidor ya sea DHCP o demas cosas relacionadas con el networking. Tambien pudimos armar una red LAN con un servidor DHCP con los conocimientos adiquiridos en Packet Tracer este ano.˜ Ademas de eso, aprendimos como establecer una conexion con el protocolo SSH y transferir archivos con el protocolo FTP.

7  Bibliografia
1. SSH

https://www.ionos.es/digitalguide/servidores/configuracion/activar-ssh-en-raspberry- pi/

2. XORG

https://unix.stackexchange.com/questions/12755/how-to-forward-x-over-ssh-to- run-graphics-applications-remotely

3. DHCP

https://servidordebian.org/es/buster/intranet/dhcp/server https://sobrebits.com/montar- un-servidor-casero-con-raspberry-pi-parte-3-configurar-servidor-dhcp/

4. FTP

https://geekytheory.com/tutorial-raspberry-pi-9-servidor-ftp/
6
