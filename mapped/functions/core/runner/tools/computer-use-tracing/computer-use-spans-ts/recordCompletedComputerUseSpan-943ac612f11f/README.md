# `recordCompletedComputerUseSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743055-743063](../../../../../../../../reference/runtime/host-main.cjs#L743055-L743063) | `FunctionDeclaration` | não | `ctx, name18, args` |
| [evaluation:515906-515914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515906-L515914) | `FunctionDeclaration` | não | `ctx, name18, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743055-743063](../../../../../../../../reference/runtime/host-main.cjs#L743055-L743063) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515906-515914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515906-L515914) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743055

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`, `recordComputerUseSpanAt`.

SHA-256 do trecho: `5ea9ec1f1432e0997f9880b798aecefe45187002a5d9f3b11d46a73529d2bb03`.

### evaluation:515906

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`, `recordComputerUseSpanAt`.

SHA-256 do trecho: `5ea9ec1f1432e0997f9880b798aecefe45187002a5d9f3b11d46a73529d2bb03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
