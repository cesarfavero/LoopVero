# `startComputerUseSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743033-743038](../../../../../../../../reference/runtime/host-main.cjs#L743033-L743038) | `FunctionDeclaration` | não | `ctx, name18, attributes = {}` |
| [evaluation:515884-515889](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515884-L515889) | `FunctionDeclaration` | não | `ctx, name18, attributes = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743033-743038](../../../../../../../../reference/runtime/host-main.cjs#L743033-L743038) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:515884-515889](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515884-L515889) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:743033

Chamadas escritas diretamente neste corpo: `ctx.withName`, `getSpan2`, `isTraced`, `new TracedComputerUseSpan`, `new UntracedComputerUseSpan`, `withSpan`.

SHA-256 do trecho: `ed0c9538884873599427363c8bf2a6b39949268156a6c9fcd738f00acbb6efb5`.

### evaluation:515884

Chamadas escritas diretamente neste corpo: `ctx.withName`, `getSpan2`, `isTraced`, `new TracedComputerUseSpan`, `new UntracedComputerUseSpan`, `withSpan`.

SHA-256 do trecho: `ed0c9538884873599427363c8bf2a6b39949268156a6c9fcd738f00acbb6efb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
