# `taughtActions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557894-557911](../../../../../../../reference/runtime/host-main.cjs#L557894-L557911) | `FunctionDeclaration` | no | `facts` |
| [evaluation:550702-550719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550702-L550719) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557894-557911](../../../../../../../reference/runtime/host-main.cjs#L557894-L557911) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:550702-550719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550702-L550719) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:557894

Calls written directly in this body: `NEVER_TAUGHT_ANCHORS.has`, `actionValues`, `adminLockRemovesChoice`, `rowOf`, `rowShows`, `taught.push`.

SHA-256 of the source span: `519d7580e12d95d049083edbda17539c3fcaa1a53c4b2309cb1c7233af6d079a`.

### evaluation:550702

Calls written directly in this body: `NEVER_TAUGHT_ANCHORS.has`, `actionValues`, `adminLockRemovesChoice`, `rowOf`, `rowShows`, `taught.push`.

SHA-256 of the source span: `519d7580e12d95d049083edbda17539c3fcaa1a53c4b2309cb1c7233af6d079a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
