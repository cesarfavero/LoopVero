# `createBoxRemoteResourceAccessorFromTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-remote-accessor.ts` · [Module README](../../../../../modules/host/box/box-remote-accessor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679044-679052](../../../../../../reference/runtime/host-main.cjs#L679044-L679052) | `FunctionDeclaration` | no | `transport` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679044-679052](../../../../../../reference/runtime/host-main.cjs#L679044-L679052) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:679044

Calls written directly in this body: `createContextPropagatingClient`, `new BoxRemoteExecManager`, `new RemoteResourceAccessor`.

SHA-256 of the source span: `63353316936cddf5493e8b955089d8d795ddab8a29e2ca332b08329ad56391b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
