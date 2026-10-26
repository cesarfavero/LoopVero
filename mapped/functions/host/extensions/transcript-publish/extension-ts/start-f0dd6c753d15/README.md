# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript-publish/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript-publish/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784295-784375](../../../../../../../reference/runtime/host-main.cjs#L784295-L784375) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784295-784375](../../../../../../../reference/runtime/host-main.cjs#L784295-L784375) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784295

Chamadas escritas diretamente neste corpo: `.then`, `context2.onStop`, `createPublishSoon`, `createSandCursorBackendClient`, `getSandAgentsRootDir`, `getSandRootDir`, `new TranscriptEntryPublisher`, `publisher.sweepAllAgents`, `subscribeTranscriptMutations`.

SHA-256 do trecho: `0b579d869f655330c3bb446a72084f96203bdf537fa145fa9b4d191cf5f9fb83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
