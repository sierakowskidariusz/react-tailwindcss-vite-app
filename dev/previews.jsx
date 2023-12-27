import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Panel from "../src/components/Panel.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Panel">
                <Panel/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
