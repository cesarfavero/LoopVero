# `shouldForceSummarizationForTesting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621312-621358](../../../../../reference/runtime/host-main.cjs#L621312-L621358) | `FunctionDeclaration` | no | `messages2, evalCompletionMode` |
| [evaluation:305666-305712](../../../../../reference/runtime/sand-eval-runner.cjs#L305666-L305712) | `FunctionDeclaration` | no | `messages, evalCompletionMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621312-621358](../../../../../reference/runtime/host-main.cjs#L621312-L621358) | 18 | 0 | 0 | 10 | 0 | 1 |
| [evaluation:305666-305712](../../../../../reference/runtime/sand-eval-runner.cjs#L305666-L305712) | 18 | 0 | 0 | 10 | 0 | 1 |

### host:621312

Calls written directly in this body: `.trim`, `Number.isFinite`, `Number.parseInt`, `import_node_fs63.default.readFileSync`, `import_node_fs63.default.rmSync`, `isToolResult`, `messages2.filter`, `strategy.includes`, `strategy.split`, `strategy.startsWith`.

SHA-256 of the source span: `a832b0af83afd05d0bcb5c3fb3572952527ccb2b692f9d3de8bce3ef948054e0`.

### evaluation:305666

Calls written directly in this body: `.trim`, `Number.isFinite`, `Number.parseInt`, `import_node_fs4.default.readFileSync`, `import_node_fs4.default.rmSync`, `isToolResult`, `messages.filter`, `strategy.includes`, `strategy.split`, `strategy.startsWith`.

SHA-256 of the source span: `2566ebf17cecf0d9806710a9d5962b10db56b99ceab625527e100b4a1ff8bf4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
