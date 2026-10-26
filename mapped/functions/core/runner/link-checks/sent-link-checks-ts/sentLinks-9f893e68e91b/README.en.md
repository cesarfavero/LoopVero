# `sentLinks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583442-583452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583442-L583452) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583442-583452](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583442-L583452) | 0 | 2 | 0 | 1 | 0 | 0 |

### evaluation:583442

Calls written directly in this body: `add2`, `message.content.matchAll`, `new Map`, `trimUrlToken2`.

SHA-256 of the source span: `b4942f022cae3ee570dad046dad49f4da8e29b90f961a82c68f81326c5bcb55f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
