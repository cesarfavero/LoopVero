# `parseHttpUrl2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583412-583422](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583412-L583422) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583412-583422](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583412-L583422) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:583412

Calls written directly in this body: `/^[a-z][a-z0-9+.-]*:/i.test`, `new URL`, `raw.trim`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `0836c49a2e4eeb3b0b262fdc57ac106130cfc39223d1c3129242f6b911ce98d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
