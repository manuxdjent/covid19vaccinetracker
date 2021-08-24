import React from 'react'
import { Col, Row } from 'antd'
import { Typography }  from 'antd'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const repo = 'https://github.com/manuxdjent/covid19vaccinetracker'
const linkedInUrl = 'https://www.linkedin.com/in/manuelginzo/'

function FooterAbout() {
    const { Link } = Typography
    return (
        <>
            <Row>
                <Col>
                    <p className="developedBy">
                        <span>Developed by Manuel Fernández de Ginzo</span>
                        <Link href={repo} target="_blank">
                            <GithubOutlined />
                        </Link>
                        <Link href={linkedInUrl} target="_blank">
                            <LinkedinOutlined />
                        </Link>
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default FooterAbout