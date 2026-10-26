# `renderSavedLogins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767244-767256](../../../../../../../../reference/runtime/host-main.cjs#L767244-L767256) | `FunctionDeclaration` | no | `site, logins` |
| [evaluation:562763-562775](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562763-L562775) | `FunctionDeclaration` | no | `site, logins` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767244-767256](../../../../../../../../reference/runtime/host-main.cjs#L767244-L767256) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562763-562775](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562763-L562775) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767244

Calls written directly in this body: `.join`, `logins.map`.

SHA-256 of the source span: `49871716909e8011f3eea98350c7ceee52128e5fbbb27aa265e0f5593f3a7771`.

### evaluation:562763

Calls written directly in this body: `.join`, `logins.map`.

SHA-256 of the source span: `49871716909e8011f3eea98350c7ceee52128e5fbbb27aa265e0f5593f3a7771`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
