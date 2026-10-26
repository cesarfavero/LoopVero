# `armPluginLinkWaits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-auth-wait.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765340-765346](../../../../../../../reference/runtime/host-main.cjs#L765340-L765346) | `FunctionDeclaration` | não | `register, message, deliverTo` |
| [evaluation:558707-558713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558707-L558713) | `FunctionDeclaration` | não | `register, message, deliverTo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765340-765346](../../../../../../../reference/runtime/host-main.cjs#L765340-L765346) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:558707-558713](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558707-L558713) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:765340

Chamadas escritas diretamente neste corpo: `armMcpAuthWait`, `pluginLinkIdsIn`.

SHA-256 do trecho: `1ea6422c40d65167efaea956337e921e728f2177179002f3c657f98382e4a125`.

### evaluation:558707

Chamadas escritas diretamente neste corpo: `armMcpAuthWait`, `pluginLinkIdsIn`.

SHA-256 do trecho: `1ea6422c40d65167efaea956337e921e728f2177179002f3c657f98382e4a125`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
