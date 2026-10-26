# `createSandAutomationStateTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771930-771956](../../../../../../../../reference/runtime/host-main.cjs#L771930-L771956) | `FunctionDeclaration` | no | `deps, options2` |
| [evaluation:571163-571189](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571163-L571189) | `FunctionDeclaration` | no | `deps, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771930-771956](../../../../../../../../reference/runtime/host-main.cjs#L771930-L771956) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571163-571189](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571163-L571189) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771930

Calls written directly in this body: `Object.assign`, `advertisedAutomationParameters`, `automationToolDescription`, `defineCommunicateTool`.

SHA-256 of the source span: `8d81918b230b2b4d8ec94b03b97bdd5aca77928726ee394b07d9cd17e480cf50`.

### evaluation:571163

Calls written directly in this body: `Object.assign`, `advertisedAutomationParameters`, `automationToolDescription`, `defineCommunicateTool`.

SHA-256 of the source span: `8d81918b230b2b4d8ec94b03b97bdd5aca77928726ee394b07d9cd17e480cf50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
