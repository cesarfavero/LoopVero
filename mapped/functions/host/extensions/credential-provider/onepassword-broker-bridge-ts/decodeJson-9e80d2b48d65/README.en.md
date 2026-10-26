# `decodeJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549477-549485](../../../../../../../reference/runtime/host-main.cjs#L549477-L549485) | `FunctionDeclaration` | no | `raw, maxBytes, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549477-549485](../../../../../../../reference/runtime/host-main.cjs#L549477-L549485) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:549477

Calls written directly in this body: `JSON.parse`, `errorLogTag`, `log5`.

SHA-256 of the source span: `d7cb881b468d7de4cd1fcb6a92faa48a7a794a0a92192efc71ef209b14101d5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
