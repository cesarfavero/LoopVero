# `FileAutomationStore.getLocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720503-720505](../../../../../../reference/runtime/host-main.cjs#L720503-L720505) | `method` | no | `(none)` |
| [evaluation:627854-627856](../../../../../../reference/runtime/sand-eval-runner.cjs#L627854-L627856) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720503-720505](../../../../../../reference/runtime/host-main.cjs#L720503-L720505) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627854-627856](../../../../../../reference/runtime/sand-eval-runner.cjs#L627854-L627856) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720503

Calls written directly in this body: `this.dir.getLocation`.

SHA-256 of the source span: `fc9d6c44839317ec665dcddb5a2577b612f4e38b7fc695ac4826b9d007a17f7e`.

### evaluation:627854

Calls written directly in this body: `this.dir.getLocation`.

SHA-256 of the source span: `fc9d6c44839317ec665dcddb5a2577b612f4e38b7fc695ac4826b9d007a17f7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
