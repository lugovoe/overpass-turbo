webpackJsonp([4],{314:function(e,t){e.exports={"nav.run":"Старт","nav.run_tt":"виконати цей запит в Overpass API","nav.share":"Поділитися","nav.share_tt":"отримати постійне посилання на цей запит","nav.export":"Експорт","nav.export_tt":"різні інструменти експорту","nav.save":"Зберегти","nav.save_tt":"зберегти запит","nav.load":"Завантажити","nav.load_tt":"відкрити збережений запит або приклад","nav.wizard":"Помічник","nav.wizard_tt":"конструктор запитів","nav.settings":"Налаштування","nav.settings_tt":"різноманітні налаштовування","nav.help":"Довідка","nav.help_tt":"довідка, автори і про програму","nav.logout":"Logout","nav.logout_tt":"logout from currently synced osm account","tabs.map":"Мапа","tabs.map_tt":"вид мапи","tabs.data":"Дані","tabs.data_tt":"дані","map_controlls.zoom_to_data":"перейти до даних","map_controlls.localize_user":"знайди мене!","map_controlls.localize_user_disabled":"disabled because overpass turbo has not been loaded via https://","map_controlls.select_bbox":"вибрати прямокутник вручну","map_controlls.select_bbox_disabled":"відключено, оскільки поточний запит не вимагає BBOX","map_controlls.toggle_wide_map":"мапа на всю ширину","map_controlls.toggle_data":"перемкнути показ даних","map_controlls.suggest_zoom_to_data":"натисніть сюди для перегляду даних","settings.title":"Налаштування","settings.section.general":"Загальні налаштування","settings.ui_lang":"Мова інтерфейсу","settings.server":"Сервер","settings.disable_autorepair":"Вимкнути повідомлення про помилку та авторемонт, коли Overpass API не повернув відображуваних даних.","settings.section.editor":"Редактор","settings.enable_rich_editor":"Увімкнути розвинений редактор коду","settings.enable_rich_editor_expl":"відімкнути на мобільних пристроях;  вимагає перезавантаження сторінки","settings.editor_width":"Ширина вікна редактора","settings.editor_width_expl":"наприклад, „400px“, або нічого для значень за умовчанням","settings.section.map":"Мапа","settings.tile_server":" Сервер тайлів ","settings.tile_opacity":"Прозорість тайлів","settings.tile_opacity_expl":"transparency of background tiles: 0=transparent … 1=visible","settings.show_crosshairs":"Показати перехрещення в центрі мапи.","settings.disable_poiomatic":"Не відображати дрібні об’єкти як цікаві точки.","settings.show_data_stats":"Показати статистику по завантажених та відображуваних даних.","settings.section.sharing":"Посилання","settings.include_map_state":"Включити стан мапи в посилання","settings.compression":"Стиснення","settings.section.export":"Експорт","settings.export_image_scale":"Смуга масштабу на експортованих зображеннях.","settings.export_image_attr":"Зазначення авторства на експортованих зображеннях.","save.title":"Зберегти","save.enter_name":"Введіть назву для цього запиту","load.title":"Завантажити","load.delete_query":"вилучити цей запит","load.saved_queries-local":"Saved Queries (local)","load.saved_queries-osm":"Saved Queries (osm.org)","load.saved_queries-osm-loading":"Loading saved queries from osm.org...","load.saved_queries-osm-error":"An error occured while loading saved queries from osm.org :(","load.examples":"Приклади","load.no_saved_query":"немає збережених запитів","export.title":"Експорт","export.download-error":"Export - Error","export.copy_to_clipboard":"Copy this text to clipbard","export.copy_to_clipboard_success":"Export - Successfully copied to clipboard","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> was successfully copied to the clipboard.',"export.section.map":"Мапа","export.as_png":' як <a id="export-image" href="">png-зображення</a> ',"export.as_interactive_map":' як <a id="export-interactive-map" href="">інтерактивну мапу</a> ',"export.current_map_view":' поточний <a id="export-map-state" href="">вид мапи</a> ',"export.map_view_expl":"область, центр і т.п.","export.section.data":"Дані","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">download</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">copy</a></span></div>',"export.raw_data":"raw OSM data","export.raw_interpreter":'сирі дані від <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a> ',"export.save_geoJSON_gist":' зберегти GeoJSON у <a id="export-geoJSON-gist" href="" class="external">gist</a> ',"export.section.query":"Запит","export.format_text":'<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn\'t include additional overpass turbo features such as MapCSS.">standalone query</abbr>',"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">raw query</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">osm wiki</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":' перетворити у <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a> ',"export.to_ql":' перетворити у (<a id="export-convert-compact" href="" target="_blank" class="external">компактний</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a> ',"export.editors":"завантажити дані в OSM-редактор: ","export.geoJSON.title":" Экспорт — GeoJSON ","export.geoJSON.expl":"Відображені дані у форматі GeoJSON: ","export.geoJSON.no_data":"Немає даних GeoJSON!  Спочатку запустіть запит.","export.geoJSON_gist.title":"Збережено в gist","export.geoJSON_gist.gist":"Gist: ","export.geoJSON_gist.geojsonio":"Редагувати в geojson.io: ","export.geoJSON_gist.geojsonio_link":" geojson.io ","export.GPX.title":"Експорт — GPX","export.GPX.expl":"Відображені дані у форматі GPX: ","export.GPX.no_data":"Немає GPX-даних!  Спочатку запустіть запит.","export.KML.title":"Експорт — KML","export.KML.expl":"Відображувані дані у форматі KML:","export.KML.no_data":"Немає даних KML!  Спочатку запустіть запит.","export.raw.title":"Експорт — сирі дані","export.raw.no_data":"Немає сирих даних — спочатку надішліть запит.","export.map_view.title":"Поточний вид мапи","export.map_view.permalink":"Посилання","export.map_view.permalink_osm":"на osm.org","export.map_view.center":"Центр","export.map_view.center_expl":"широта, довгота","export.map_view.bounds":"Межі","export.map_view.bounds_selection":"Межі (вибрати область вручну)","export.map_view.bounds_expl":"південь, захід, північ, схід","export.map_view.zoom":"Масштаб","export.image.title":"Експорт — зображення","export.image.alt":"вивантажена мапа","export.image.download":"Звантажити","export.image.attribution_missing":"Обов’язково вкажіть авторство тайлів й даних при поширенні цього зображення!","share.title":"Поділитися","share.header":"Посилання","share.copy_this_link":' Скопіюйте <a href="" id="share_link_a">це посилання</a>, щоб поділитися кодом: ',"share.options":"Параметри","share.incl_map_state":"включити стан відображуваної мапи","share.run_immediately":"запустити запит відразу після завантаження","help.title":"Довідка","help.section.introduction":"Вступ","help.intro.0":'Це <i>overpass turbo</i> — веб-інструмент фільтрації даних для <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'З overpass turbo Ви можете виконувати запити <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> та аналізувати результати з OSM на інтерактивній мапі.',"help.intro.1b":'Доступний інтегрований <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">помічник</a>, що значно полегшує створення запитів.',"help.intro.2":'Більш детальну інформацію про <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> та про написання <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass-запитів</a> можна знайти в OSM-вікі.',"help.section.queries":"Запити Overpass","help.queries.expl":'Overpass API дозволяє запитувати дані з OSM за Вашими власними пошуковими критеріями.  Для цих цілей створено особливу <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">мову запитів</a>.',"help.intro.shortcuts":"На додаток до звичайних запитів Overpass API можна використовувати такі зручні скорочення у overpass turbo: ","help.intro.shortcuts.bbox":"значення меж відображається області мапи","help.intro.shortcuts.center":"координати центру мапи","help.intro.shortcuts.date":"рядок дати і часу у ISO 8601, що відповідає проминулому часовому проміжку (наприклад, „24 години“)","help.intro.shortcuts.style":'визначає <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS-стилі</a>\n',"help.intro.shortcuts.custom":" Довільні скорочення можна визначити, помістивши  <i>{{shortcut=value}}</i> де небудь у тексті скрипта.","help.intro.shortcuts.more":'Додаткові клавіатурні скорочення OverPass-Turbo, інші подробиці про зазначене вище та приклади використання можна знайти на <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM вікі</a>.',"help.section.ide":"IDE","help.ide.share.title":"Поділитися","help.ide.share.expl":" Можна надіслати посилання на Ваш запит кому-небудь ще.  У меню <i>Поділитися</i> Ви знайдете посилання, яке можна надіслати другу або опублікувати в мережі.  Зауважимо, що інші будуть працювати над власними копіями запиту.","help.ide.save_load.title":"Збереження і завантаження","help.ide.save_load.expl":"Ви можете зберігати і завантажувати запити.  Для початку, ми завантажили кілька демонстраційних запитів.  Перегляньте їх, щоб зрозуміти можливості overpass.","help.ide.keyboard.title":"Клавіатурні скорочення: ","help.ide.keyboard.run":"Надіслати введений запит.","help.ide.keyboard.wizard":"Запуск майстра запитів.","help.ide.keyboard.load_save":"Завантажити (відкрити) або зберегти запит","help.ide.keyboard.help":"Відкрити вікно допомоги.","help.section.key":"Легенда","help.key.example":"різні об’єкти мапи","help.key.description":"Лінії (ways) показуються жирними синіми лініями, полігони — жовтими областями з тонкою синьою облямівкою, цікаві точки (точки з теґами, POI) — жовтими колами з синьою облямівкою. Червоні круги позначають полігони або лінії, занадто малі для нормального відображення. Рожеві лінії або контури позначають об’єкти-члени завантажених зв’язків. Пунктирні лінії свідчать про неповну геометрію: швидше за все, були завантажені не всі точки об’єкта.","help.section.export":"Експорт","help.export":' Інструменти <i>експорту</i> містять безліч варіантів того, що можна зробити із запитом чи отриманими за ним даними.<br />Пункти, позначені символом <span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span>, відкривають зовнішні онлайн-інструменти.',"help.export.query_data.title":"Запит / дані","help.export.query_data.expl":"Тут перераховані варіанти того, що можна зробити із запитом або отриманими даними, наприклад, перетворення між мовами запиту, або експорт даних в GeoJSON.  Дуже корисна можливість відправити результат запиту в JOSM.","help.export.map.title":"Мапа","help.export.map.expl":"Перетворити поточний вид мапи з даними в растрове зображення, (повноекранну) інтерактивну мапу або що-небудь ще.","help.section.about":"Про застосунок","help.about.maintained":" <i>overpass turbo</i> підтримується Мартіном Райфером (tyr.asd на gmail.com). ","help.about.feedback.title":"Зворотній зв’язок, помилки, побажання","help.about.feedback":'Якщо Ви хотіли б висловити свою думку, повідомити про проблеми чи запросити додаткову функціональність, будь ласка, використовуйте <a href="https://github.com/tyrasd/overpass-turbo/issues">трекер питань</a> на GitHub або <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">сторінку обговорення</a> на OSM-Вікі.',"help.about.source.title":"Джерельний код","help.about.source":'<a href="https://github.com/tyrasd/overpass-turbo">Джерельні тексти</a> цього застосунку випущені під <a href="LICENSE">ліцензією</a> MIT.',"help.section.attribution":"Авторство","help.attr.data_sources":"Джерела даних","help.attr.data":' Дані &copy; учасники <a href="http://openstreetmap.org/">OpenStreetMap</a>, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">умови</a>)</span> ',"help.attr.mining":"Обробка даних","help.attr.tiles":' Тайли мапи &copy; учасники <a href="http://openstreetmap.org/">OpenStreetMap</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/" style="font-size:smaller;">CC-BY-SA</a> ',"help.attr.search":"Пошук забезпечується","help.attr.software":"Програми та бібліотеки","help.attr.leaflet":"Мапа надана ","help.attr.codemirror":"Редактор працює на ","help.attr.other_libs":"Інші бібліотеки: ","ffs.title":"Помічник по складанню запитів","ffs.placeholder":"пошук","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">Помічник</a> допоможе Вам створювати Overpass-запити. Ось кілька прикладів: ',"ffs.parse_error":"На жаль цей запиту не розпізнаний.","ffs.parse_error_expl":' Зверніть увагу, що Ви повинні використовувати лапки для рядків, в яких є пробіли або спеціальні символи, а множинні пошукові фільтри повинні бути розділені правильними операторами (<i>and</i> або <i>or</i>). Зверніться до <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">документації</a> за більш детальною інформацією.',"ffs.typo":"Можливо, Ви мали на увазі:","dialog.dismiss":"закрити","dialog.cancel":"скасувати","dialog.save":"зберегти","dialog.save-local":"save (local)","dialog.save-osm":"save on osm.org","dialog.delete":"вилучити","dialog.close":"закрити","dialog.done":"готово","dialog.abort":"перервати","dialog.repair_query":"полагодити запит","dialog.continue_anyway":"продовжити тим не менше","dialog.show_data":"показати дані","dialog.wizard_build":"Скласти запит","dialog.wizard_run":"Скласти і запустити запит","dialog.delete_query.title":"Вилучити запит?","dialog.delete_query.expl":"Дійсно вилучити цей запит","dialog.delete_query.expl-osm":"Do you really want to delete the following synchronized query","error.query.title":"Помилка запиту","error.query.expl":"При виконанні overpass-запиту сталася помилка!  Ось що повернув Overpass API: ","error.ajax.title":"Помилка Аякс","error.ajax.expl":"При виконанні overpass-запиту сталася помилка!","error.mapcss.title":"Помилка MapCSS","error.mapcss.expl":"Некоректний стиль MapCSS: ","error.remote.title":"Помилка дистанційного керування","error.remote.incompat":"Помилка: непідтримувана версія сервісу дистанційного керування JOSM","error.remote.not_found":"Сервіс дистанційного керування не знайдено.  Переконайтеся, що JOSM запущений та налаштований як треба.","error.nominatim.title":"Помилка в Nominatim","error.nominatim.expl":"Не знайдено нічого з даним ім’ям:","warning.browser.title":"Ваш браузер не підтримується :(","warning.browser.expl.1":' Ваш браузер, швидше за все, не зможе запустити важливі елементи цього застосунка.  <small>Він повинен підтримувати <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> та <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small> ',"warning.browser.expl.2":"Зверніть увагу, що Вам може знадобитися увімкнути „куки“ та/або „локальні дані“ у деяких браузерах (наприклад, в Firefox та Chrome).","warning.browser.expl.3":' Будь ласка, поновіть Ваш браузер до більш свіжої версії, або встановіть інший.  Сайт перевірений на останніх версіях <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/uk/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/uk/firefox/">Firefox</a>. Крім того, Ви можете скористатися <a href="http://overpass-api.de/query_form.html">формою запиту до Overpass_API</a>. ',"warning.incomplete.title":"Неповні дані","warning.incomplete.expl.1":"Цей запит не повернув точок.  У OSM лише лише точки містять координати.  Наприклад, без інформації про точки лінію не можна намалювати на мапі.","warning.incomplete.expl.2":"Якщо це не те, що Ви хотіли отримати, <i>OverPass-Turbo</i> може допомогти полагодити запит (через автодоповнення), вибравши для цього нижче „полагодити запит“. В іншому випадку Ви можете перейти до даних.","warning.incomplete.not_again":"більше не показувати це повідомлення.","warning.incomplete.remote.expl.1":"Схоже, цей запит не повертатиме дані OSM у форматі XML з метаданими.  Редактори на кшталт JOSM вимагають даних саме в такому форматі.","warning.incomplete.remote.expl.2":" <i>overpass turbo</i> може допомогти в лагодженні запиту — натисніть „полагодити запит“ внизу. ","warning.share.long":"Увага: ця посилання дуже довге.  Воно може не спрацювати в деяких браузерах.","warning.share.very_long":"Увага: це посилання дуже довге, і з великою ймовірністю не спрацює в звичайних умовах (через браузери чи сервери).  Використовуйте обережно!","warning.huge_data.title":"Великі обсяги даних","warning.huge_data.expl.1":" Цей запит повернув дуже багато даних (близько {{amount_txt}}). ","warning.huge_data.expl.2":"Вашому браузеру доведеться напружитися, щоб все відобразити.  Дійсно продовжити?","waiter.processing_query":"обробляю запит…","waiter.export_as_image":"зберігаю в зображення…","data_stats.loaded":"Завантажено","data_stats.displayed":"Відображено","data_stats.nodes":"точки","data_stats.ways":"лінії","data_stats.relations":"зв’язки","data_stats.areas":"області","data_stats.pois":"цікаві точки","data_stats.lines":"лінії","data_stats.polygons":"полігони","data_stats.lag":"Актуальність даних","data_stats.lag_areas":"Актуальність площ","data_stats.lag.expl":"пізніше від основної бази OSM","map.intentionally_blank":"Мапа в результаті не містить даних."}}});