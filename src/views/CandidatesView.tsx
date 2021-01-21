import React, { useState } from 'react';
import { useGetVaccines } from '../api/hooks/use-queries'
import { Table, Button, Modal, Row, Col, Tag } from 'antd'
import { uniqueId } from 'lodash'
import ParseEntities from 'parse-entities'
import Title from 'antd/lib/typography/Title';
import { Phase, Vaccine, VaccineDetailsModal } from '../types/types';
import "./styles/CandidatesView.css"

function VaccinesView() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [vaccineDetailsModal, setVaccineDetailsModal] = useState<VaccineDetailsModal>();
  const emptyCellText = 'No information'
  const cellRender = (data: string) => {
    return data.length ? <span key={uniqueId()}>{data}</span> : <span key={uniqueId()} style={{ color: 'grey' }}>{emptyCellText}</span>
  }
  const { candidates, loading } = useGetVaccines()


  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'candidate',
      width: '16.66%',
      render: (name: string) => cellRender(name)
    },
    {
      title: 'Institutions',
      dataIndex: 'institutions',
      width: '16.66%',
      responsive: ['lg'],
      render: (institutions: Array<string>) => {
        return institutions?.map((institution) => (
          cellRender(institution)
        ))
      }
    },
    {
      title: 'Mechanism',
      dataIndex: 'mechanism',
      width: '16.66%',
      responsive: ['lg'],
      render: (mechanism: string) => cellRender(mechanism)
    },
    {
      title: 'Sponsors',
      dataIndex: 'sponsors',
      width: '16.66%',
      responsive: ['md', 'lg'],
      render: (sponsors: Array<string>) => {
        return sponsors?.map((sponsors) => (
          cellRender(sponsors)
        ))
      }
    },
    {
      title: 'Trial Phase',
      dataIndex: 'trialPhase',
      width: '10%',
      render: (vaccinePhase: Phase) => <Tag color={vaccinePhase.color} key={`${vaccinePhase.name}tag`} className="phaseTag"> {vaccinePhase.name.toUpperCase()} </Tag>
    },
    {
      title: 'Actions',
      dataIndex: 'details',
      width: '10%',
      render: (vaccineDetails: string, vaccine: Vaccine) => <Button key={`${vaccine}detailsButton`} onClick={() => onDetailClick(vaccineDetails, vaccine.candidate)}>Show details</Button>,
      responsive: ['md', 'lg']
    }
  ]


  const onDetailClick = (vaccineDetails: string, vaccineName: string) => {
    const vaccineDetailsModalInfo = {
      vaccineName: `${vaccineName} details`,
      vaccineDetails: ParseEntities(vaccineDetails)
    }
    setVaccineDetailsModal(vaccineDetailsModalInfo)
    setVisibleModal(true)
  }
  const hideModal = () => {
    setVisibleModal(false)
  }

  return (
    <>
      <Modal
        title={vaccineDetailsModal?.vaccineName}
        visible={visibleModal}
        onCancel={hideModal}
        footer={[ 
          <Button type="primary" key="hide" onClick={hideModal}> OK </Button>
         ]}
        width="auto">
          <p>{vaccineDetailsModal?.vaccineDetails}</p>
      </Modal>
      <Row>
        <Col>
          <Title className="title">Candidates</Title>        
        </Col>
      </Row>
      <Table columns={columns} rowKey={(vaccine) => { return uniqueId(String(vaccine.candidate))}} dataSource={candidates?.data} loading={loading} style={{margin: "20px"}}/>
      </>
  );
}

export default VaccinesView;