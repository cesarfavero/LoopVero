# `snapshotKeyOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767388-767392](../../../../../../../../reference/runtime/host-main.cjs#L767388-L767392) | `FunctionDeclaration` | no | `line` |
| [evaluation:562905-562909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562905-L562909) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767388-767392](../../../../../../../../reference/runtime/host-main.cjs#L767388-L767392) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562905-562909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562905-L562909) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:767388

Calls written directly in this body: `SNAPSHOT_LINE_PATTERN.exec`, `entry.startsWith`, `unquoteSingleQuotedYamlKey`.

SHA-256 of the source span: `215f742d7de39e08e38f9cde08e28da7025b886d6111d1744ec7fea79264e1e0`.

### evaluation:562905

Calls written directly in this body: `SNAPSHOT_LINE_PATTERN.exec`, `entry.startsWith`, `unquoteSingleQuotedYamlKey`.

SHA-256 of the source span: `215f742d7de39e08e38f9cde08e28da7025b886d6111d1744ec7fea79264e1e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
