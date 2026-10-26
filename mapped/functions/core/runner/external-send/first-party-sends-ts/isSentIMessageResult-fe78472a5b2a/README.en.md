# `isSentIMessageResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/first-party-sends.ts` · [Module README](../../../../../../modules/core/runner/external-send/first-party-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538941-538947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538941-L538947) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538941-538947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538941-L538947) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:538941

Calls written directly in this body: `JSON.parse`, `sentIMessageResultSchema.safeParse`.

SHA-256 of the source span: `c0d5dd2f5f799e3e4fb5bb748de50a42551dbdcff5ef52f0e97a052ec6925f2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
