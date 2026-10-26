# `SandSubagentHostAdapter.releaseSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583184-583189](../../../../../../reference/runtime/sand-eval-runner.cjs#L583184-L583189) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583184-583189](../../../../../../reference/runtime/sand-eval-runner.cjs#L583184-L583189) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583184

Chamadas escritas diretamente neste corpo: `this.dispatcher.freeComputerUseWindow`, `this.dispatcher.isRunning`, `this.sessions.delete`.

SHA-256 do trecho: `3da37013b68ae89b372d652eb6e3af971201750c74f32fb9816445bc662bca97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
