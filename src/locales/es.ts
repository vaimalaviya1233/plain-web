export default {
  app_name: 'PlainApp',
  fetch_content_automatically: 'Obtener contenido automáticamente',
  sort: 'Ordenar',
  sort_by: {
    date_asc: 'Fecha más antigua primero',
    date_desc: 'Fecha más reciente primero',
    size_asc: 'Más pequeño primero',
    size_desc: 'Más grande primero',
    name_asc: 'Nombre (A a Z)',
    name_desc: 'Nombre (Z a A)',
  },
  print: 'Imprimir',
  cancel: 'Cancelar',
  ok: 'Aceptar',
  connection_timeout: 'Tiempo de conexión agotado',
  save: 'Guardar',
  saving: 'Guardando',
  saved: 'Guardado',
  status: 'Estado',
  enabled: 'Habilitado',
  updated: 'Actualizado',
  enable: 'Habilitar',
  deleted: 'Eliminado',
  create: 'Crear',
  listening_port: 'Puerto de escucha',
  edit: 'Editar',
  delete: 'Eliminar',
  actions: 'Acciones',
  running: 'Ejecutándose',
  stopped: 'Detenido',
  basic: 'Básico',
  name: 'Nombre',
  address: 'Dirección',
  yes: 'Sí',
  no: 'No',
  my_phone: 'Mi teléfono',
  me: 'Yo',
  password: 'Contraseña',
  chat_input_hint: '¿Qué tienes en mente?',
  release_to_send_file: 'Suelta para enviar archivo',
  confirm_to_delete_name: '¿Confirmar eliminación de "{name}"?',
  confirm_to_delete: '¿Confirmar eliminación?',
  valid: {
    string_min: 'Al menos {min} caracteres',
    required: 'Este campo es obligatorio',
  },
  theme: {
    title: 'Tema',
    system: 'Predeterminado del sistema',
    light: 'Claro',
    dark: 'Oscuro',
  },
  language: {
    title: 'Idioma',
    system: 'Predeterminado del sistema',
  },
  exchange: {
    data_date: 'Fecha',
  },
  education: {
    memorize_words: 'Memorizar palabras',
  },
  log_in: 'Iniciar sesión',
  logging_in: 'Iniciando sesión',
  login: {
    to_continue: 'Toca el botón Aceptar en tu teléfono para continuar.',
    failed: 'Fallo al iniciar sesión, asegúrate de que tu teléfono no esté en modo de suspensión.',
    rejected: 'La solicitud de inicio de sesión ha sido rechazada.',
    invalid_password: 'Contraseña incorrecta.',
  },
  header_actions: {
    language: 'Cambiar idioma',
    theme: 'Cambiar tema',
    tasks: 'Tareas',
    audios: 'Audio',
    logout: 'Cerrar sesión',
    notifications: 'Notificaciones',
  },
  page_title: {
    home: 'Inicio',
    wireguard: 'WireGuard',
    network: 'Red',
    wifi: 'Wi-Fi',
    rules: 'Reglas',
    routes: 'Rutas',
    devices: 'Dispositivos',
    messages: 'Mensajes',
    contacts: 'Contactos',
    calls: 'Llamadas',
    apps: 'Aplicaciones',
    files: 'Archivos',
    audios: 'Audio',
    videos: 'Videos',
    images: 'Imágenes',
    books: 'Libros',
    feeds: 'Feeds',
    notes: 'Notas',
    json_viewer: 'Visor de JSON',
    qrcode_generator: 'Generador de códigos QR',
    trash: 'Papelera',
    aichats: 'ChatGPT',
    screen_mirror: 'Espejo de pantalla',
  },
  wireguard: {},
  wifi: {
    ssid: 'Nombre',
    hide_ssid: 'Ocultar red',
  },
  manufacturer: 'Fabricante',
  mac_address: 'Dirección MAC',
  ip_address: 'Dirección IP',
  online: 'En línea',
  offline: 'Fuera de línea',
  unknown: 'Desconocido',
  created_at: 'Creado el',
  updated_at: 'Actualizado el',
  active_at: 'Activo el',
  rename: 'Renombrar',
  apply_to: 'Aplicar a',
  direction: 'Dirección',
  match: 'Coincidencia',
  inbound: 'Entrada',
  outbound: 'Salida',
  target_type: {
    ip: 'Dirección IP',
    net: 'Subred',
    dns: 'Dominio',
    remote_port: 'Puerto remoto',
    internet: 'Internet',
    iface: 'Red local',
    list: 'Lista de objetivos',
  },
  all_devices: 'Todos los dispositivos',
  network: 'Red',
  allow: 'Permitir',
  block: 'Bloquear',
  description: 'Descripción',
  notes: 'Notas',
  rule_inbound: '{action} tráfico desde {target}',
  rule_outbound: '{action} tráfico hacia {target}',
  for_example: 'por ejemplo',
  invalid_value: 'Valor no válido',
  space: ' ',
  remote_port: 'puerto remoto {port}',
  all_local_networks: 'Todas las redes locales',
  examples_ip: 'Ejemplos\n10.10.10.2\n10.10.10.2:80\n10.10.10.2:80,443–453\n[2606:4700:4700::1111]:443–453',
  examples_net:
    'Ejemplos\n10.10.10.0/24\n10.10.10.0/24:80\n10.10.10.0/24:80,443–453\n[2606:4700:4700::1111/127]:443–453',
  examples_dns: 'Ejemplos\nejemplo.com\nejemplo.com:80\nejemplo.com:80,443–453',
  examples_remote_port: 'Ejemplos\n1419\n1001–1024',
  route_description: 'Enrutamiento de tráfico a {target} a través de {if_name}',
  traffic_to: 'Tráfico hacia',
  route_via: 'Enrutado hacia',
  delete_message: 'Eliminar mensaje',
  social: 'Social',
  messages: 'Mensajes',
  contacts: 'Contactos',
  calls: 'Llamadas',
  storage: 'Almacenamiento',
  files: 'Archivos',
  music: 'Música',
  videos: 'Videos',
  images: 'Imágenes',
  audios: 'Audio',
  content: 'Contenido',
  from: 'De',
  type: 'Tipo',
  time: 'Hora',
  message_type: {
    1: 'Bandeja de entrada',
    2: 'Enviado',
    3: 'Borradores',
    4: 'Bandeja de salida',
    inbox: 'Bandeja de entrada',
    sent: 'Enviado',
    outbox: 'Bandeja de salida',
    drafts: 'Borrador',
  },
  artist: 'Artista',
  sms_address: 'Dirección',
  phone_numbers: 'Números de teléfono',
  telephone: 'Teléfono',
  custom: 'Personalizado',
  website: 'Sitio web',
  email: 'Email',
  phone_number: 'Número de teléfono',
  add_field: 'Agregar campo',
  im: 'IM',
  contact: {
    phone_number_type: {
      1: 'Casa',
      2: 'Móvil',
      3: 'Trabajo',
      4: 'Fax del trabajo',
      5: 'Fax de casa',
      6: 'Localizador',
      7: 'Otro',
      8: 'Devolver llamada',
      9: 'Coche',
      10: 'Línea principal de la empresa',
      11: 'ISDN',
      12: 'Principal',
      13: 'Otro fax',
      14: 'Radio',
      15: 'Telex',
      16: 'TTY TDD',
      17: 'Móvil del trabajo',
      18: 'Localizador del trabajo',
      19: 'Asistente',
      20: 'MMS',
    },
    email_type: {
      1: 'Casa',
      2: 'Trabajo',
      3: 'Otro',
      4: 'Móvil',
    },
    address_type: {
      1: 'Casa',
      2: 'Trabajo',
      3: 'Otro',
    },
    event_type: {
      1: 'Aniversario',
      2: 'Otro',
      3: 'Cumpleaños',
    },
    im_type: {
      0: 'AIM',
      1: 'Windows Live',
      2: 'Yahoo',
      3: 'Skype',
      4: 'QQ',
      5: 'Hangouts',
      6: 'ICQ',
      7: 'Jabber',
      8: 'NetMeeting',
    },
    website_type: {
      1: 'Página de inicio',
      2: 'Blog',
      3: 'Perfil',
      4: 'Casa',
      5: 'Trabajo',
      6: 'FTP',
      7: 'Otro',
    },
  },
  call_type: {
    1: 'Entrante',
    2: 'Saliente',
    3: 'Perdida',
    4: 'Buzón de voz',
    5: 'Rechazada',
    6: 'Bloqueada',
    incoming: 'Entrante',
    outgoing: 'Saliente',
    missed: 'Perdida',
  },
  app_type: {
    user: 'Usuario',
    system: 'Sistema',
  },
  first_name: 'Nombre',
  last_name: 'Apellido',
  middle_name: 'Segundo nombre',
  prefix: 'Prefijo',
  suffix: 'Sufijo',
  browser_warning: 'Se sugiere usar la última versión del navegador web Chrome',
  no_permission: 'Sin permiso. Por favor, ve a APP > "Web en PC" para habilitar los permisos y actualiza la página.',
  no_data: 'No hay datos.',
  loading: 'Cargando...',
  duration: 'Duración',
  started_at: 'Comenzó el',
  phone_geo: 'GEO',
  avatar: 'Avatar',
  phone_isp_type: {
    1: 'China mobile',
    2: 'China unicom',
    3: 'China telecom',
    4: 'China uicom virtual',
    5: 'China telecom virtual',
    6: 'China mobile virtual',
  },
  storage_free_total: '{free} disponibles de {total}',
  current_path: 'Ruta actual',
  create_folder: 'Crear carpeta',
  upload_files: 'Cargar archivos',
  upload_folder: 'Cargar carpeta',
  preview: 'Vista previa',
  view: 'Ver',
  upload: 'Cargar',
  download: 'Descargar',
  copy: 'Copiar',
  paste: 'Pegar',
  cut: 'Cortar',
  duplicate: 'Duplicar',
  properties: 'Propiedades',
  show_hidden: 'Mostrar ocultos',
  select_mode: 'Modo de selección',
  modified_at: 'Modificado el',
  file_size: 'Tamaño del archivo',
  path: 'Ruta',
  open: 'Abrir',
  box_is_null: 'Por favor, selecciona una caja en la aplicación e inténtalo de nuevo',
  battery_left: 'Batería {percentage}%',
  invalid_file_signature: 'Firma de archivo no válida',
  no_task: 'Ninguna tarea',
  upload_status: {
    created: 'Esperando',
    pending: 'Cargando',
    saving: 'Guardando',
    done: 'Cargado',
    error: 'Error al cargar',
  },
  load_failed: 'Error al cargar {name}',
  network_error: 'Error de red, no se puede conectar al API',
  web_access_disabled: 'El acceso a la web está deshabilitado en este momento',
  play: 'Reproducir',
  add_to_playlist: 'Añadir a lista de reproducción',
  added_to_playlist: 'Añadido a la lista de reproducción',
  select_first: 'Seleccionar primero',
  search_hint: 'Buscar...',
  keywords: 'Palabras clave',
  search: 'Buscar',
  tags: 'Etiquetas',
  add_to_tags: 'Añadir a etiquetas',
  remove_from_tags: 'Eliminar de etiquetas',
  delete_files: 'Eliminar archivos',
  clear_list: 'Limpiar lista',
  select_tags: 'Seleccionar etiquetas',
  tools: 'Herramientas',
  json_viewer: 'Visor de JSON',
  qrcode_generator: 'Generador de códigos QR',
  title: 'Título',
  restore: 'Restaurar',
  trash: 'Papelera',
  move_to_trash: 'Mover a la papelera',
  work: 'Trabajo',
  expand_all: 'Expandir todo',
  collapse_all: 'Contraer todo',
  all: 'Todos',
  manage: 'Gestionar',
  subscriptions: 'Suscripciones',
  published_at: 'Publicado el',
  source: 'Fuente',
  view_original_article: 'Ver artículo original',
  add: 'Agregar',
  add_tag: 'Agregar etiqueta',
  add_subscription: 'Agregar suscripción',
  import_opml_file: 'Importar archivo OPML',
  export_opml_file: 'Exportar archivo OPML',
  rss_url: 'URL del RSS',
  imported: 'Importado',
  update_subscription: 'Actualizar suscripción',
  sync_feeds: 'Sincronizar feeds',
  sync_content: 'Sincronizar contenido',
  feeds_synced: 'Feeds sincronizados',
  syncing: 'Sincronizando...',
  meta_no_title: '[Sin título]',
  no_content: '[Sin contenido]',
  confirm: 'Confirmar',
  upload_audios: 'Puedes cargar en la carpeta Música o en otra carpeta.',
  upload_videos: 'Puedes cargar en la carpeta Videos o en otra carpeta.',
  upload_images: 'Puedes cargar en la carpeta Imágenes o en otra carpeta.',
  no_files: 'Sin archivos',
  view_origin_image: 'Ver imagen original',
  new_chat: 'Nuevo chat',
  ai: 'IA',
  config: 'Configuración',
  api_key: 'Clave API',
  apps: 'Aplicaciones',
  version: 'Versión',
  size: 'Tamaño',
  recents: 'Recientes',
  internal_storage: 'Almacenamiento interno',
  sdcard: 'Tarjeta SD',
  recent_files: 'Archivos recientes',
  installed_at: 'Instalado el',
  screen_mirror: 'Espejo de pantalla',
  try_again: 'Intentar de nuevo',
  stop_mirror: 'Detener espejo',
  fullscreen: 'Pantalla completa',
  deleting: 'Eliminando...',
  uninstalling: 'Desinstalando...',
  uninstall: 'Desinstalar',
  install: 'Instalar',
  sending: 'Enviando…',
  usb_storage: 'Almacenamiento USB',
  folders: 'Carpetas',
  color: 'Color',
  make_a_phone_call: 'hacer una llamada telefónica',
  view_as_list: 'Ver como lista',
  view_as_grid: 'Ver como cuadrícula',
  pause: 'Pausa',
  playlist: 'Lista de reproducción',
  no_api_key: 'Sin clave API',
  refresh: 'Actualizar',
  info: 'Información',
  zoom_in: 'Acercar',
  zoom_out: 'Alejar',
  resize: 'Cambiar tamaño',
  rotate_left: 'Rotar a la izquierda',
  rotate_right: 'Rotar a la derecha',
  close: 'Cerrar',
  close_other_tabs: 'Cerrar otras pestañas',
  close_tabs_to_the_right: 'Cerrar pestañas a la derecha',
  relaunch_app: 'Reiniciar aplicación',
  all_items_on_this_page_are_selected: 'Todos los {count} elementos en esta página están seleccionados.',
  all_items_are_selected: 'Todos los {count} elementos están seleccionados.',
  select_all_items: 'Seleccionar todos los {count} elementos',
  clear_selection: 'Borrar selección',
  screen_mirror_request_permission_failed: 'No has concedido permiso a PlainApp para tomar capturas de pantalla.',
  screen_mirror_request_permission:
    'Por favor, toca "Comenzar ahora" en el teléfono. \nSi la ventana de permisos no se muestra, vuelve a abrir PlainApp. \nInténtalo de nuevo en {seconds} segundos.',
}
