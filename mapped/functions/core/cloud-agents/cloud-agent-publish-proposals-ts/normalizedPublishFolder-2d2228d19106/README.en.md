# `normalizedPublishFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-publish-proposals.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-publish-proposals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509404-509407](../../../../../../reference/runtime/host-main.cjs#L509404-L509407) | `FunctionDeclaration` | no | `projectDir` |
| [evaluation:490304-490307](../../../../../../reference/runtime/sand-eval-runner.cjs#L490304-L490307) | `FunctionDeclaration` | no | `projectDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509404-509407](../../../../../../reference/runtime/host-main.cjs#L509404-L509407) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490304-490307](../../../../../../reference/runtime/sand-eval-runner.cjs#L490304-L490307) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:509404

Calls written directly in this body: `.filter`, `.split`, `segments.join`.

SHA-256 of the source span: `8a69623713f89bc49ec14f3724e360a76650ff358835d752924b4c65e7154e61`.

### evaluation:490304

Calls written directly in this body: `.filter`, `.split`, `segments.join`.

SHA-256 of the source span: `8a69623713f89bc49ec14f3724e360a76650ff358835d752924b4c65e7154e61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
