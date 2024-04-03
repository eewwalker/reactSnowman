import { describe, test, expect, vi } from "vitest";
import {render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";

import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

test("when guessed max guesses shows you lose", function() {
    const {container, debug} = render(<Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={1}
    />)
    fireEvent.click(container.querySelector('#s'));
    fireEvent.click(container.querySelector('#f'));
    expect(
        container.querySelector('.Snowman-gameOver')
        ).toBeInTheDocument()
})

// snapshot test
test("matches snapshot", function () {
  const { container } = render(<Snowman
    images={[img0, img1, img2, img3, img4, img5, img6]}
    words={["apple"]}
    maxWrong={1}
    />)
  expect(container).toMatchSnapshot();
})

// smoke test
test("renders without crashing", function () {
  render(<Snowman
    images={[img0, img1, img2, img3, img4, img5, img6]}
    words={["apple"]}
    maxWrong={1}
    />)
})

