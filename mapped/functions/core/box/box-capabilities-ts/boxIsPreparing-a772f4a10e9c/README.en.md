# `boxIsPreparing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546692-546694](../../../../../../reference/runtime/host-main.cjs#L546692-L546694) | `FunctionDeclaration` | no | `box, agentId` |
| [evaluation:475796-475798](../../../../../../reference/runtime/sand-eval-runner.cjs#L475796-L475798) | `FunctionDeclaration` | no | `box, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546692-546694](../../../../../../reference/runtime/host-main.cjs#L546692-L546694) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475796-475798](../../../../../../reference/runtime/sand-eval-runner.cjs#L475796-L475798) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546692

Calls written directly in this body: `box.isPreparing`.

SHA-256 of the source span: `7d7b3d0803bb1eca1ea67046db2c9e347351f931ff693f54fe2518d0532581cb`.

### evaluation:475796

Calls written directly in this body: `box.isPreparing`.

SHA-256 of the source span: `7d7b3d0803bb1eca1ea67046db2c9e347351f931ff693f54fe2518d0532581cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
