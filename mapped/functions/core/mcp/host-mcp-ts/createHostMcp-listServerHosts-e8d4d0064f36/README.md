# `createHostMcp/listServerHosts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701206-701209](../../../../../../reference/runtime/host-main.cjs#L701206-L701209) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701206-701209](../../../../../../reference/runtime/host-main.cjs#L701206-L701209) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701206

Chamadas escritas diretamente neste corpo: `.getUserServerConfigs`, `displayServerHosts`, `manager.definitionSourceView`, `manager.lastAccountDisplayConfigView`, `restMcpHost`.

SHA-256 do trecho: `1e30d31d35592424a83066da686a4b6bf25d8dfed848743cac7667178cd3db0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
