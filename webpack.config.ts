import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import getFilesFromDir from "./config/files";
const PAGE_DIR = path.join("src", "pages", path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map(filePath => {
    const fileName = filePath.replace(PAGE_DIR, "");
    return new HtmlWebPackPlugin({
        chunks: [fileName.replace(path.extname(fileName), ""), "vendor"],
        template: filePath,
        filename: fileName
    })
});

const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce((obj, filePath) => {
    const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
    obj[entryChunkName] = `./${filePath}`;
    return obj;
}, {});

module.exports = {
    entry: entry,
    plugins: [
        ...htmlPlugins
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
            components: path.resolve(__dirname, "src", "components")
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                }
            },
        },
        { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
    ]},
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    }
};