# `createSandLoopDetectionPolicy/settleTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483537-483546](../../../../../../reference/runtime/sand-eval-runner.cjs#L483537-L483546) | `ArrowFunctionExpression` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483537-483546](../../../../../../reference/runtime/sand-eval-runner.cjs#L483537-L483546) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:483537

Chamadas escritas diretamente neste corpo: `emitMitigation`, `openMitigations.clear`, `openMitigations.values`.

SHA-256 do trecho: `19f6060e41b26655b10f6fd1aada8cb791f7fd9e077784dbf13b16e0026bfb41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
