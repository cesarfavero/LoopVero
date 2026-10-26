# `readTranscriptPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/session/agent-db-transcript-pages.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-transcript-pages-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718096-718120](../../../../../../../reference/runtime/host-main.cjs#L718096-L718120) | `FunctionDeclaration` | não | `statements, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718096-718120](../../../../../../../reference/runtime/host-main.cjs#L718096-L718120) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:718096

Chamadas escritas diretamente neste corpo: `entries.push`, `parseSandSpendInitiationEntry`, `parseTranscriptEntry`, `rows.slice`, `selected.at`, `selected.toReversed`, `statements.listTranscriptPage.all`.

SHA-256 do trecho: `9b3395b8a5957434064bcf856dede44581ad08d8422a663c2f8a431ca817dd9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
