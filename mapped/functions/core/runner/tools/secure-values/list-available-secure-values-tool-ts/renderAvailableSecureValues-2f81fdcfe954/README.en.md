# `renderAvailableSecureValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767209-767243](../../../../../../../../reference/runtime/host-main.cjs#L767209-L767243) | `FunctionDeclaration` | no | `metadata2, options2` |
| [evaluation:562728-562762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562728-L562762) | `FunctionDeclaration` | no | `metadata2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767209-767243](../../../../../../../../reference/runtime/host-main.cjs#L767209-L767243) | 5 | 3 | 0 | 2 | 0 | 0 |
| [evaluation:562728-562762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562728-L562762) | 5 | 3 | 0 | 2 | 0 | 0 |

### host:767209

Calls written directly in this body: `.sort`, `anySite.push`, `grouped.get`, `grouped.set`, `lines2.join`, `lines2.push`, `listedDomains`, `listedValueLines`, `new Map`, `new Set`, `returnedNames.add`, `secureValueFillsAnySite`.

SHA-256 of the source span: `10d887a2c943a209ac7fc7f998929ce29d5328f60588c36e593bc247b8ed826d`.

### evaluation:562728

Calls written directly in this body: `.sort`, `anySite.push`, `grouped.get`, `grouped.set`, `lines2.join`, `lines2.push`, `listedDomains`, `listedValueLines`, `new Map`, `new Set`, `returnedNames.add`, `secureValueFillsAnySite`.

SHA-256 of the source span: `10d887a2c943a209ac7fc7f998929ce29d5328f60588c36e593bc247b8ed826d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
