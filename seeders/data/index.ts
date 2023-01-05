import develop, { files as developFiles } from './develop';
import test from './test';
import uat from './uat';

export const files = {
  develop: developFiles,
  test: developFiles,
  uat: developFiles,
};

export default {
  develop,
  test,
  uat,
};
