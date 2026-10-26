# `getToolCallActivityArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526223-526243](../../../../../../reference/runtime/sand-eval-runner.cjs#L526223-L526243) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526223-526243](../../../../../../reference/runtime/sand-eval-runner.cjs#L526223-L526243) | 4 | 1 | 0 | 6 | 0 | 1 |

### evaluation:526223

Calls written directly in this body: `JSON.stringify`, `shortenJsonValue`, `tool.args.toJson`.

Assignment or increment targets: `json3`, `text3`.

SHA-256 of the source span: `00d312a8daef47d9a8fa33dfa400a35dec4d72e2e7aab36ea25681706eb45fa9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
