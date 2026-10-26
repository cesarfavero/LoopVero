# `parseEmailFromAddresses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716263-716273](../../../../../../reference/runtime/host-main.cjs#L716263-L716273) | `FunctionDeclaration` | no | `raw` |
| [evaluation:527946-527956](../../../../../../reference/runtime/sand-eval-runner.cjs#L527946-L527956) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716263-716273](../../../../../../reference/runtime/host-main.cjs#L716263-L716273) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527946-527956](../../../../../../reference/runtime/sand-eval-runner.cjs#L527946-L527956) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:716263

Calls written directly in this body: `Array.isArray`, `addresses.includes`, `addresses.push`, `normalizeEmailAddress`.

SHA-256 of the source span: `036c9e3af5307f4e2fbdef43e69ec5a8d0d751b52be908459f0938f0af913028`.

### evaluation:527946

Calls written directly in this body: `Array.isArray`, `addresses.includes`, `addresses.push`, `normalizeEmailAddress`.

SHA-256 of the source span: `036c9e3af5307f4e2fbdef43e69ec5a8d0d751b52be908459f0938f0af913028`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
