# `createSentLinkChecks/checksFor/checkedVia`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583474-583483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583474-L583483) | `ArrowFunctionExpression` | no | `key, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583474-583483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583474-L583483) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:583474

Calls written directly in this body: `asWritten`, `command.includes`, `fetchedKeys.has`.

SHA-256 of the source span: `304d5b895b83b3ffc264e550a112d8588441723c37a9afbd8a1719c674145777`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
