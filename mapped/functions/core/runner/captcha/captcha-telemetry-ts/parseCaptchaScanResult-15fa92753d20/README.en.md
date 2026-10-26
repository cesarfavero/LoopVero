# `parseCaptchaScanResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489645-489666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489645-L489666) | `FunctionDeclaration` | no | `stdout, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489645-489666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489645-L489666) | 6 | 1 | 0 | 4 | 0 | 0 |

### evaluation:489645

Calls written directly in this body: `.findLast`, `Array.isArray`, `isUnknownRecord2`, `markerLine.indexOf`, `markerLine.slice`, `new Map`, `parseJsonOrUndefined2`, `request3.targets.some`, `scanOf`, `scans.has`, `scans.set`, `stdout.split`.

SHA-256 of the source span: `29a445cde8793693462606ff226969ccb6b29941fe4f799e83d97835025bf9f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
