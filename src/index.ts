import {$log} from "ts-log-debug";
import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware, Inject} from "ts-express-decorators";
import Path = require("path");
import SocketService from "./services/SocketService";
import {Properties} from "ts-json-properties";

const rootDir = Path.resolve(__dirname);

@ServerSettings({
    rootDir,
    mount: {
        '/api': `${rootDir}/controllers/**/**.js`
    },
    acceptMimes: ["application/json"]
})
export class Server extends ServerLoader {

    constructor() {
        super();
        Properties.initialize(`${rootDir}/../properties.json`);
    }

    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    $onMountingMiddlewares(): void|Promise<any> {

        const morgan = require('morgan'),
            cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override');


        this
            .use(morgan('dev'))
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

        this.engine('.html', require('ejs').__express)
            .set('views', `${__dirname}/../views`)
            .set('view engine', 'html');

        return null;
    }

    @Inject()
    $onReady(socketService: SocketService) {
        $log.debug('Server initialized');
        socketService.createServer(this.httpServer);
    }

    $onServerInitError(error): any {
        $log.error('Server encounter an error =>', error);
    }
}