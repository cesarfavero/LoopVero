# `findConnectorServedOn/servedOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539187-539187](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539187-L539187) | `ArrowFunctionExpression` | no | `candidate, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539187-539187](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539187-L539187) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:539187 uses an implicit arrow-function return.

### evaluation:539187

Calls written directly in this body: `accepts`, `candidate.hosts.some`.

SHA-256 of the source span: `31ae58f65526ff0c5e56e45510176881c572107b6a46ca0d406ec49cfde61c4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
