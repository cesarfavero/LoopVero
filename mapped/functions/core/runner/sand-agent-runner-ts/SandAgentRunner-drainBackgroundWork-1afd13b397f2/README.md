# `_SandAgentRunner.drainBackgroundWork`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593848-593854](../../../../../../reference/runtime/sand-eval-runner.cjs#L593848-L593854) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593848-593854](../../../../../../reference/runtime/sand-eval-runner.cjs#L593848-L593854) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:593848

Chamadas escritas diretamente neste corpo: `Promise.all`, `this.backgroundWatches.drainBackgroundShellWork`, `this.backgroundWatches.drainCloudAgentWatches`, `this.subagents.drainBackgroundSubagents`.

SHA-256 do trecho: `f93d35a253e3060700d5f8d8745944746e71991689e2578aed927157136abc2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
