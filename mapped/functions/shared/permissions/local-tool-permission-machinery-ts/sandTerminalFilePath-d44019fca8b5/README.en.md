# `sandTerminalFilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `shared/permissions/local-tool-permission-machinery.ts` · [Module README](../../../../../modules/shared/permissions/local-tool-permission-machinery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590162-590165](../../../../../../reference/runtime/host-main.cjs#L590162-L590165) | `FunctionDeclaration` | no | `terminalsFolder, shellId` |
| [evaluation:529927-529930](../../../../../../reference/runtime/sand-eval-runner.cjs#L529927-L529930) | `FunctionDeclaration` | no | `terminalsFolder, shellId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590162-590165](../../../../../../reference/runtime/host-main.cjs#L590162-L590165) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529927-529930](../../../../../../reference/runtime/sand-eval-runner.cjs#L529927-L529930) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:590162

Calls written directly in this body: `normalizeSeparators`.

SHA-256 of the source span: `a582a2913a76bbc18ca92d07151fe011a4d843e9148540c455ac78b367c10aab`.

### evaluation:529927

Calls written directly in this body: `normalizeSeparators`.

SHA-256 of the source span: `a582a2913a76bbc18ca92d07151fe011a4d843e9148540c455ac78b367c10aab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
