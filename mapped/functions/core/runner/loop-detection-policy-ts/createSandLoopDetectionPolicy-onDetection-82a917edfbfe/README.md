# `createSandLoopDetectionPolicy/onDetection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483454-483467](../../../../../../reference/runtime/sand-eval-runner.cjs#L483454-L483467) | `ArrowFunctionExpression` | não | `observation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483454-483467](../../../../../../reference/runtime/sand-eval-runner.cjs#L483454-L483467) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:483454

Chamadas escritas diretamente neste corpo: `.join`, `detectionByFingerprint.set`, `inputs.report`, `projectLoopObservation`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `emitted`.

SHA-256 do trecho: `6111a949a43c8a38090e17000ec2a22f2565ec4d8e1563511a76a8e799264eb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
