# `computeBackoffDelayMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590074-590081](../../../../../../reference/runtime/sand-eval-runner.cjs#L590074-L590081) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590074-590081](../../../../../../reference/runtime/sand-eval-runner.cjs#L590074-L590081) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590074

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Math.round`, `random2`.

SHA-256 do trecho: `670c8d282606c5658619d58b508c384a57f3c5c949610a385cd3723561334ab7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
