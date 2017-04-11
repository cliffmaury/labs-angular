process.env.NODE_ENV = "test";

import {Done, bootstrap, inject} from "ts-express-decorators/testing";
import {expect} from "chai";
import {$log} from "ts-log-debug";
import {Server} from "../src/index";
import {ExpressApplication} from "ts-express-decorators";

import * as SuperTest from "supertest";



describe('Rest :', () => {


    it('should do nothing', () => {

        expect(true).to.be.true;

    });

    beforeEach(() => $log.setRepporting({debug: false, info: false, error: false}));
    beforeEach(bootstrap(Server));

    describe("/api/users/authenticate", () => {

        it("should respond 400",  inject([ExpressApplication, Done], (expressApplication: ExpressApplication, done: Done) => {

            SuperTest(expressApplication)
                .post("/api/users/authenticate")
                .send({
                    password: "test"
                })
                .expect(400)
                .end(done as any);


        }));

        it("should respond 400",  inject([ExpressApplication, Done], (expressApplication: ExpressApplication, done: Done) => {

            SuperTest(expressApplication)
                .post("/api/users/authenticate")
                .send({

                })
                .expect(400)
                .end(done as any);


        }));

        it("should respond 404",  inject([ExpressApplication, Done], (expressApplication: ExpressApplication, done: Done) => {

            SuperTest(expressApplication)
                .post("/api/users/authenticate")
                .send({
                    email: "t@t.fr",
                    password: "test"
                })
                .expect(404)
                .end(done as any);


        }));


        it("should respond 401",  inject([ExpressApplication, Done], (expressApplication: ExpressApplication, done: Done) => {

            SuperTest(expressApplication)
                .post("/api/users/authenticate")
                .send({
                    email: "johnniebenson@cytrex.com",
                    password: "test"
                })
                .expect(401)
                .end(done as any);


        }));

        it("should respond 200",  inject([ExpressApplication, Done], (expressApplication: ExpressApplication, done: Done) => {

            SuperTest(expressApplication)
                .post("/api/users/authenticate")
                .send({
                    email: "johnniebenson@cytrex.com",
                    password: "12345"
                })
                .expect(200)
                .end((err, response) => {

                    if (err) {
                        throw(err);
                    }

                    let obj = JSON.parse(response.text);

                    expect(obj).to.be.an('object');
                    expect(obj._id).to.be.equals('58ebddf642dc90b2031faa36');
                    expect(obj.firstName).to.be.equals('Johnnie');
                    expect(obj.email).to.be.equals('johnniebenson@cytrex.com');
                    expect(obj.password).to.be.equals('12345');

                    done();

                });

        }));

    });
});