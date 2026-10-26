# `SettingsService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728538-728550](../../../../../../../reference/runtime/host-main.cjs#L728538-L728550) | `method` | no | `settingsPath = (0, import_node_path156.join)(getSandRootDir(), "settings.json"), refusedWriteLog, io2 = createHostSettingsFileIo(settingsPath)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728538-728550](../../../../../../../reference/runtime/host-main.cjs#L728538-L728550) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:728538

Calls written directly in this body: `createSandDurableFileOwner`, `new SandSettingsStore`.

Assignment or increment targets: `this.settingsPath`, `this.store`.

SHA-256 of the source span: `ac674aa6bf6284a1c852ec42c5aaef1134a785adee7dba165b5977976abf6d80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
