# `recordComputerUseSpanAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743064-743074](../../../../../../../../reference/runtime/host-main.cjs#L743064-L743074) | `FunctionDeclaration` | não | `ctx, name18, args` |
| [evaluation:515915-515925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515915-L515925) | `FunctionDeclaration` | não | `ctx, name18, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743064-743074](../../../../../../../../reference/runtime/host-main.cjs#L743064-L743074) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515915-515925](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515915-L515925) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:743064

Chamadas escritas diretamente neste corpo: `Math.max`, `ctx.withName`, `endSpan`, `getSpan2`, `isTraced`, `withSpan`.

SHA-256 do trecho: `dd195a25608476455e564252f21b30ce81c34cca497ef3e42d712d1266cf1459`.

### evaluation:515915

Chamadas escritas diretamente neste corpo: `Math.max`, `ctx.withName`, `endSpan`, `getSpan2`, `isTraced`, `withSpan`.

SHA-256 do trecho: `dd195a25608476455e564252f21b30ce81c34cca497ef3e42d712d1266cf1459`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
