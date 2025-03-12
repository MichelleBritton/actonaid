<?php
// Tailwind Navigation Walker Class
class Tailwind_Nav_Menu_Walker extends Walker_Nav_Menu {
    private $is_mobile;

    public function __construct($is_mobile = false) {
        $this->is_mobile = $is_mobile;
    }

    /**
     * Start Level (for <ul> - Submenus)
     */
    function start_lvl(&$output, $depth = 0, $args = null) {
        // Define sub-menu classes based on mobile/desktop
        $classes = $this->is_mobile
            ? 'max-h-0 opacity-0 transition-all duration-700 group-open:max-h-80 group-open:opacity-100'
            : 'absolute left-0 top-full max-h-0 whitespace-nowrap rounded-b-lg bg-black/70 opacity-0 transition-all duration-700 group-open:block group-open:max-h-80 group-open:opacity-100';

        $output .= '<ul class="' . esc_attr($classes) . '">';
    }

    /**
     * Start Element (for <li>)
     */
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $item_id = '';
    
        // Check if item has children (dropdown)
        if (in_array('menu-item-has-children', $classes)) {
            // Add `group` so Tailwind `group-open` can work
            $classes = array_diff($classes, ['mobile-menu-item', 'desktop-menu-item']);
            $classes[] = $this->is_mobile ? 'mobile-menu-item group h-full text-center' : 'desktop-menu-item group';
            $item_id = $this->is_mobile ? 'id="dd-menu-item"' : 'id="dd-menu-item-dt"';
        } else {
            $classes[] = $this->is_mobile ? 'mobile-menu-item flex h-full items-center justify-center' : 'desktop-menu-item';
        }
    
        // Convert classes to a string
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
    
        $output .= '<li ' . $item_id . $class_names . '>';
        
        // Update `<a>` to prevent default behavior for dropdowns
        if (in_array('menu-item-has-children', $classes)) {
            $output .= '<a href="#" class="dropdown-toggle">';
        } else {
            $output .= '<a href="' . esc_url($item->url) . '">';
        }
    
        $output .= esc_html($item->title);
    
        // Add dropdown indicator arrow
        if (in_array('menu-item-has-children', $classes)) {
            $output .= ' <i class="fa-solid fa-caret-right ml-1 h-4 w-4 origin-center text-sm transition-transform duration-700 group-open:rotate-90"></i>';
        }
    
        $output .= '</a>';
    }

    /**
     * End Level (Closes <ul>)
     */
    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</ul>';
    }

    /**
     * End Item (Closes <li>)
     */
    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }
}

// Render Callback Function
function aa_nav_render_cb($atts) {
   
    ob_start(); // Start output buffering
    ?>
     <nav class="fixed top-0 z-10 flex h-14 w-full bg-black/70">
        <!-- Mobile Nav -->
        <div class="my-auto ml-auto block cursor-pointer p-4 md:hidden">
            <button id="mobile-menu-button" class="group peer">
                <div class="relative top-0 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:top-2 group-open:rotate-45"></div>
                <div class="mt-1 h-1 w-8 rounded-full bg-zinc-200 opacity-100 transition-all group-open:opacity-0"></div>
                <div class="relative top-0 mt-1 h-1 w-8 rounded-full bg-zinc-200 transition-all group-open:-top-2 group-open:-rotate-45"></div>
            </button>            
            <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'walker' => new Tailwind_Nav_Menu_Walker(true), 
                    'items_wrap' => '<ul class="absolute left-0 top-[56px] w-full bg-gradient-to-b from-black/70 to-red/90 opacity-0 transition-opacity duration-700 peer-open:opacity-100">%3$s</ul>',
                ));
            ?>           
        </div>

        <!-- Desktop Nav -->        
            <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'walker' => new Tailwind_Nav_Menu_Walker(false), 
                    'items_wrap' => '<ul class="hidden w-full justify-end md:flex">%3$s</ul>',
                ));
            ?>       
    </nav>
    <?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
