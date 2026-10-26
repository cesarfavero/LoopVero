# `McpHostService.scheduleStatusFollowUps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-service.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701622-701656](../../../../../../../reference/runtime/host-main.cjs#L701622-L701656) | `method` | não | `servers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701622-701656](../../../../../../../reference/runtime/host-main.cjs#L701622-L701656) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:701622

Chamadas escritas diretamente neste corpo: `this.statusFollowUps.has`, `this.statusFollowUps.set`.

SHA-256 do trecho: `617b02853d27cd4a6b93d98c6683d0aa80220a46ee4eb5600f8d0f93d5e6b173`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
