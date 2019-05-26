import sinon from 'sinon'; 
import {getALL} from "./myapi";
import {expect} from 'chai';
/*
describe('MyAPI', function() {

    var data = [
        {"name":"rahul"},
      ];
    var server;
    beforeEach(function () {
        server = sinon.fakeServer.create();
    });
    afterEach(function () {
        server.restore();

    });
    it("fetches Circles", function () {
        server.respondWith("GET", "https://jsonplaceholder.typicode.com/posts", [
            200, {"Content-Type":"application/json"}, JSON.stringify(data)
        ])
        
       getALL().then(
            (x)=>{
                 expect(JSON.stringify(x)).to.equal(JSON.stringify(data));
            }
        )
       server.respond();
    }); 
});
*/


const successRes=[{ "name": "rahul" }];

const responseServer= () => new Promise(
    (resolve) => resolve(successRes)
); 

//Mocking the getALl Api
jest.mock('./myapi', () => {
    return{
        getALL:jest.fn()
    }
});


describe('MY API testing using the jest', () => {
    beforeEach(() => {
        getALL.mockImplementation(responseServer)
    });
    it('Test if APi is called with success',() => {
        getALL().then(
            (res)=>{
                expect(res).to.eql(successRes);
            }
        )
    })
})
