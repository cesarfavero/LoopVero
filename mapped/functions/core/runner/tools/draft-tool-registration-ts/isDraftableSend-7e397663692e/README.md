# `isDraftableSend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:541954-541958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541954-L541958) | `FunctionDeclaration` | não | `deps, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541954-541958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541954-L541958) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:541954

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `deps.connectors`, `deps.draftToolAvailable`, `deps.resolveServerHost`, `findExternalSendConnector`, `isDraftRouteVerifiableHost`.

SHA-256 do trecho: `afcdc37da6eb98689d6be1f44f740f7990ed542001f19da1d4f3e6fa17705b16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
