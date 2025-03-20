<?php

function aa_register_blocks() {
    $blocks = [
        [ 'name' => 'navigation', 'options' => [
            'render_callback' => 'aa_nav_render_cb'
        ]],
        [ 'name' => 'slider' ],
    ];

    foreach($blocks as $block) {
        register_block_type(
            AA_PLUGIN_DIR . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        );
    }
}