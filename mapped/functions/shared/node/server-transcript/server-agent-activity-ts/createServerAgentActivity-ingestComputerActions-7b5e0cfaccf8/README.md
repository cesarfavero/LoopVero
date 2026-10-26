# `createServerAgentActivity/ingestComputerActions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711138-711148](../../../../../../../reference/runtime/host-main.cjs#L711138-L711148) | `FunctionExpression` | não | `frame` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711138-711148](../../../../../../../reference/runtime/host-main.cjs#L711138-L711148) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:711138

Chamadas escritas diretamente neste corpo: `computerActionEventOf`, `deps.emitComputerAction`, `isSandSubagentId`, `parseAgentId`, `shouldEmit`.

SHA-256 do trecho: `d73a0e4591be044df3126fe4b54adf1645855fd97a78c47d36e352f91c40e61a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
