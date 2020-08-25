import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

configure({ adapter: new Adapter() });
