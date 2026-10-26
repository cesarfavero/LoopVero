# `captureScreenshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680428-680441](../../../../../../../reference/runtime/host-main.cjs#L680428-L680441) | `FunctionDeclaration` | yes | `executor, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680428-680441](../../../../../../../reference/runtime/host-main.cjs#L680428-L680441) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:680428

Calls written directly in this body: `executor.execute`, `new ComputerUseAction`, `new ComputerUseArgs`, `new ScreenshotAction`.

SHA-256 of the source span: `c066ebcb49cb8ad23f3979b93dadba02928f6a453349d8e475f520a3b737a69f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
