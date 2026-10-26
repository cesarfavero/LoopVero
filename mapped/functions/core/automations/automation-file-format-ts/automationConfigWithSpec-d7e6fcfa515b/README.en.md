# `automationConfigWithSpec`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716664-716680](../../../../../../reference/runtime/host-main.cjs#L716664-L716680) | `FunctionDeclaration` | no | `config2, spec, provenance, minimumIntervalMs` |
| [evaluation:627378-627394](../../../../../../reference/runtime/sand-eval-runner.cjs#L627378-L627394) | `FunctionDeclaration` | no | `config2, spec, provenance, minimumIntervalMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716664-716680](../../../../../../reference/runtime/host-main.cjs#L716664-L716680) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627378-627394](../../../../../../reference/runtime/sand-eval-runner.cjs#L627378-L627394) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:716664

Calls written directly in this body: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 of the source span: `928c9dd23555178ab69404aab47bc51e808149a6d56da012e0454041e9a018a9`.

### evaluation:627378

Calls written directly in this body: `clampAutomationName`, `normalizeAutomationPrompt`, `normalizeAutomationSpecTrigger`.

SHA-256 of the source span: `d0bdf8095112f3d1d45738ebe28b52f8ae6da1b1f2bbe56208b61db4cf21d522`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
