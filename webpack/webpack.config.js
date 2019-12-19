const modoDev = process.env.NODE_ENV !== 'production' // esto me activa el modo dev cuando usamos start y el modo produccion cuando usamos el build
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // si esta activado el modoDev sera igual a development y sino sera modo production
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', // nombre del archivo principal
        path: __dirname + '/public' // nombre de la carpeta donde se guardara
    },
    devServer:{
        contentBase: './public', // una cosa extra es que basta modificar un archivo cualquiera y salvar que automaticamente se generara el cambion en la public y se llamara el servidor //al iniciar npm start se llamara el webpack y lo que este en la carpeta public se pasara a un servidor local en la puerta 9000
        port: 9000
    },
    optimization:{
        minimizer:[
            new UglifyjsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],//el comando build me crea carpata public pero con los archivos listos para produccions
 
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}