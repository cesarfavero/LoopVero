# `onDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583453-583455](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583453-L583455) | `FunctionDeclaration` | no | `host, domains` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583453-583455](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583453-L583455) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583453

Calls written directly in this body: `domains.some`.

SHA-256 of the source span: `ac5cb2f07123107d3896aecc589c0d612075b1d59925d8e4da1d601452fec57a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
