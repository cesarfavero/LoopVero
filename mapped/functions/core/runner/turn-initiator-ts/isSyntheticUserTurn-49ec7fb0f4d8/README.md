# `isSyntheticUserTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-initiator.ts` · [README do módulo](../../../../../modules/core/runner/turn-initiator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590515-590523](../../../../../../reference/runtime/sand-eval-runner.cjs#L590515-L590523) | `FunctionDeclaration` | não | `run` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590515-590523](../../../../../../reference/runtime/sand-eval-runner.cjs#L590515-L590523) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:590515

Chamadas escritas diretamente neste corpo: `isCreateThreadWakePrompt`, `isReactionWakePrompt`.

SHA-256 do trecho: `c8c501ab369ac5a1a64477b5839e34fb2ed6a0aba62c5dba1c54a047f6db3940`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
