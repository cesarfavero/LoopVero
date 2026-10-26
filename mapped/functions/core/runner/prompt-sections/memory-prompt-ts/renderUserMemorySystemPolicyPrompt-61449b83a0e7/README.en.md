# `renderUserMemorySystemPolicyPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538005-538040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538005-L538040) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538005-538040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538005-L538040) | 6 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538005

Calls written directly in this body: `.join`, `.trim`, `lines2.join`, `lines2.push`, `readonlyLines.join`, `readonlyLines.push`.

SHA-256 of the source span: `02b8148644ee2dae1637ffff79f7887ec05addd68b5fbe2946aeab068345c75e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
