# `recordSettle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743238-743257](../../../../../../../../reference/runtime/host-main.cjs#L743238-L743257) | `FunctionDeclaration` | no | `ctx, timing, runtimeStart, call` |
| [evaluation:516089-516108](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516089-L516108) | `FunctionDeclaration` | no | `ctx, timing, runtimeStart, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743238-743257](../../../../../../../../reference/runtime/host-main.cjs#L743238-L743257) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516089-516108](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516089-L516108) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:743238

Calls written directly in this body: `playwrightSettleOf`, `playwrightToolMaySettle`, `recordComputerUseSpanAt`, `timing.steps.at`.

SHA-256 of the source span: `42daebec02b98af77bc08b4d27bd1fe0e95dfc8239cdd46a6d1a7aeb463c344c`.

### evaluation:516089

Calls written directly in this body: `playwrightSettleOf`, `playwrightToolMaySettle`, `recordComputerUseSpanAt`, `timing.steps.at`.

SHA-256 of the source span: `7be19565cab170d4654bb13572a713e77faa01353fbe227979d4de1c1b1c4222`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
