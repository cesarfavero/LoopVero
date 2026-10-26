# `FileAutomationStore.setOnChange`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720506-720508](../../../../../../reference/runtime/host-main.cjs#L720506-L720508) | `method` | no | `onChange` |
| [evaluation:627857-627859](../../../../../../reference/runtime/sand-eval-runner.cjs#L627857-L627859) | `method` | no | `onChange` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720506-720508](../../../../../../reference/runtime/host-main.cjs#L720506-L720508) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627857-627859](../../../../../../reference/runtime/sand-eval-runner.cjs#L627857-L627859) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720506

Calls written directly in this body: `this.dir.setOnChange`.

SHA-256 of the source span: `d17099db849835aefa3fe0717511d60b95dab562c6bc9e4a33c94e82b4171953`.

### evaluation:627857

Calls written directly in this body: `this.dir.setOnChange`.

SHA-256 of the source span: `d17099db849835aefa3fe0717511d60b95dab562c6bc9e4a33c94e82b4171953`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
