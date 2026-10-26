# `runCodeFailureClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700178-700203](../../../../../../reference/runtime/host-main.cjs#L700178-L700203) | `FunctionDeclaration` | não | `failure3` |
| [evaluation:513956-513981](../../../../../../reference/runtime/sand-eval-runner.cjs#L513956-L513981) | `FunctionDeclaration` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700178-700203](../../../../../../reference/runtime/host-main.cjs#L700178-L700203) | 17 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:513956-513981](../../../../../../reference/runtime/sand-eval-runner.cjs#L513956-L513981) | 17 | 0 | 0 | 8 | 0 | 0 |

### host:700178

Chamadas escritas diretamente neste corpo: `RUN_CODE_LIMITS.find`, `RUN_CODE_LONG_SLEEP.test`, `failure3.message.startsWith`, `jobFailureClass`, `workerFailureClass`.

SHA-256 do trecho: `40c5f0fea61d7ce53fe68cd754897146666f827df99f26474dcc9842464065ad`.

### evaluation:513956

Chamadas escritas diretamente neste corpo: `RUN_CODE_LIMITS.find`, `RUN_CODE_LONG_SLEEP.test`, `failure3.message.startsWith`, `jobFailureClass`, `workerFailureClass`.

SHA-256 do trecho: `40c5f0fea61d7ce53fe68cd754897146666f827df99f26474dcc9842464065ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
