<?php

function aa_enqueue() {
    wp_register_style(
        'aa_theme',
        get_theme_file_uri('/assets/css/tailwind.css')
    );
    wp_register_style(
        'bitter',
        'https://fonts.googleapis.com/css2?family=Bitter:wght@700;900&display=swap',
        [],
        null
    );
    wp_register_style(
        'zilla',
        'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;400;700&display=swap',
        [],
        null
    );
       
    wp_enqueue_style('aa_theme');
    wp_enqueue_style('bitter');
    wp_enqueue_style('zilla');    
}

function aa_enqueue_editor_styles() {
    wp_enqueue_style('aa_theme', get_theme_file_uri('/assets/css/tailwind.css'), [], null);    
    wp_enqueue_style('bitter');
    wp_enqueue_style('zilla');
}