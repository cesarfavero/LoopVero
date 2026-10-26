# `renderTranscriptFilePage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771391-771416](../../../../../../../../reference/runtime/host-main.cjs#L771391-L771416) | `FunctionDeclaration` | no | `args` |
| [evaluation:570625-570650](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570625-L570650) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771391-771416](../../../../../../../../reference/runtime/host-main.cjs#L771391-L771416) | 4 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:570625-570650](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570625-L570650) | 4 | 1 | 0 | 1 | 1 | 0 |

### host:771391

Calls written directly in this body: `.join`, `String`, `args.text.split`, `lines2.at`, `lines2.pop`, `new SandModelVisibleError`, `page.push`.

Assignment or increment targets: `budget`, `number6`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `6fafbdc9db5f1a25dc2b28a8263a147b11328c1e646c188d22c903a68f7e7808`.

### evaluation:570625

Calls written directly in this body: `.join`, `String`, `args.text.split`, `lines2.at`, `lines2.pop`, `new SandModelVisibleError`, `page.push`.

Assignment or increment targets: `budget`, `number6`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `6fafbdc9db5f1a25dc2b28a8263a147b11328c1e646c188d22c903a68f7e7808`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
