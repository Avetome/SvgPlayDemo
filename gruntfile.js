module.exports = function(grunt) {
    
    grunt.initConfig({
        less: {
            development: {
                options:{
                    "strictImports": "true",
                },
                files: {
                    "content/bootstrap-site.css": "content/less/bootstrap/bootstrap.less",
                    "content/index.css": "content/less/index.less",                }
            },            
            production: {
                options: {
                    plugins: [
                    ],
                    modifyVars: {
                        "img-path": '@img-path-site',
                        "font-path": '@font-path-site',
                        "bootstrap-font-path" : "@bootstrap-font-path-site"
                    }
                },
                files: {
                    "content/bootstrap-site.css": "content/less/bootstrap/bootstrap.less",
                    "content/index.css": "content/less/index.less",                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('production', ['less:production']);
};