# `unwrapPlanContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:619948-619951](../../../../../reference/runtime/host-main.cjs#L619948-L619951) | `FunctionDeclaration` | no | `plan` |
| [evaluation:304302-304305](../../../../../reference/runtime/sand-eval-runner.cjs#L304302-L304305) | `FunctionDeclaration` | no | `plan` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619948-619951](../../../../../reference/runtime/host-main.cjs#L619948-L619951) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304302-304305](../../../../../reference/runtime/sand-eval-runner.cjs#L304302-L304305) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:619948

Calls written directly in this body: `plan.content.unwrap`, `rawContent.trim`.

SHA-256 of the source span: `9323a8dcafabc4eacacb75fdbcc7765b98a01da8e9aacb114d30ca5dfd2c309e`.

### evaluation:304302

Calls written directly in this body: `plan.content.unwrap`, `rawContent.trim`.

SHA-256 of the source span: `9323a8dcafabc4eacacb75fdbcc7765b98a01da8e9aacb114d30ca5dfd2c309e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
