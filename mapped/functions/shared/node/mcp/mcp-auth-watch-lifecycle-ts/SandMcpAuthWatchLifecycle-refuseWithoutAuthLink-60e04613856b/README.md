# `SandMcpAuthWatchLifecycle.refuseWithoutAuthLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685946-685981](../../../../../../../reference/runtime/host-main.cjs#L685946-L685981) | `method` | sim | `attempt, status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685946-685981](../../../../../../../reference/runtime/host-main.cjs#L685946-L685981) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:685946

Chamadas escritas diretamente neste corpo: `brandedConnectorAuthProbeError`, `stripMarkupAndBoundConnectorError`, `this.failWithoutLink`, `this.reportFlowStartRefused`.

SHA-256 do trecho: `9ca720bbc67d48b18eb4efaae1b99a5348c987a476b9a131db62657d8346394f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
