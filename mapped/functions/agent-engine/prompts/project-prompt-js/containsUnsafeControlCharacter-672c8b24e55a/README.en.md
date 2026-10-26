# `containsUnsafeControlCharacter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640976-640984](../../../../../../reference/runtime/host-main.cjs#L640976-L640984) | `FunctionDeclaration` | no | `value` |
| [evaluation:431589-431597](../../../../../../reference/runtime/sand-eval-runner.cjs#L431589-L431597) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640976-640984](../../../../../../reference/runtime/host-main.cjs#L640976-L640984) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:431589-431597](../../../../../../reference/runtime/sand-eval-runner.cjs#L431589-L431597) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:640976

Calls written directly in this body: `character.codePointAt`.

SHA-256 of the source span: `f2ba71d149da545381abc60912cdc85832e7bfe7f80f3610078c00ff0fd28fbe`.

### evaluation:431589

Calls written directly in this body: `character.codePointAt`.

SHA-256 of the source span: `f2ba71d149da545381abc60912cdc85832e7bfe7f80f3610078c00ff0fd28fbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
