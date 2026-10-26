# `parseConnectorSecretsText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718999-719008](../../../../../../../reference/runtime/host-main.cjs#L718999-L719008) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718999-719008](../../../../../../../reference/runtime/host-main.cjs#L718999-L719008) | 2 | 1 | 0 | 1 | 2 | 0 |

### host:718999

Calls written directly in this body: `JSON.parse`, `Object.entries`, `isUnknownRecord2`, `new TypeError`.

Assignment or increment targets: `secrets[computed]`.

Explicit throw targets: `TypeError`.

SHA-256 of the source span: `5025ec0da902745bd5c50dc9eed91cfaeadc230ad15b76e8e10beed602511b24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
