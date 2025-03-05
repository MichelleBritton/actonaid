<?php

function aa_enqueue() {
    wp_register_style(
        'aa_theme',
        get_theme_file_uri('/assets/css/tailwind.css')
    );
       
    wp_enqueue_style('aa_theme');
    
}