# `toolDefinitionForHash`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546435-546457](../../../../../../reference/runtime/sand-eval-runner.cjs#L546435-L546457) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546435-546457](../../../../../../reference/runtime/sand-eval-runner.cjs#L546435-L546457) | 5 | 0 | 0 | 2 | 0 | 1 |

### evaluation:546435

Calls written directly in this body: `JSON.stringify`, `jsonSchemaOf`, `sha256HexOfText`, `toolShaByIdentity.get`, `toolShaByIdentity.set`.

Assignment or increment targets: `serialized`.

SHA-256 of the source span: `1f98464f20213fe1504b15e4cfec42a14332daec02d1f5b55a88e157eec62ae0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
