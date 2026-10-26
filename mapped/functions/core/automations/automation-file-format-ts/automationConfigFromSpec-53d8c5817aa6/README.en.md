# `automationConfigFromSpec`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716641-716663](../../../../../../reference/runtime/host-main.cjs#L716641-L716663) | `FunctionDeclaration` | no | `spec, args` |
| [evaluation:627355-627377](../../../../../../reference/runtime/sand-eval-runner.cjs#L627355-L627377) | `FunctionDeclaration` | no | `spec, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716641-716663](../../../../../../reference/runtime/host-main.cjs#L716641-L716663) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627355-627377](../../../../../../reference/runtime/sand-eval-runner.cjs#L627355-L627377) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:716641

Calls written directly in this body: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 of the source span: `414011813051337540fc904ef1878f1a1fc6ba65a5b89198d9f7a6c2c0ed6c03`.

### evaluation:627355

Calls written directly in this body: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 of the source span: `c0daf81bf84ea62101bc29eabc7af8f97e00b511822c2247f816687549742a4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
