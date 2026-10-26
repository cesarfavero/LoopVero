# `offerable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756300-756303](../../../../../../../reference/runtime/host-main.cjs#L756300-L756303) | `FunctionDeclaration` | no | `rule` |
| [evaluation:542221-542224](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542221-L542224) | `FunctionDeclaration` | no | `rule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756300-756303](../../../../../../../reference/runtime/host-main.cjs#L756300-L756303) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542221-542224](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542221-L542224) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:756300

Calls written directly in this body: `rule.trim`.

SHA-256 of the source span: `ee5cc8177a49fc310ce4fa4db7a8b726eb93c3be43959c4ee5423410e3904458`.

### evaluation:542221

Calls written directly in this body: `rule.trim`.

SHA-256 of the source span: `ee5cc8177a49fc310ce4fa4db7a8b726eb93c3be43959c4ee5423410e3904458`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
