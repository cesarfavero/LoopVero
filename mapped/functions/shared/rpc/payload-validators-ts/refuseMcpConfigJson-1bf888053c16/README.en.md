# `refuseMcpConfigJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/rpc/payload-validators.ts` · [Module README](../../../../../modules/shared/rpc/payload-validators-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487630-487638](../../../../../../reference/runtime/host-main.cjs#L487630-L487638) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487630-487638](../../../../../../reference/runtime/host-main.cjs#L487630-L487638) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:487630

Calls written directly in this body: `.encode`, `describeReceived2`, `isUnknownRecord2`, `new TextEncoder`, `parseJsonOrUndefined`, `value.trim`.

SHA-256 of the source span: `284fd7069024adb681eafa6d79f328daad4448bb5375aa6d5a885d78bdd4e313`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
