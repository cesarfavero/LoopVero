# `forwardStream/flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-log-forwarding.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-log-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715112-715116](../../../../../../reference/runtime/host-main.cjs#L715112-L715116) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715112-715116](../../../../../../reference/runtime/host-main.cjs#L715112-L715116) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715112

Calls written directly in this body: `emitLine`.

Assignment or increment targets: `buffered3`.

SHA-256 of the source span: `7f472c4d7cdbcc5213581e5544886a81ca238eb700000ffaf8ade00f461acf92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
