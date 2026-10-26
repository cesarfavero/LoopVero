# `recordPlaywrightRunCodeMeterMismatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-review-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-review-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742696-742707](../../../../../../reference/runtime/host-main.cjs#L742696-L742707) | `FunctionDeclaration` | no | `ctx, args` |
| [evaluation:515358-515369](../../../../../../reference/runtime/sand-eval-runner.cjs#L515358-L515369) | `FunctionDeclaration` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742696-742707](../../../../../../reference/runtime/host-main.cjs#L742696-L742707) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515358-515369](../../../../../../reference/runtime/sand-eval-runner.cjs#L515358-L515369) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:742696

Calls written directly in this body: `Math.min`, `String`, `codeModeLabel`, `logger118.warn`, `servedModelLabel`.

SHA-256 of the source span: `2556d3e3815cdfe79df760c8adb4af99ea1fdc549012b82672a4d16de90b6303`.

### evaluation:515358

Calls written directly in this body: `Math.min`, `String`, `codeModeLabel2`, `logger91.warn`, `servedModelLabel`.

SHA-256 of the source span: `af4825df357325baeac0ac5b025b71166e0b8b26c9187171f66a4b646921a0cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
