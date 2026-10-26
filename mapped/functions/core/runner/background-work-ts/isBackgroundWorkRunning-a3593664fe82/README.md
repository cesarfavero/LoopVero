# `isBackgroundWorkRunning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490723-490725](../../../../../../reference/runtime/sand-eval-runner.cjs#L490723-L490725) | `FunctionDeclaration` | não | `subagents, watches` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490723-490725](../../../../../../reference/runtime/sand-eval-runner.cjs#L490723-L490725) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490723

Chamadas escritas diretamente neste corpo: `subagents.hasRunningSubagents`, `watches.hasRunningBackgroundShellWork`, `watches.pendingCloudAgentWatchBcIds`.

SHA-256 do trecho: `839c56e2133b2d699bd63c1255ceff864f88266367ac4e8e40f5b7303f73b0f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
