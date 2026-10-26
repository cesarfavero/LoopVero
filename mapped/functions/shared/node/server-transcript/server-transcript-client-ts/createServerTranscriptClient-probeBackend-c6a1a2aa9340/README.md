# `createServerTranscriptClient/probeBackend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-client.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712441-712454](../../../../../../../reference/runtime/host-main.cjs#L712441-L712454) | `FunctionExpression` | sim | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712441-712454](../../../../../../../reference/runtime/host-main.cjs#L712441-L712454) | 4 | 0 | 1 | 4 | 1 | 1 |

### host:712441

Chamadas escritas diretamente neste corpo: `fetchBackendRouteStatus`, `isBackendDownError`, `isBackendDownStatus`, `lastBaseUrl.replace`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b2155ce821ecec1ce004b84e46d99e46d477443173a023f897bb5d521ec35f96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
