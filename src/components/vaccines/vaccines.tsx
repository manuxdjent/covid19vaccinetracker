import React, { createRef, useEffect, useState } from "react";
import {
  useGetPhases,
  useGetVaccineCandidates,
} from "../../api/hooks/use-queries";
import { Table, Button, Modal, Row, Col, Tag, Input, Space } from "antd";
import { mergeWith, uniqueId } from "lodash";
import ParseEntities from "parse-entities";
import Title from "antd/lib/typography/Title";
import {
  Filter,
  Phase,
  Vaccine,
  VaccineDetailsModal,
} from "../../models/common.model";
import "./vaccines.css";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

interface VaccinesComponentProps {
  filter?: Filter;
}

function VaccineCandidates({ filter }: VaccinesComponentProps) {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const [internalFilter, setInternalFilter] = useState<Filter>();

  useEffect(() => {
    if (filter) {
      setInternalFilter((internalFilter) => {
        const finalFilter = mergeWith({}, filter, internalFilter, (a, b) => {
          if (Array.isArray(a)) {
            return b.concat(a)
          }
        })
        return finalFilter;
      });
    }
  }, [filter]);

  const [visibleModal, setVisibleModal] = useState(false);
  const [vaccineDetailsModal, setVaccineDetailsModal] =
    useState<VaccineDetailsModal>();
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const searchInputRef = createRef<Input>();
  const emptyCellText = "No information";
  const cellRender = (data: string) => {
    return data.length ? (
      <span key={uniqueId()}>{data}</span>
    ) : (
      <span key={uniqueId()} style={{ color: "grey" }}>
        {emptyCellText}
      </span>
    );
  };
  const { vaccineCandidates, loading } = useGetVaccineCandidates();
  const { phases } = useGetPhases();

  const mapPhasesToFilter = phases?.map((phase: Phase) => {
    return {
      value: phase.name,
      text: phase.name,
    };
  });

  const hideModal = () => {
    setVisibleModal(false);
  };

  const handleSearch = (
    selectedKeys: string,
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText("");
    setSearchedColumn("");
  };

  const onDetailClick = (vaccineDetails: string, vaccineName: string) => {
    const vaccineDetailsModalInfo = {
      vaccineName: `${vaccineName} details`,
      vaccineDetails: ParseEntities(vaccineDetails),
    };
    setVaccineDetailsModal(vaccineDetailsModalInfo);
    setVisibleModal(true);
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInputRef}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: string, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInputRef.current?.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={Array(searchText)}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        cellRender(text)
      ),
  });

  const alphabeticalSortingFunction = (a: Vaccine, b: Vaccine) => {
    if (a.candidate < b.candidate) {
      return -1;
    }
    if (b.candidate > a.candidate) {
      return 1;
    }
  };

  const columns: any = [
    {
      title: "Name",
      dataIndex: "candidate",
      key: "candidate",
      width: "16.66%",
      sorter: (a: Vaccine, b: Vaccine) => alphabeticalSortingFunction(a, b),
      ...getColumnSearchProps("candidate"),
    },
    {
      title: "Institutions",
      dataIndex: "institutions",
      key: "institutions",
      width: "16.66%",
      responsive: ["lg"],
      render: (institutions: Array<string>) => {
        return institutions?.map((institution) => cellRender(institution));
      },
    },
    {
      title: "Mechanism",
      dataIndex: "mechanism",
      key: "mechanism",
      width: "16.66%",
      responsive: ["lg"],
      sorter: (a: Vaccine, b: Vaccine) => alphabeticalSortingFunction(a, b),
      render: (mechanism: string) => cellRender(mechanism),
    },
    {
      title: "Sponsors",
      dataIndex: "sponsors",
      key: "sponsors",
      width: "16.66%",
      responsive: ["md", "lg"],
      render: (sponsors: Array<string>) => {
        return sponsors?.map((sponsors) => cellRender(sponsors));
      },
    },
    {
      title: "Trial Phase",
      dataIndex: "trialPhase",
      key: "trialPhase",
      width: "10%",
      filters: mapPhasesToFilter,
      filteredValue: internalFilter?.trialPhase
        ? internalFilter.trialPhase
        : null,
      onFilter: (value: any, record: any) => {
        return record.trialPhase.name === value;
      },
      render: (vaccinePhase: Phase) => (
        <Tag
          color={vaccinePhase?.color}
          key={`${vaccinePhase?.name}tag`}
          className="phaseTag"
        >
          {" "}
          {vaccinePhase?.name.toUpperCase()}{" "}
        </Tag>
      ),
    },
    {
      title: "Actions",
      dataIndex: "details",
      key: "details",
      width: "10%",
      render: (vaccineDetails: string, vaccine: Vaccine) => (
        <Button
          key={`${vaccine}detailsButton`}
          onClick={() => onDetailClick(vaccineDetails, vaccine.candidate)}
        >
          Show details
        </Button>
      ),
      responsive: ["md", "lg"],
    },
  ];

  return (
    <>
      <Modal
        title={vaccineDetailsModal?.vaccineName}
        visible={visibleModal}
        onCancel={hideModal}
        width={!isMobile ? 1200 : "auto"}
        footer={[
          <Button type="primary" key="hide" onClick={hideModal}>
            {" "}
            OK{" "}
          </Button>,
        ]}
      >
        <p>{vaccineDetailsModal?.vaccineDetails}</p>
      </Modal>
      <Row className="sectionTitle">
        <Col>
          <Title level={2} className="title">
            <UnorderedListOutlined />
            Vaccines
          </Title>
        </Col>
      </Row>
      <Table
        columns={columns}
        loading={loading}
        rowKey={(vaccine) => {
          return uniqueId(String(vaccine.candidate));
        }}
        dataSource={vaccineCandidates?.data}
        onChange={(pagination: any, filters: any, sorter: any, extra: any) => {
          if (extra.action === "filter") {
            setInternalFilter({
              ...internalFilter,
              trialPhase: filters.trialPhase,
              candidate: filters.candidate,
            });
          }
        }}
      />
    </>
  );
}

export default VaccineCandidates;
