# `recoverTriggerModelSentAsJsonEncodedString`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/trigger-schema.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762299-762308](../../../../../../../../reference/runtime/host-main.cjs#L762299-L762308) | `FunctionDeclaration` | no | `value` |
| [evaluation:554909-554918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554909-L554918) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762299-762308](../../../../../../../../reference/runtime/host-main.cjs#L762299-L762308) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:554909-554918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554909-L554918) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:762299

Calls written directly in this body: `JSON.parse`, `reportShim`, `stringifiedTrigger.applied`, `trimmed.startsWith`, `value.trim`.

SHA-256 of the source span: `b7d7801c33d6d2b8472c8f2e551e7eb43ac6f4b79d904b4666c8786d89eb5e01`.

### evaluation:554909

Calls written directly in this body: `JSON.parse`, `reportShim`, `stringifiedTrigger.applied`, `trimmed.startsWith`, `value.trim`.

SHA-256 of the source span: `b7d7801c33d6d2b8472c8f2e551e7eb43ac6f4b79d904b4666c8786d89eb5e01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
