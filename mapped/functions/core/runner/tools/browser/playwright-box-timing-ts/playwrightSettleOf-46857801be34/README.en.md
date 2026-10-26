# `playwrightSettleOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743219-743237](../../../../../../../../reference/runtime/host-main.cjs#L743219-L743237) | `FunctionDeclaration` | no | `timing` |
| [evaluation:516070-516088](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516070-L516088) | `FunctionDeclaration` | no | `timing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743219-743237](../../../../../../../../reference/runtime/host-main.cjs#L743219-L743237) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:516070-516088](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516070-L516088) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:743219

Calls written directly in this body: `Math.max`, `playwrightSettleEndedBy`, `round`, `timing.steps.find`.

SHA-256 of the source span: `d66c65ecfd63e444235582001e1770ef969efad100ab4d9ff1dc52876bb29ca9`.

### evaluation:516070

Calls written directly in this body: `Math.max`, `playwrightSettleEndedBy`, `round`, `timing.steps.find`.

SHA-256 of the source span: `423aabf5146fc9f27de64eb1c19927613474084c993e24ddc788233f7ecf50c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
