// USE WORDWRAP AND MAXIMIZE THE WINDOW TO SEE THIS FILE
c_styles = {};
c_menus = {}; // do not remove this line

// You can remove most comments from this file to reduce the size if you like.




/******************************************************
  (1) GLOBAL SETTINGS
*******************************************************/

c_hideTimeout = 30; // 1000==1 second
c_subShowTimeout = 30;
c_keepHighlighted = true;
c_findCURRENT = false; // find the item linking to the current page and apply it the CURRENT style class
c_findCURRENTTree = true;
c_overlapControlsInIE = true;
c_rightToLeft = false; // if the menu text should have "rtl" direction (e.g. Hebrew, Arabic)




/******************************************************
  (2) MENU STYLES (CSS CLASSES)
*******************************************************/

// You can define different style classes here and then assign them globally to the menu tree(s)
// in section 3 below or set them to any UL element from your menu tree(s) in the page source


c_imagesPath = "template/images"; // path to the directory containing the menu images


c_styles['MM'] = [ // MainMenu (the shorter the class name the better)
  [
    // MENU BOX STYLE
    0, // BorderWidth
    'none', // BorderStyle (CSS valid values except 'none')
    '', // BorderColor ('color')
    1, // Padding
    '', // Background ('color','transparent','[image_source]')
    '', // IEfilter (only transition filters work well - not static filters)
    '' // Custom additional CSS for the menu box (valid CSS) background:url("template/images/botton_bg.jpg") top left repeat-x;height:44px;
  ],
  [
    // MENU ITEMS STYLE
    0, // BorderWidth
    'solid', // BorderStyle (CSS valid values except 'none')
    'none', // OVER BorderStyle
    '', // BorderColor ('color')
    '', // OVER BorderColor
    0, // Padding
    '', // Background ('color','transparent','[image_source]')
    '', // OVER Background
    '#ffffff', // Color
    '#A4E438', // OVER Color
    '14px', // FontSize (values in CSS valid units - %,em,ex,px,pt)
    'arial,helvetica,sans-serif', // FontFamily
    'normal', // FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
    'none', // TextDecoration (CSS valid values - 'none','underline','overline','line-through')
    'none', // OVER TextDecoration
    'center', // TextAlign ('left','center','right','justify')
    0, // ItemsSeparatorSize
    'solid', // ItemsSeparatorStyle (border-style valid values)
    '#5B6AB7', // ItemsSeparatorColor ('color','transparent')
    0, // ItemsSeparatorSpacing
    false, // UseSubMenuImage (true,false)
    '', // SubMenuImageSource ('[image_source]')
    '', // OverSubMenuImageSource
    0, // SubMenuImageWidth
    0, // SubMenuImageHeight
    '0', // SubMenuImageVAlign ('pixels from item top','middle')
    'none', // VISITED BorderStyle
    '', // VISITED BorderColor
    '', // VISITED Background
    '', // VISITED Color
    'none', // VISITED TextDecoration
    '', // VISITED SubMenuImageSource
    'solid', // CURRENT BorderStyle
    '', // CURRENT BorderColor
    '', // CURRENT Background
    '', // CURRENT Color
    'none', // CURRENT TextDecoration
    '', // CURRENT SubMenuImageSource
    '', // Custom additional CSS for the items (valid CSS)
    '', // OVER Custom additional CSS for the items (valid CSS)background:url(template/images/top_menu_bg_over.gif) top left repeat-x;
    '', // CURRENT Custom additional CSS for the items (valid CSS)
    '' // VISITED Custom additional CSS for the items (valid CSS)
  ]
];


c_styles['SM'] = [ // SubMenus
  [
    // MENU BOX STYLE
    1, // BorderWidth
    'solid', // BorderStyle (CSS valid values except 'none')
    '#414894', // BorderColor ('color')
    0, // Padding
    '#3C3D7B', // Background for border('color','transparent','[image_source]')
    '', // IEfilter (only transition filters work well - not static filters)
    '' // Custom additional CSS for the menu box (valid CSS)
  ],
  [
    // MENU ITEMS STYLE
    0, // BorderWidth
    'solid', // BorderStyle (CSS valid values except 'none')
    'solid', // OVER BorderStyle
    '#00000', // BorderColor ('color')
    'red', // OVER BorderColor
    0, // Padding
    '#3C3D7B', // Background ('color','transparent','[image_source]')
    '#83BB26', // OVER Background #BAB798
    '#FFFFFF', // Color
    '#ffffff', // OVER Color
    '14px', // FontSize (values in CSS valid units - %,em,ex,px,pt)
    'arial,helvetica,sans-serif', // FontFamily
    'normal', // FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
    'none', // TextDecoration (CSS valid values - 'none','underline','overline','line-through')
    'none', // OVER TextDecoration
    'right', // TextAlign ('left','center','right','justify')
    1, // ItemsSeparatorSize
    'solid', // ItemsSeparatorStyle (border-style valid values)
    '#1A1B64', // ItemsSeparatorColor ('color','transparent')
    0, // ItemsSeparatorSpacing
    false, // UseSubMenuImage (true,false)
    '', // SubMenuImageSource ('[image_source]')
    '', // OverSubMenuImageSource
    7, // SubMenuImageWidth
    7, // SubMenuImageHeight
    '7', // SubMenuImageVAlign ('pixels from item top','middle')
    'solid', // VISITED BorderStyle
    '', // VISITED BorderColor
    '#3D3D7B', // VISITED Background
    '#ffffff', // VISITED Color
    'none', // VISITED TextDecoration
    '0', // VISITED SubMenuImageSource
    'solid', // CURRENT BorderStyle
    '#1A1B64', // CURRENT BorderColor
    '#ffffff', // CURRENT Background
    '#ffffff', // CURRENT Color
    'none', // CURRENT TextDecoration
    '', // CURRENT SubMenuImageSource [v_arrow.gif]
    'padding-top:10px;padding-bottom:10px;padding-right:10px;', // Custom additional CSS for the items (valid CSS)
    '', // OVER Custom additional CSS for the items (valid CSS)
    '', // CURRENT Custom additional CSS for the items (valid CSS)
    '' // VISITED Custom additional CSS for the items (valid CSS)
  ]
];




/******************************************************
  (3) MENU TREE FEATURES
*******************************************************/

// Normally you would probably have just one menu tree (i.e. one main menu with sub menus).
// But you are actually not limited to just one and you can have as many menu trees as you like.
// Just copy/paste a config block below and configure it for another UL element if you like.


c_menus['Menu1'] = [ // the UL element with id="Menu1"
  [
    // MAIN-MENU FEATURES
    'horizontal', // ItemsArrangement ('vertical','horizontal')
    'relative', // Position ('relative','absolute','fixed')
    '0px', // X Position (values in CSS valid units- px,em,ex)
    '0px', // Y Position (values in CSS valid units- px,em,ex)
    false, // RightToLeft display of the sub menus
    false, // BottomToTop display of the sub menus
    0, // X SubMenuOffset (pixels)
    0, // Y SubMenuOffset
    '10em', // Width (values in CSS valid units - px,em,ex) (matters for main menu with 'vertical' ItemsArrangement only)
    'MM', // CSS Class (one of the defined in section 2)
    false // Open sub-menus onclick (default is onmouseover)
  ],
  [
    // SUB-MENUS FEATURES
    0, // X SubMenuOffset (pixels)
    0, // Y SubMenuOffset
    'auto', // Width ('auto',values in CSS valid units - px,em,ex)
    '182', // MinWidth ('pixels') (matters/useful if Width is set 'auto')
    '300', // MaxWidth ('pixels') (matters/useful if Width is set 'auto')
    'SM', // CSS Class (one of the defined in section 2)
    false // Open sub-menus onclick (default is onmouseover)
  ]
];
