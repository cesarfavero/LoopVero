# `isMemorableExchange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536141-536147](../../../../../../reference/runtime/sand-eval-runner.cjs#L536141-L536147) | `FunctionDeclaration` | não | `userMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536141-536147](../../../../../../reference/runtime/sand-eval-runner.cjs#L536141-L536147) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:536141

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `TRIVIAL_EXCHANGES.has`, `user.includes`, `user.toLowerCase`, `userMessage.trim`.

SHA-256 do trecho: `28d67b8ae4203d535dd406c9d534020415348d8fd2c38d2c3ea44a54af6d96bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
