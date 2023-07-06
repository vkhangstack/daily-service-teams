import { Col, Layout, Row, Space, Table } from 'antd';
import type { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/es/table/interface';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { FunctionComponent, useEffect, useState } from 'react';
import qs from 'qs';
import AlertComponent from '../alert';
import { request } from '@/services/http.service';
interface DailyServiceProps {
  handleTableChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType>
    // extra: TableCurrentDataSource<RecordType>
  ) => void;
}

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

interface TableResponse {
  results?: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const DailyService: FunctionComponent<DailyServiceProps> = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = async () => {
    setLoading(true);
    const { data } = await request<TableResponse>(
      'get',
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`
    );

    setData(data?.results);
    setLoading(false);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: 200,
        // 200 is mock data, you should read it from server
        // total: data.totalCount,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (
    pagination?: TablePaginationConfig,
    filters?: Record<string, FilterValue>,
    sorter?: SorterResult<DataType>
  ) => {
    console.log('first');
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination?.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[48, 48]}>
      <Layout>
        <Layout.Header
          style={{
            backgroundColor: 'blanchedalmond',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <AlertComponent />
        </Layout.Header>
      </Layout>
      <Row gutter={{ lg: 60, md: 24, xl: 60, sm: 24, xs: 24, xxl: 80 }}>
        <Col sm={24} xl={12} xxl={12} md={24} xs={24} lg={12} span={12} style={{ maxHeight: 200 }}>
          <Table
            size='middle'
            columns={columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            bordered={true}
            onChange={(a: any, b: any, c: any) => handleTableChange(a, b, c)}
          />
        </Col>
        <Col sm={24} xl={12} xxl={12} md={24} xs={24} lg={12} span={12}>
          Hehe
        </Col>
      </Row>
    </Space>
  );
};

export default DailyService;
