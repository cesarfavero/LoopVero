# `resolveAttachmentSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760631-760668](../../../../../../../reference/runtime/host-main.cjs#L760631-L760668) | `FunctionDeclaration` | sim | `ctx, sourceUrl, deps` |
| [evaluation:551446-551483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551446-L551483) | `FunctionDeclaration` | sim | `ctx, sourceUrl, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760631-760668](../../../../../../../reference/runtime/host-main.cjs#L760631-L760668) | 11 | 0 | 3 | 5 | 5 | 1 |
| [evaluation:551446-551483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551446-L551483) | 11 | 0 | 3 | 5 | 5 | 1 |

### host:760631

Chamadas escritas diretamente neste corpo: `deps.getIngestAttachment`, `deps.resolveBoxAttachment`, `deps.storeAttachments.resolve`, `filePathFromFileUrl`, `ingest`, `missingAttachmentMessage`, `new SandToolInputError`, `resolved`, `storedAttachmentSource`, `tooLargeAttachmentMessage`.

Alvos de atribuição ou incremento: `ingestError`.

Alvos de lançamento explícito: `SandToolInputError`, `error64`.

SHA-256 do trecho: `994166bd33aae89c37c1814eb7f7582987ff86290cc6b434ab6f3afc555e7f70`.

### evaluation:551446

Chamadas escritas diretamente neste corpo: `deps.getIngestAttachment`, `deps.resolveBoxAttachment`, `deps.storeAttachments.resolve`, `filePathFromFileUrl`, `ingest`, `missingAttachmentMessage`, `new SandToolInputError`, `resolved`, `storedAttachmentSource`, `tooLargeAttachmentMessage`.

Alvos de atribuição ou incremento: `ingestError`.

Alvos de lançamento explícito: `SandToolInputError`, `error63`.

SHA-256 do trecho: `2524d371a27178a283816dc90d8fbaf6f4c31c490f57fc5b93e9a5313712db35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
