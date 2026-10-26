# `normalizeReactionEmoji`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485459-485462](../../../../../../reference/runtime/host-main.cjs#L485459-L485462) | `FunctionDeclaration` | no | `raw` |
| [evaluation:475191-475194](../../../../../../reference/runtime/sand-eval-runner.cjs#L475191-L475194) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485459-485462](../../../../../../reference/runtime/host-main.cjs#L485459-L485462) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475191-475194](../../../../../../reference/runtime/sand-eval-runner.cjs#L475191-L475194) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485459

Calls written directly in this body: `.replace`, `.toLowerCase`, `.trim`, `bare.split`, `raw.trim`.

SHA-256 of the source span: `22ca730578b19eabc8e1cca8c6ba748dd81def48e5649264f03b6a6093379a40`.

### evaluation:475191

Calls written directly in this body: `.replace`, `.toLowerCase`, `.trim`, `bare.split`, `raw.trim`.

SHA-256 of the source span: `22ca730578b19eabc8e1cca8c6ba748dd81def48e5649264f03b6a6093379a40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
