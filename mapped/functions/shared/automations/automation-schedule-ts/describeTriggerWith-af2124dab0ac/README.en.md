# `describeTriggerWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682947-682954](../../../../../../reference/runtime/host-main.cjs#L682947-L682954) | `FunctionDeclaration` | no | `trigger2, describeCron` |
| [evaluation:527171-527178](../../../../../../reference/runtime/sand-eval-runner.cjs#L527171-L527178) | `FunctionDeclaration` | no | `trigger, describeCron` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682947-682954](../../../../../../reference/runtime/host-main.cjs#L682947-L682954) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527171-527178](../../../../../../reference/runtime/sand-eval-runner.cjs#L527171-L527178) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682947

Calls written directly in this body: `.join`, `describeMember`, `rest.map`, `triggerList`.

SHA-256 of the source span: `88751ab39e4c4df6a165dba33d52f37c73d801582788f2af96701ebd0f503747`.

### evaluation:527171

Calls written directly in this body: `.join`, `describeMember`, `rest.map`, `triggerList`.

SHA-256 of the source span: `4e22dc3a69117c042d6eaa92964741d7afd8864c3eaa778beb2754a2d5ef9972`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
