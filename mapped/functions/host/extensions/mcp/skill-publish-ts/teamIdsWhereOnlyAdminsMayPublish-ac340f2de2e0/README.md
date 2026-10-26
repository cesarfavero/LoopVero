# `teamIdsWhereOnlyAdminsMayPublish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702082-702090](../../../../../../../reference/runtime/host-main.cjs#L702082-L702090) | `FunctionDeclaration` | não | `memberPublishSettings` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702082-702090](../../../../../../../reference/runtime/host-main.cjs#L702082-L702090) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:702082

Chamadas escritas diretamente neste corpo: `adminOnly.add`, `new Set`.

SHA-256 do trecho: `6d3a3b0c34402a5413c21f03736df28647944d74053dde03bb1c9944487abff8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
