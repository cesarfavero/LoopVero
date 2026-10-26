# `createTurnSubagentLaunch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/turn-composition/subagent-launch.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587704-587782](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587704-L587782) | `FunctionDeclaration` | não | `host, turnToolHost, turnScope, launch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587704-587782](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587704-L587782) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587704

Chamadas escritas diretamente neste corpo: `createSandAutoReviewClassifierContextExtractor`, `createSandSubagentLaunchPrefetch`, `new SandSubagentHostAdapter`, `sandAutoReviewClassifierContextOptions`.

SHA-256 do trecho: `1afa530c5d9c4ce8a32092e891123f5ba978e2f848b87acde75c95c08ff5e10b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
