# `isSandAgentPurpose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485324-485326](../../../../../../reference/runtime/host-main.cjs#L485324-L485326) | `FunctionDeclaration` | no | `value` |
| [evaluation:629001-629003](../../../../../../reference/runtime/sand-eval-runner.cjs#L629001-L629003) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485324-485326](../../../../../../reference/runtime/host-main.cjs#L485324-L485326) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629001-629003](../../../../../../reference/runtime/sand-eval-runner.cjs#L629001-L629003) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485324

Calls written directly in this body: `SAND_AGENT_PURPOSES.some`.

SHA-256 of the source span: `b42a838d14de9f6a20f76e77d70145174c5f697ce0d1ceb89e001c0bd3a44a39`.

### evaluation:629001

Calls written directly in this body: `SAND_AGENT_PURPOSES.some`.

SHA-256 of the source span: `b42a838d14de9f6a20f76e77d70145174c5f697ce0d1ceb89e001c0bd3a44a39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
