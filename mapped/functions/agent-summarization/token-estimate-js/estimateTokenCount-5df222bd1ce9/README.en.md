# `estimateTokenCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/token-estimate.js` · [Module README](../../../../modules/agent-summarization/token-estimate-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620673-620693](../../../../../reference/runtime/host-main.cjs#L620673-L620693) | `FunctionDeclaration` | no | `messages2, options2` |
| [evaluation:305027-305047](../../../../../reference/runtime/sand-eval-runner.cjs#L305027-L305047) | `FunctionDeclaration` | no | `messages, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620673-620693](../../../../../reference/runtime/host-main.cjs#L620673-L620693) | 3 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:305027-305047](../../../../../reference/runtime/sand-eval-runner.cjs#L305027-L305047) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:620673

Calls written directly in this body: `Array.isArray`, `Math.ceil`, `estimatePartChars`, `getTextLen`, `isRedactedString`.

Assignment or increment targets: `totalChars`.

SHA-256 of the source span: `4f230b1bfbf73802378e8360aaff87ab63bad5e534f3379f98f57c00fc26818d`.

### evaluation:305027

Calls written directly in this body: `Array.isArray`, `Math.ceil`, `estimatePartChars`, `getTextLen`, `isRedactedString`.

Assignment or increment targets: `totalChars`.

SHA-256 of the source span: `4de23693d7f49b94a6c44c1cc369d606b588dd5c7ca645f9fa997590bfe82727`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
