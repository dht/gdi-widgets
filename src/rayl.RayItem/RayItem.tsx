import React from 'react';
import {
    Column,
    Row,
    Transcript,
    VideoClip,
    Word,
    Wrapper,
} from './RayItem.style';
import { data } from './RayItem.data';

export type RayItemProps = {};

export function RayItem(_props: RayItemProps) {
    function renderWord(word: string, index: number) {
        return (
            <Word key={index} className='word'>
                {word}
            </Word>
        );
    }

    function renderWords() {
        return data
            .split(' ')
            .map((word: string, index) => renderWord(word, index));
    }

    return (
        <Wrapper className='RayItem-wrapper' data-testid='RayItem-wrapper'>
            <Row>
                <Column>
                    <VideoClip width='100%' height='100%' controls>
                        <source src='/video.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </VideoClip>
                </Column>
                <Column>
                    <Transcript>{renderWords()}</Transcript>
                </Column>
            </Row>
        </Wrapper>
    );
}

export default RayItem;
