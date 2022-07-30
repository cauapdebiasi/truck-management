/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainProvider, { MainContext } from '@/contexts/MainContext';
import React from 'react';

describe("Main Context", () => {


  const TestComponent = () => {
    const { getAllParts } = React.useContext(MainContext)

    return (<div>
      <ul>
        {getAllParts().map(part => <li key={part.id} data-testid={part.id}>{part.name} {part.lastValue}</li>)}
      </ul>
      <div >
        <ul data-testid="arla-only">
          {getAllParts(["arla"]).map(part => <li key={part.id + "-arla"} data-testid={part.id + " arla"}>{part.name} {part.lastValue}</li>)}
        </ul>
      </div>
    </div>)
  }
  render(<MainProvider><TestComponent></TestComponent></MainProvider>)

  it("should return the current vehicle model", async () => {
    expect((await screen.findByTestId("modelo")).textContent).toBe("Modelo r480")
  })

  it("should return the latest frota replacement (65)", async () => {
    expect((await screen.findByTestId("frota")).textContent).toBe("Frota 65")
  })

  it("should return the latest filtrolubrificante replacement km value (234)", async () => {
    expect((await screen.findByTestId("filtrolubrificante")).textContent).toBe("Filtro Lubrificante 234")
  })

  it("should only return parts that have the arla category", async () => {
    expect((await screen.findByTestId("arla-only")).childNodes).toHaveLength(1)
  })
})
