# `createSandBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-factory.ts` · [Module README](../../../../../modules/host/box/box-factory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679610-679617](../../../../../../reference/runtime/host-main.cjs#L679610-L679617) | `FunctionDeclaration` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679610-679617](../../../../../../reference/runtime/host-main.cjs#L679610-L679617) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:679610

Calls written directly in this body: `new LoopbackSandBox`.

SHA-256 of the source span: `3950a0d2da54be582de0f4c8035a8558129741819181b9408f7ebb06a00c1254`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
