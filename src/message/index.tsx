type FieldType = {
  username: string;
  password: string;
  role:string;
  power?:number
};

const users:FieldType[] = [
  { username: 'aa', password: '1231',role:'Admin',power:0 },
  { username: 'ab', password: '1232',role:'Admin',power:0 },
  { username: 'ac', password: '1233',role:'Admin',power:0 },
  { username: 'ad', password: '1234',role:'Admin',power:1 },
  { username: 'ae', password: '1235',role:'Admin',power:1},
  { username: 'bb', password: '1241',role:'User'},
  { username: 'bc', password: '1242',role:'User'},
  { username: 'bd', password: '1243',role:'User'},
  { username: 'be', password: '1244',role:'User'},
  { username: 'bf', password: '1245',role:'User'},
  { username: 'bg', password: '1246',role:'User'},
  { username: 'bh', password: '1247',role:'User'},
  { username: 'bj', password: '1248',role:'User'},
];

export default users;