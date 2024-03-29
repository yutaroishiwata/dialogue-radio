import Container from './container'
import SnsButton from './sns-button'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray5">
      <Container>
        <div className="flex items-center justify-between pb-5 border-t border-black items-left pt-14 sm:flex-row sm:items-end sm:py-14">
          <a
            href="https://forms.gle/QtJQ4iXsFish9BiD7"
            target="_blank"
            className="px-5 py-4 font-bold text-white bg-white bg-opacity-10 rounded-md md:mb-0">
            お便り・お問い合わせ
          </a>
          <p className="order-2 mt-10 text-xs sm:order-1 sm:mt-0">© Dialogue Radio 2021</p>
          <SnsButton variant={"WHITE"} />
        </div>
      </Container>
    </footer>
  )
}
