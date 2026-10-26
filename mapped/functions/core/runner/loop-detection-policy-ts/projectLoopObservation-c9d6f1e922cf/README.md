# `projectLoopObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483375-483388](../../../../../../reference/runtime/sand-eval-runner.cjs#L483375-L483388) | `FunctionDeclaration` | não | `observation, turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483375-483388](../../../../../../reference/runtime/sand-eval-runner.cjs#L483375-L483388) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483375

Chamadas escritas diretamente neste corpo: `clampCount`.

SHA-256 do trecho: `3470a578540ef3a2d076d74952b81b348debf8b0fde4398f96c8cb53ba4eb45e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
