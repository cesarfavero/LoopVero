# `SandMcpAuthWatchLifecycle.refuseBeforeProbe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685817-685841](../../../../../../../reference/runtime/host-main.cjs#L685817-L685841) | `method` | sim | `attempt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685817-685841](../../../../../../../reference/runtime/host-main.cjs#L685817-L685841) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:685817

Chamadas escritas diretamente neste corpo: `this.reportFlowStartRefused`, `this.withheldReason`.

SHA-256 do trecho: `b5aab770105994f9bf390ff361657aec3526cf1cd21adea1fb52950455666f59`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
