# `legacyTaughtSettingsAnchorIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555211-555217](../../../../../../../reference/runtime/host-main.cjs#L555211-L555217) | `FunctionDeclaration` | no | `visibility` |
| [evaluation:544143-544149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544143-L544149) | `FunctionDeclaration` | no | `visibility` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555211-555217](../../../../../../../reference/runtime/host-main.cjs#L555211-L555217) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544143-544149](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544143-L544149) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:555211

Calls written directly in this body: `LEGACY_LINKABLE_SETTINGS_ANCHOR_IDS.filter`.

SHA-256 of the source span: `7a65737fff3cec55034fc239fa48d180f75e7d3d0bea16874c8d9f0816f34cc9`.

### evaluation:544143

Calls written directly in this body: `LEGACY_LINKABLE_SETTINGS_ANCHOR_IDS.filter`.

SHA-256 of the source span: `7a65737fff3cec55034fc239fa48d180f75e7d3d0bea16874c8d9f0816f34cc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
