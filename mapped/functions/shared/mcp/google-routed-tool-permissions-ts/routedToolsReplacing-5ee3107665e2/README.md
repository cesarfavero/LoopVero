# `routedToolsReplacing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687146-687156](../../../../../../reference/runtime/host-main.cjs#L687146-L687156) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687146-687156](../../../../../../reference/runtime/host-main.cjs#L687146-L687156) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:687146

Chamadas escritas diretamente neste corpo: `carry.replaces.includes`, `carry.rows.includes`, `replacing.push`, `rowConnector`.

SHA-256 do trecho: `bcf8144dcf874ccb1168db6a9e758787fe0c870615b9890eadbd47b1f0e4aa40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
