# `createServerTranscriptTail/decodeBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713171-713190](../../../../../../../reference/runtime/host-main.cjs#L713171-L713190) | `ArrowFunctionExpression` | não | `body, seq2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713171-713190](../../../../../../../reference/runtime/host-main.cjs#L713171-L713190) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:713171

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Number`, `decoder3.decode`, `deps.log`, `errorLogTag`, `transcriptEntryOfJson`.

Alvos de atribuição ou incremento: `droppedRows`, `parsed2`.

SHA-256 do trecho: `0fd44e3c548e93a17073a97af35655e863896d5bc60405ebe115a041c9857a0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
