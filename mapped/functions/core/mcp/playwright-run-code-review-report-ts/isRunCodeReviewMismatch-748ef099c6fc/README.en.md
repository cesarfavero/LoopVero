# `isRunCodeReviewMismatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-review-report.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-review-report-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742644-742646](../../../../../../reference/runtime/host-main.cjs#L742644-L742646) | `FunctionDeclaration` | no | `report` |
| [evaluation:515307-515309](../../../../../../reference/runtime/sand-eval-runner.cjs#L515307-L515309) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742644-742646](../../../../../../reference/runtime/host-main.cjs#L742644-L742646) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515307-515309](../../../../../../reference/runtime/sand-eval-runner.cjs#L515307-L515309) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742644

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `18e70070e4063693ff012841b8899e8c435ab65b86845576ed467271b6072202`.

### evaluation:515307

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `18e70070e4063693ff012841b8899e8c435ab65b86845576ed467271b6072202`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
