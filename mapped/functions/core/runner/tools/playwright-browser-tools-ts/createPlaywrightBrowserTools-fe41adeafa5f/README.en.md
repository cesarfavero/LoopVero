# `createPlaywrightBrowserTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751446-751471](../../../../../../../reference/runtime/host-main.cjs#L751446-L751471) | `FunctionDeclaration` | no | `deps` |
| [evaluation:524297-524322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524297-L524322) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751446-751471](../../../../../../../reference/runtime/host-main.cjs#L751446-L751471) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524297-524322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524297-L524322) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751446

Calls written directly in this body: `.map`, `.settle`, `PLAYWRIGHT_BROWSER_ROWS.filter`, `PLAYWRIGHT_BROWSER_TOOL_NAMES.filter`, `createPlaywrightRunCodeOffer`, `deps.runCodeAdmission`, `deps.runCodeOfferAdmission`, `exposed.has`, `new Map`, `new Set`.

SHA-256 of the source span: `dbed6256c02866ef9710ce08cf762f20b4701ec6daba3984e13b193206eadfb1`.

### evaluation:524297

Calls written directly in this body: `.map`, `.settle`, `PLAYWRIGHT_BROWSER_ROWS.filter`, `PLAYWRIGHT_BROWSER_TOOL_NAMES.filter`, `createPlaywrightRunCodeOffer`, `deps.runCodeAdmission`, `deps.runCodeOfferAdmission`, `exposed.has`, `new Map`, `new Set`.

SHA-256 of the source span: `dbed6256c02866ef9710ce08cf762f20b4701ec6daba3984e13b193206eadfb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
