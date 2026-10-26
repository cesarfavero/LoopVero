# `taughtSettingsRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557704-557706](../../../../../../reference/runtime/host-main.cjs#L557704-L557706) | `FunctionDeclaration` | no | `facts` |
| [evaluation:546140-546142](../../../../../../reference/runtime/sand-eval-runner.cjs#L546140-L546142) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557704-557706](../../../../../../reference/runtime/host-main.cjs#L557704-L557706) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546140-546142](../../../../../../reference/runtime/sand-eval-runner.cjs#L546140-L546142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557704

Calls written directly in this body: `SAND_UI_MAP_SETTINGS_ROWS.filter`.

SHA-256 of the source span: `5d875e459237bb756bdc6bca29a03a4b874e179f3413fb2e75a44f4f24436bc6`.

### evaluation:546140

Calls written directly in this body: `SAND_UI_MAP_SETTINGS_ROWS.filter`.

SHA-256 of the source span: `5d875e459237bb756bdc6bca29a03a4b874e179f3413fb2e75a44f4f24436bc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
