# `isSandAgentOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485320-485322](../../../../../../reference/runtime/host-main.cjs#L485320-L485322) | `FunctionDeclaration` | no | `value` |
| [evaluation:628997-628999](../../../../../../reference/runtime/sand-eval-runner.cjs#L628997-L628999) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485320-485322](../../../../../../reference/runtime/host-main.cjs#L485320-L485322) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628997-628999](../../../../../../reference/runtime/sand-eval-runner.cjs#L628997-L628999) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485320

Calls written directly in this body: `SAND_AGENT_ORIGINS.some`.

SHA-256 of the source span: `b5da00dc5387c352c9916c90dc352920ff90391dc2bc4fa7cc680de84c08f311`.

### evaluation:628997

Calls written directly in this body: `SAND_AGENT_ORIGINS.some`.

SHA-256 of the source span: `b5da00dc5387c352c9916c90dc352920ff90391dc2bc4fa7cc680de84c08f311`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
