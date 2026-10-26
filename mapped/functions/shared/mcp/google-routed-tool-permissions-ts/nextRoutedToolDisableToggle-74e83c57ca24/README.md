# `nextRoutedToolDisableToggle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687193-687234](../../../../../../reference/runtime/host-main.cjs#L687193-L687234) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687193-687234](../../../../../../reference/runtime/host-main.cjs#L687193-L687234) | 8 | 2 | 0 | 3 | 0 | 0 |

### host:687193

Chamadas escritas diretamente neste corpo: `Object.entries`, `Object.fromEntries`, `args.disabled.filter`, `args.disabled.includes`, `disabled.add`, `disabled.delete`, `disabled.has`, `isDisabled`, `new Map`, `new Set`, `routedToolCarriedPermission`, `routedToolReplacedSources`, `routedToolsReplacing`, `rulesWithout`, `sameToolRules`, `tools.delete`, `tools.has`, `tools.set`.

SHA-256 do trecho: `504dce58302f50d89568e21a1556da1464d3e29c364296af4801570ab13526ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
