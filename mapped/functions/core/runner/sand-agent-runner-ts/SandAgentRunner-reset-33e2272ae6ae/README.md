# `_SandAgentRunner.reset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593889-593895](../../../../../../reference/runtime/sand-eval-runner.cjs#L593889-L593895) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593889-593895](../../../../../../reference/runtime/sand-eval-runner.cjs#L593889-L593895) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:593889

Chamadas escritas diretamente neste corpo: `new ConversationStateStructure`, `this.autoReviewController.expire`, `this.promptGlue.resetAutomationStatusReminder`, `this.subagents.reset`.

Alvos de atribuição ou incremento: `this.runGeneration`, `this.state`.

SHA-256 do trecho: `071d56556b1c3ec7b508b1505a5e0e6e4175a887c3532f8184d6634fe9736a1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
