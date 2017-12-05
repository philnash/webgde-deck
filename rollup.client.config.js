import ifdef from './plugins/ifdef.js';

export default {
    input: 'src/public/scripts/client.js',
    output: { 
        file: 'dist/server/public/scripts/client.js',
        format: 'iife'
    },
    plugins: [
        ifdef({ifdef: 'WEB'})
    ]
};