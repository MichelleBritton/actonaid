<?php

/**
 * Enqueue Frontend Scripts (e.g., Navigation JavaScript)
 */
function aa_enqueue_navigation_script() {
    // Enqueue the navigation.js file on the frontend
    wp_enqueue_script(
        'aa-nav-script',
        plugins_url('../../src/blocks/navigation/js/navigation.js', __FILE__), 
        array(), 
        '1.0',
        true // Load in the footer
    );

    wp_enqueue_script(
        'aa-slider-script',
        plugins_url('../../src/blocks/slider/js/slider.js', __FILE__), 
        array(), 
        '1.0',
        true // Load in the footer
    );
}

/**
 * Enqueue Block Editor Assets (if needed for interactivity in the editor)
 */
function aa_enqueue_editor_scripts() {
    wp_enqueue_script(
        'aa-nav-editor-script',
        plugins_url('../../src/blocks/navigation/js/navigation.js', __FILE__), 
        array('wp-blocks', 'wp-editor', 'wp-element'),
        '1.0',
        true
    );
}