# `parseCronTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716297-716301](../../../../../../reference/runtime/host-main.cjs#L716297-L716301) | `FunctionDeclaration` | no | `value` |
| [evaluation:527980-527984](../../../../../../reference/runtime/sand-eval-runner.cjs#L527980-L527984) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716297-716301](../../../../../../reference/runtime/host-main.cjs#L716297-L716301) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527980-527984](../../../../../../reference/runtime/sand-eval-runner.cjs#L527980-L527984) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:716297

Calls written directly in this body: `parseCronWindow`.

SHA-256 of the source span: `e83ce81e4c24991801ba1a45a88f5b797b664313c69ad20d6a74923ea2d9e1bf`.

### evaluation:527980

Calls written directly in this body: `parseCronWindow`.

SHA-256 of the source span: `e83ce81e4c24991801ba1a45a88f5b797b664313c69ad20d6a74923ea2d9e1bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
