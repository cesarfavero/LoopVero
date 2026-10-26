# `siteBlockDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/report-site-blocked-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/report-site-blocked-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776710-776719](../../../../../../../../reference/runtime/host-main.cjs#L776710-L776719) | `FunctionDeclaration` | no | `site` |
| [evaluation:576361-576370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576361-L576370) | `FunctionDeclaration` | no | `site` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776710-776719](../../../../../../../../reference/runtime/host-main.cjs#L776710-L776719) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:576361-576370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576361-L576370) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:776710

Calls written directly in this body: `URL_SCHEME_RE.test`, `boundedSiteBucket`, `new URL`, `site.trim`.

Assignment or increment targets: `hostname4`.

SHA-256 of the source span: `75351e3db2c6b4105344a82fe81d3e747e05cca17b86a45f635dd6403d5aafdd`.

### evaluation:576361

Calls written directly in this body: `URL_SCHEME_RE.test`, `boundedSiteBucket`, `new URL`, `site.trim`.

Assignment or increment targets: `hostname3`.

SHA-256 of the source span: `887200eb47068c598bfa176ec43f9358613b5045c54070eaaa451e6a3d613d64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
