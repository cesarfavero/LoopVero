# `forwardStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/worker-log-forwarding.ts` · [Module README](../../../../../modules/host/agent-isolation/worker-log-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715092-715121](../../../../../../reference/runtime/host-main.cjs#L715092-L715121) | `FunctionDeclaration` | no | `stream3, emit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715092-715121](../../../../../../reference/runtime/host-main.cjs#L715092-L715121) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:715092

Calls written directly in this body: `stream3.on`, `stream3.setEncoding`.

SHA-256 of the source span: `00f70cb81a28a00895093d6c8babcab9f3c833d3ddebc8fa76b904a61d659b50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
