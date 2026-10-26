# `runCodeMeterMismatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-review-report.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-review-report-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742647-742657](../../../../../../reference/runtime/host-main.cjs#L742647-L742657) | `FunctionDeclaration` | no | `tier, meter` |
| [evaluation:515310-515320](../../../../../../reference/runtime/sand-eval-runner.cjs#L515310-L515320) | `FunctionDeclaration` | no | `tier, meter` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742647-742657](../../../../../../reference/runtime/host-main.cjs#L742647-L742657) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515310-515320](../../../../../../reference/runtime/sand-eval-runner.cjs#L515310-L515320) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:742647

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f8009e76b1ea297344f12d1fb732713d37eb7cfbce5c9d95969ac7f74487df1a`.

### evaluation:515310

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f8009e76b1ea297344f12d1fb732713d37eb7cfbce5c9d95969ac7f74487df1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
