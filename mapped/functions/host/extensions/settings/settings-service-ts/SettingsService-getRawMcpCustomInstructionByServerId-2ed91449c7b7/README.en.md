# `SettingsService.getRawMcpCustomInstructionByServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728808-728810](../../../../../../../reference/runtime/host-main.cjs#L728808-L728810) | `method` | no | `serverId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728808-728810](../../../../../../../reference/runtime/host-main.cjs#L728808-L728810) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:728808

Calls written directly in this body: `this.store.getRawMcpCustomInstructionByServerId`.

SHA-256 of the source span: `5e82decd260be2de07d538b4a8f86332d5f81549014644d79c96d4feba828fe8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
