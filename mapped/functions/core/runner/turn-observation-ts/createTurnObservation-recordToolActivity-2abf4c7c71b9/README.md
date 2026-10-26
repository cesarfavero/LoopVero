# `createTurnObservation/recordToolActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588738-588752](../../../../../../reference/runtime/sand-eval-runner.cjs#L588738-L588752) | `FunctionDeclaration` | não | `update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588738-588752](../../../../../../reference/runtime/sand-eval-runner.cjs#L588738-L588752) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588738

Chamadas escritas diretamente neste corpo: `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.get`, `observedToolCallNames.push`, `recentActivity.push`, `recentActivity.splice`.

Alvos de atribuição ou incremento: `observedToolCallCount`.

SHA-256 do trecho: `b945df3e60d4f7eaa14af90c1c628e1dc5544edea8a43bec3ef48c0769168a46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
