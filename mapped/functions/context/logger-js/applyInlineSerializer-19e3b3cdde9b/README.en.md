# `applyInlineSerializer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225479-225489](../../../../../reference/runtime/host-main.cjs#L225479-L225489) | `FunctionDeclaration` | no | `value, options2, path33, depth` |
| [evaluation:1967-1977](../../../../../reference/runtime/sand-eval-runner.cjs#L1967-L1977) | `FunctionDeclaration` | no | `value, options2, path33, depth` |
| [state-worker:21356-21366](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21356-L21366) | `FunctionDeclaration` | no | `value, options, path, depth` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225479-225489](../../../../../reference/runtime/host-main.cjs#L225479-L225489) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:1967-1977](../../../../../reference/runtime/sand-eval-runner.cjs#L1967-L1977) | 2 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:21356-21366](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21356-L21366) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:225479

Calls written directly in this body: `options2.inlineSerializer`.

SHA-256 of the source span: `6a52b1657b3bbc48c60e5c631b50f59aa2bdf088c764674aa630ab1867f4d63b`.

### evaluation:1967

Calls written directly in this body: `options2.inlineSerializer`.

SHA-256 of the source span: `6a52b1657b3bbc48c60e5c631b50f59aa2bdf088c764674aa630ab1867f4d63b`.

### state-worker:21356

Calls written directly in this body: `options.inlineSerializer`.

SHA-256 of the source span: `222a0d368d97181b9b94a2a133aad34fb6d0c49cf8b6c776b8e129859c54ecf3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
