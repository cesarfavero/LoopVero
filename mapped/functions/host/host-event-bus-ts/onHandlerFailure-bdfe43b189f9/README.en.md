# `onHandlerFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-event-bus.ts` · [Module README](../../../../modules/host/host-event-bus-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786252-786256](../../../../../reference/runtime/host-main.cjs#L786252-L786256) | `ArrowFunctionExpression` | no | `topic, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786252-786256](../../../../../reference/runtime/host-main.cjs#L786252-L786256) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786252 uses an implicit arrow-function return.

### host:786252

Calls written directly in this body: `errorLogTag`, `this.reportFailure`.

SHA-256 of the source span: `0ad1e0c4bcd0f1de6436144a8b917f3bf42b513a936f86afd7d0cca9acf101a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
