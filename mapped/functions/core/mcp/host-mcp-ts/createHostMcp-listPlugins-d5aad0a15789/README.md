# `createHostMcp/listPlugins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701210-701220](../../../../../../reference/runtime/host-main.cjs#L701210-L701220) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701210-701220](../../../../../../reference/runtime/host-main.cjs#L701210-L701220) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701210

Chamadas escritas diretamente neste corpo: `.catch`, `Promise.all`, `manager.getCatalog`, `manager.listEffectivePlugins`, `manager.listServersFromCache`, `views.map`.

SHA-256 do trecho: `6c5e2ddfc173a5ac8749bbbb6743ca71440eef7dfbce17aa6ce936d5441dc9b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
