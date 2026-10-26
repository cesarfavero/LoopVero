# `ForeverBoxService.captureScreenshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680248-680261](../../../../../../../reference/runtime/host-main.cjs#L680248-L680261) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680248-680261](../../../../../../../reference/runtime/host-main.cjs#L680248-L680261) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:680248

Calls written directly in this body: `reportFallback`, `this.options.screenshotDeadline.run`.

SHA-256 of the source span: `0f639f7d0724ee74f08ad3a68afda7e5d2cec871c9f94577642f9833246e0667`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
