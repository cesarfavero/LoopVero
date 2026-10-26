# `resolveBoxMediaAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-encoding.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:550591-550620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550591-L550620) | `FunctionDeclaration` | yes | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:550591-550620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550591-L550620) | 7 | 0 | 3 | 10 | 0 | 3 |

### evaluation:550591

Calls written directly in this body: `downloadBoxFiles`, `files.get`, `grokBotPersistedImageClientUrl`, `imageMimeFromPath`, `isBoxRootPath`, `persistImage`, `request3.persistMediaBytes`.

Assignment or increment targets: `data2`.

SHA-256 of the source span: `7c876ddccaeb00b98147cf361eceb819507fea2aeaaa12d95f550f27ce78bf9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
