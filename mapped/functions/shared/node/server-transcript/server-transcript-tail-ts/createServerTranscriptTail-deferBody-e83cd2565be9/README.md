# `createServerTranscriptTail/deferBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-tail.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:713283-713296](../../../../../../../reference/runtime/host-main.cjs#L713283-L713296) | `ArrowFunctionExpression` | não | `state, row, arrival` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713283-713296](../../../../../../../reference/runtime/host-main.cjs#L713283-L713296) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:713283

Chamadas escritas diretamente neste corpo: `deps.log`, `noteBodyLost`, `scheduleBodyRetry`, `state.pendingBodies.delete`, `state.pendingBodies.get`, `state.pendingBodies.set`.

SHA-256 do trecho: `c4ba41081d9792b2b2c6bcbe24ed3778db63c7836e74b558f8aa1c3dfb0dbf8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
