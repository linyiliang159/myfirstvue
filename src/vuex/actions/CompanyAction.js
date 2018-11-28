import {httpGet} from '../../common/HttpBean'

export function queryCompanyList(vm) {
  function callback(data) {
    if (data.code == '0') {
      vm.total=data.count;
      vm.tableData = data.data;
    }
    else {
      alert(data.ResultMsg);
    }
  };
  httpGet('/api/Company/GetWithPaging?page=' + vm.page + '&limit=' + vm.limit, callback);
};
