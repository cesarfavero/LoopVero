# `playwrightRunCodeErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:513982-513984](../../../../../../reference/runtime/sand-eval-runner.cjs#L513982-L513984) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:513982-513984](../../../../../../reference/runtime/sand-eval-runner.cjs#L513982-L513984) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:513982

Chamadas escritas diretamente neste corpo: `runCodeFailure`, `runCodeFailureClass`.

SHA-256 do trecho: `458ce34e17194800870c75bf1d21e06e03ff49754ab3ea1da045e2a21d8a8ac7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
