# `readSendThreadTask`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760756-760779](../../../../../../../reference/runtime/host-main.cjs#L760756-L760779) | `FunctionDeclaration` | sim | `rawArgs, deps` |
| [evaluation:551571-551594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551571-L551594) | `FunctionDeclaration` | sim | `rawArgs, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760756-760779](../../../../../../../reference/runtime/host-main.cjs#L760756-L760779) | 5 | 0 | 2 | 2 | 3 | 0 |
| [evaluation:551571-551594](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551571-L551594) | 5 | 0 | 2 | 2 | 3 | 0 |

### host:760756

Chamadas escritas diretamente neste corpo: `deps.tasks.prepareThreadSend`, `deps.tasks.read`, `deps.tasks.setDoneThisTurn`, `isSandAgentTaskId`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f1f0d1d0c47a098defce7c640191919449976984cca27f8776bdcd9d45fef040`.

### evaluation:551571

Chamadas escritas diretamente neste corpo: `deps.tasks.prepareThreadSend`, `deps.tasks.read`, `deps.tasks.setDoneThisTurn`, `isSandAgentTaskId`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f1f0d1d0c47a098defce7c640191919449976984cca27f8776bdcd9d45fef040`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
