# `materializeAutomationMemoryInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `agent-engine/prompts/bugbot/automations.js` · [Module README](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:631445-631452](../../../../../../../reference/runtime/host-main.cjs#L631445-L631452) | `FunctionDeclaration` | no | `automationInstructions, stores` |
| [evaluation:410630-410637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410630-L410637) | `FunctionDeclaration` | no | `automationInstructions, stores` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631445-631452](../../../../../../../reference/runtime/host-main.cjs#L631445-L631452) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:410630-410637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410630-L410637) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:631445

Calls written directly in this body: `.join`, `automationInstructions.includes`, `automationInstructions.split`, `buildAutomationMemoryInstruction`, `resolveAutomationMemoryDirectory`.

SHA-256 of the source span: `51141d647f3c5f0965c0cb899cb64890b1da6f2612cc7f069fb497a02cdf6402`.

### evaluation:410630

Calls written directly in this body: `.join`, `automationInstructions.includes`, `automationInstructions.split`, `buildAutomationMemoryInstruction`, `resolveAutomationMemoryDirectory`.

SHA-256 of the source span: `51141d647f3c5f0965c0cb899cb64890b1da6f2612cc7f069fb497a02cdf6402`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
