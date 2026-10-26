# `collectMaterializedSkillSourceUrls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/legacy-live-references.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684776-684790](../../../../../../../reference/runtime/host-main.cjs#L684776-L684790) | `FunctionDeclaration` | não | `catalog, records2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684776-684790](../../../../../../../reference/runtime/host-main.cjs#L684776-L684790) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684776

Chamadas escritas diretamente neste corpo: `catalog.flatMap`, `new Set`, `records2.flatMap`.

SHA-256 do trecho: `d4b464be37422033ed39b2d95611df17ddcdc5ee3b1c9d1398dce27b199aae76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
