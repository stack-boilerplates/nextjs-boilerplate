import { lightTheme } from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Boilerplate</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      lightTheme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Boilerplate
        </span>
      </div>
    `)
  })
})
