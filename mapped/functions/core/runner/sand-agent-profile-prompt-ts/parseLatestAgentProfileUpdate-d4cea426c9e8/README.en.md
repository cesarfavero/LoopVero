# `parseLatestAgentProfileUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-agent-profile-prompt.ts` · [Module README](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529829-529856](../../../../../../reference/runtime/sand-eval-runner.cjs#L529829-L529856) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529829-529856](../../../../../../reference/runtime/sand-eval-runner.cjs#L529829-L529856) | 3 | 1 | 0 | 2 | 0 | 1 |

### evaluation:529829

Calls written directly in this body: `.toString`, `JSON.parse`, `errorLogTag`, `import_node_buffer6.Buffer.from`, `nextAgentProfileUpdateMarker`, `normalizeAgentProfileIdentity`, `process.stderr.write`, `text3.indexOf`, `text3.slice`.

Assignment or increment targets: `latest`, `searchFrom`.

SHA-256 of the source span: `d3c14760d1fa20645e0bd064630e343cee83c956225b2ae1222821766f6f4f34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
