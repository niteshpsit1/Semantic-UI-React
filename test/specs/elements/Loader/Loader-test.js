import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import Loader from 'src/elements/Loader/Loader'

describe('Loader', () => {
  common.isConformant(Loader)
  common.hasUIClassName(Loader)
  common.rendersChildren(Loader)

  common.propKeyOnlyToClassName(Loader, 'active')
  common.propKeyOnlyToClassName(Loader, 'disabled')
  common.propKeyOnlyToClassName(Loader, 'indeterminate')
  common.propKeyOnlyToClassName(Loader, 'inverted')

  common.propKeyOrValueAndKeyToClassName(Loader, 'inline')

  common.propValueOnlyToClassName(Loader, 'size')

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<Loader content={text} />)
        .should.contain.text(text)
    })
  })

  describe('text (class)', () => {
    it('omitted by default', () => {
      shallow(<Loader />)
        .should.not.have.className('text')
    })

    it('add class when has children', () => {
      const text = faker.hacker.phrase()

      shallow(<Loader>{text}</Loader>)
        .should.have.className('text')
    })

    it('add class when has content prop', () => {
      const text = faker.hacker.phrase()

      shallow(<Loader content={text} />)
        .should.have.className('text')
    })
  })
})
