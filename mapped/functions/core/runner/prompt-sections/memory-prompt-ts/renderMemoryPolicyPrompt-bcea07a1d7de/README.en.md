# `renderMemoryPolicyPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537754-537790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537754-L537790) | `FunctionDeclaration` | no | `location, opts, includeSourceTagGuidance = true` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537754-537790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537754-L537790) | 8 | 0 | 0 | 3 | 0 | 0 |

### evaluation:537754

Calls written directly in this body: `.join`, `.trim`, `lines2.join`, `lines2.push`, `lines3.join`, `lines3.push`, `memoryLegendLine`, `memoryOpeningLine`, `memoryPersistenceLine`, `renderMemoryConversationScopeStory`.

SHA-256 of the source span: `c6cfefa78762239b3dacf09111a592e180866aecc9dfad744f20427a0bcfbb33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
