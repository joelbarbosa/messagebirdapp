import fetch from 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from 'actions/actions_message';
import * as types from 'actions/type_actions';
import * as urls from 'apis/application_api_urls';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  nock.cleanAll();
});

describe('message actions', () => {
  

  it('should be nock POST SEND_MESSAGE', () => {
    nock(urls.URLS_DEFAULT.WS_URL)
    .post(urls.MESSAGE_API.SEND_MESSAGE)
    .reply(200);  
  });

  it('should be create action sendMessage', () => {
    const store = mockStore({});
    const message = {
        "message": {
          "originator": "5585988127241",
          "recipients": [
            "5585988127241"
          ],
          "body": "This is a test message Joel 5585988127241."
        }
    };
    return store.dispatch(actions.sendMessage(message))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.SENT);
      });
  });

});
