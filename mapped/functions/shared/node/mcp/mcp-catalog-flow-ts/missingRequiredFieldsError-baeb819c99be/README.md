# `missingRequiredFieldsError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-catalog-flow.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686319-686330](../../../../../../../reference/runtime/host-main.cjs#L686319-L686330) | `FunctionDeclaration` | não | `plugin, missing` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686319-686330](../../../../../../../reference/runtime/host-main.cjs#L686319-L686330) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686319

Chamadas escritas diretamente neste corpo: `.join`, `missing.map`, `new SandMcpConfigError`.

SHA-256 do trecho: `b0d3f062cf3115649e45da0df24ff79610c321dfdce68a004afd1cfa9bc84335`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
