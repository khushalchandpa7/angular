import { TextTrimPipe } from '../custom-pipes/text-trim-pipe';

describe('TextTrimPipe', () => {
  it('create an instance', () => {
    const pipe = new TextTrimPipe();
    expect(pipe).toBeTruthy();
  });
});

