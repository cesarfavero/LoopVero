# `listMessageBlobIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765759-765768](../../../../../../reference/runtime/host-main.cjs#L765759-L765768) | `FunctionDeclaration` | sim | `ctx, blobStore, state` |
| [evaluation:559124-559133](../../../../../../reference/runtime/sand-eval-runner.cjs#L559124-L559133) | `FunctionDeclaration` | sim | `ctx, blobStore, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765759-765768](../../../../../../reference/runtime/host-main.cjs#L765759-L765768) | 1 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:559124-559133](../../../../../../reference/runtime/sand-eval-runner.cjs#L559124-L559133) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:765759

Chamadas escritas diretamente neste corpo: `ConversationSummaryArchive.fromBinary`, `blobStore.getBlob`, `ids.push`.

SHA-256 do trecho: `2f68c91c18d29a0616599d6335a5086829a318dbc6514770514dac9912f5cb55`.

### evaluation:559124

Chamadas escritas diretamente neste corpo: `ConversationSummaryArchive.fromBinary`, `blobStore.getBlob`, `ids.push`.

SHA-256 do trecho: `2f68c91c18d29a0616599d6335a5086829a318dbc6514770514dac9912f5cb55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
