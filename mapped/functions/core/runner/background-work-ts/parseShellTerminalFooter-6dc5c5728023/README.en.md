# `parseShellTerminalFooter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590203-590221](../../../../../../reference/runtime/host-main.cjs#L590203-L590221) | `FunctionDeclaration` | no | `content` |
| [evaluation:490463-490481](../../../../../../reference/runtime/sand-eval-runner.cjs#L490463-L490481) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590203-590221](../../../../../../reference/runtime/host-main.cjs#L590203-L590221) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:490463-490481](../../../../../../reference/runtime/sand-eval-runner.cjs#L490463-L490481) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:590203

Calls written directly in this body: `.trim`, `/(?:^|\n)ended_at:\s*\S/.test`, `Number`, `Number.isInteger`, `content.match`, `footer.match`.

SHA-256 of the source span: `04b53c7f98b446bfbc5b207fc292f7b35bda0517e6f702bba341480edcd79566`.

### evaluation:490463

Calls written directly in this body: `.trim`, `/(?:^|\n)ended_at:\s*\S/.test`, `Number`, `Number.isInteger`, `content.match`, `footer.match`.

SHA-256 of the source span: `30891b4409f56eca58d8a9903d622d85860e75e4ce50154aaa686b1d94817ee0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
