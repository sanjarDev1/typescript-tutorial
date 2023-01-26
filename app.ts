enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
}

const res = {
  message: 'Sucsessfuly',
  statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode){

}

action(StatusCode.SUCCESS);
action(1); 
action(3);

function compute(){
    return 3
}

enum Roles {
    ADMIN = 1,
    USER = compute()
}

// function test(x:{ADMIN:number}){

// }

// test(Roles)

