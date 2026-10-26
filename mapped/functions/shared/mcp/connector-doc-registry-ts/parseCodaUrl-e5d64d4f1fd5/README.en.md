# `parseCodaUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774180-774185](../../../../../../reference/runtime/host-main.cjs#L774180-L774185) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573395-573400](../../../../../../reference/runtime/sand-eval-runner.cjs#L573395-L573400) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774180-774185](../../../../../../reference/runtime/host-main.cjs#L774180-L774185) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573395-573400](../../../../../../reference/runtime/sand-eval-runner.cjs#L573395-L573400) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:774180

Calls written directly in this body: `/_d([A-Za-z0-9_-]{6,})$/.exec`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `96c2b0504432cb67de4da8bbb76c9156eef9b01d49003caa2989c0e00fdfa588`.

### evaluation:573395

Calls written directly in this body: `/_d([A-Za-z0-9_-]{6,})$/.exec`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `96c2b0504432cb67de4da8bbb76c9156eef9b01d49003caa2989c0e00fdfa588`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
