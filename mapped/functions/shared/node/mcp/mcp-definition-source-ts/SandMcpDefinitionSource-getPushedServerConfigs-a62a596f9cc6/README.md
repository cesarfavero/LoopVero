# `SandMcpDefinitionSource.getPushedServerConfigs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-definition-source.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686712-686717](../../../../../../../reference/runtime/host-main.cjs#L686712-L686717) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686712-686717](../../../../../../../reference/runtime/host-main.cjs#L686712-L686717) | 1 | 0 | 2 | 1 | 1 | 0 |

### host:686712

Chamadas escritas diretamente neste corpo: `this.getStdioServerConfigs`.

Alvos de lançamento explícito: `boxServers.error`.

SHA-256 do trecho: `9d1fc6be0b1ebfac07249a1b3bb107c5d6777c1d859a22f57ec616161e724238`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
