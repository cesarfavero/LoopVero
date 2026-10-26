# `createNodeSettingsFileIo/keepDamagedCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687718-687728](../../../../../../../reference/runtime/host-main.cjs#L687718-L687728) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687718-687728](../../../../../../../reference/runtime/host-main.cjs#L687718-L687728) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:687718

Calls written directly in this body: `.filter`, `clock.now`, `copies.some`, `createDamagedCopy`, `readNoFollow`.

Assignment or increment targets: `at3`.

SHA-256 of the source span: `56aa4cb335536932aad96134009e0903ea9303c63344aace3c3813a76fe8560a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
