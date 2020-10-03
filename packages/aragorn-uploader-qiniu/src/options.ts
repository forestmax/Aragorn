import { UploaderOptions, UploaderOptionsSpan } from 'aragorn-types';

export const options: UploaderOptions = [
  {
    label: 'AccessKey',
    name: 'accessKey',
    value: '',
    valueType: 'input',
    span: UploaderOptionsSpan.large,
    required: true
  },
  {
    label: 'SecretKey',
    name: 'secretKey',
    value: '',
    valueType: 'input',
    span: UploaderOptionsSpan.large,
    required: true
  },
  {
    label: 'Zone',
    name: 'zone',
    value: 'Zone_z0',
    valueType: 'select',
    span: UploaderOptionsSpan.small,
    options: [
      {
        label: '华东',
        value: 'Zone_z0'
      },
      {
        label: '华北',
        value: 'Zone_z1'
      },
      {
        label: '华南',
        value: 'Zone_z2'
      },
      {
        label: '北美',
        value: 'Zone_na0'
      },
      {
        label: '东南亚',
        value: 'Zone_as0'
      }
    ],
    required: true
  },
  {
    label: 'Bucket',
    name: 'bucket',
    value: '',
    valueType: 'input',
    required: true
  },
  {
    label: '域名',
    name: 'domain',
    value: '',
    valueType: 'input',
    required: true,
    validationRule: ['domain']
  },
  {
    label: '存放路径',
    name: 'path',
    value: '',
    valueType: 'input',
    desc: '支持路径嵌套，比如 test/img ',
    validationRule: ['domainPath']
  }
];
