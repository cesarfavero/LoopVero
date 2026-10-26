# `classifyServerAgentActionError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-action-core.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:710160-710250](../../../../../../../reference/runtime/host-main.cjs#L710160-L710250) | `FunctionDeclaration` | não | `error64, method` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710160-710250](../../../../../../../reference/runtime/host-main.cjs#L710160-L710250) | 20 | 0 | 0 | 14 | 0 | 0 |

### host:710160

Chamadas escritas diretamente neste corpo: `SEND_LENGTH_REFUSAL.test`, `String`, `describeConnectFailure`, `error64.metadata.get`, `secretSaveRefused`, `unreachable2`.

SHA-256 do trecho: `1774ce54aba7561e4e71d803009686dd0e27b2ceb1db449ecbbf75ff61553b54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
