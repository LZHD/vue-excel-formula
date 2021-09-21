<template>
  <div id="app">
    <EmployeesDataProvider>
      <div slot-scope="{ data, totals, setWithCalculationsFlag }">
        <TableActions :setWithCalculationsFlag="setWithCalculationsFlag" />
        <Table :data="data" :totals="totals" />
      </div>
    </EmployeesDataProvider>
  </div>
</template>

<script>
import 'milligram';
import EmployeesDataProvider from './employees';
import Table from '@/components/Table';
import TableActions from '@/components/TableActions';

export default {
  name: 'App',
  components: {
    EmployeesDataProvider,
    TableActions,
    Table,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  counter-reset: row-counter;
}
</style>
