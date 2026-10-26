# `findMissingRequiredCatalogFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-plugin-variables.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-plugin-variables-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404403-404407](../../../../../../../reference/runtime/host-main.cjs#L404403-L404407) | `FunctionDeclaration` | não | `fields3, values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404403-404407](../../../../../../../reference/runtime/host-main.cjs#L404403-L404407) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:404403

Chamadas escritas diretamente neste corpo: `fields3.filter`.

SHA-256 do trecho: `7b13457ef2146bd81c36db081d698c639c76f6b6d61586ba8accb087fa4966f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
