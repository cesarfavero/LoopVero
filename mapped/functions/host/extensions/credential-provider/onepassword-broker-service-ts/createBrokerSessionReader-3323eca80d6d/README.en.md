# `createBrokerSessionReader`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550288-550318](../../../../../../../reference/runtime/host-main.cjs#L550288-L550318) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550288-550318](../../../../../../../reference/runtime/host-main.cjs#L550288-L550318) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:550288

Calls written directly in this body: `createDeadlinePolicy`.

SHA-256 of the source span: `d5955293e06a0097fbc83a8f59e95b04a8ca80063ec66933dd91d89d3628b089`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
