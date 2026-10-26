# `readAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771911-771929](../../../../../../../../reference/runtime/host-main.cjs#L771911-L771929) | `FunctionDeclaration` | no | `deps, id` |
| [evaluation:571144-571162](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571144-L571162) | `FunctionDeclaration` | no | `deps, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771911-771929](../../../../../../../../reference/runtime/host-main.cjs#L771911-L771929) | 5 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:571144-571162](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571144-L571162) | 5 | 0 | 0 | 2 | 2 | 0 |

### host:771911

Calls written directly in this body: `.find`, `.join`, `JSON.stringify`, `cronTimingLines`, `deps.activeAutomationWakeId`, `deps.automationStore.list`, `deps.canCreateAutomation`, `describeTriggerWithWindow`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `763425944041540b62756c8f2ddb089fa4bc51c6495188030227ee0d31949637`.

### evaluation:571144

Calls written directly in this body: `.find`, `.join`, `JSON.stringify`, `cronTimingLines`, `deps.activeAutomationWakeId`, `deps.automationStore.list`, `deps.canCreateAutomation`, `describeTriggerWithWindow`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `763425944041540b62756c8f2ddb089fa4bc51c6495188030227ee0d31949637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
