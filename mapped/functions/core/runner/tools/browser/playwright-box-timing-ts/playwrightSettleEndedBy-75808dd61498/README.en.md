# `playwrightSettleEndedBy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743204-743218](../../../../../../../../reference/runtime/host-main.cjs#L743204-L743218) | `FunctionDeclaration` | no | `timing` |
| [evaluation:516055-516069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516055-L516069) | `FunctionDeclaration` | no | `timing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743204-743218](../../../../../../../../reference/runtime/host-main.cjs#L743204-L743218) | 8 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:516055-516069](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516055-L516069) | 8 | 1 | 0 | 5 | 0 | 0 |

### host:743204

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `holdMs`, `probeMs`.

SHA-256 of the source span: `e51c229b8f4d7a0e579f9d592a73604fd487cda2eab71bfd109aa2658c56762a`.

### evaluation:516055

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `holdMs`, `probeMs`.

SHA-256 of the source span: `e51c229b8f4d7a0e579f9d592a73604fd487cda2eab71bfd109aa2658c56762a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
