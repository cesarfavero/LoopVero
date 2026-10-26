# `SandWebhookCredentialService.readKeys`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/webhook-credential-service.ts` · [Module README](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505835-505863](../../../../../../../reference/runtime/host-main.cjs#L505835-L505863) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505835-505863](../../../../../../../reference/runtime/host-main.cjs#L505835-L505863) | 6 | 0 | 2 | 7 | 0 | 2 |

### host:505835

Calls written directly in this body: `.toString`, `JSON.parse`, `errorLogTag`, `findSystemErrno`, `isRefusedSandDataFile`, `persistedWebhookKeysSchema.safeParse`, `readHostOwnedFile`, `this.deps.fs.readFile`, `this.log`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `36b0be5c1e1b0808704d8e5709b0706e75e79c9f794b54af3553c61ea2d4d92e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
