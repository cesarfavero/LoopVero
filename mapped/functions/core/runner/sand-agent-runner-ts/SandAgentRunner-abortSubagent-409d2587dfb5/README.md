# `_SandAgentRunner.abortSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593830-593835](../../../../../../reference/runtime/sand-eval-runner.cjs#L593830-L593835) | `method` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593830-593835](../../../../../../reference/runtime/sand-eval-runner.cjs#L593830-L593835) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:593830

Chamadas escritas diretamente neste corpo: `this.subagentOwnership.abortSubagent`, `this.subagents.abortSubagent`.

SHA-256 do trecho: `6e4db3cbabf5a67317cacceb039addf596440a7498cd780c4cb239a71ec46cc9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
