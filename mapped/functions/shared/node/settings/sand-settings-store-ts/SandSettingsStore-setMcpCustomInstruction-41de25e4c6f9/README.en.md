# `_SandSettingsStore.setMcpCustomInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/settings/sand-settings-store.ts` · [Module README](../../../../../../modules/shared/node/settings/sand-settings-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688243-688257](../../../../../../../reference/runtime/host-main.cjs#L688243-L688257) | `method` | no | `name18, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688243-688257](../../../../../../../reference/runtime/host-main.cjs#L688243-L688257) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:688243

Calls written directly in this body: `clampMcpCustomInstruction`, `clamped.trim`, `getDefaultMcpCustomInstruction`, `this.loadForWrite`, `this.persist`.

Assignment or increment targets: `next[computed]`.

SHA-256 of the source span: `a1de4530356b8a35dc185acf22646e8473742028fc6a3d79574ef745c3527aa6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
