import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import DPicker from './datePicker'
import { act } from 'react-dom/test-utils';



describe("Datepicker", ()=>{

    test("renders content", () =>{

        const mockhandler = jest.fn()
        const inputprops={
            name:"test",
            value:"",
            onchange: mockhandler,
            placeholder:"testSearch"
        }

        render(<DPicker {...inputprops}/>)
        const element = screen.getByPlaceholderText('testSearch')
        expect(element).toBeDefined()

    })


    test("Date format is ok", async() =>{

        const mockhandler = jest.fn()
        const mockDate = '25.05.2005 - 23:22:12'
        const inputprops={
            name:"test",
            value:"",
            onchange: mockhandler,
            placeholder:"testSearch"
        }

         render(<DPicker {...inputprops}/>)
        const element = screen.getByRole('textbox')
        // element.setSelectRange(0, element.value.lenght)
        
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(()=>{
            element.dispatchEvent(new MouseEvent('click'))
            element.innerHTML = mockDate
            fireEvent.keyDown(element, {key: 'enter', keyCode: 13})
        })
        screen.getByText(mockDate)

    })


})


