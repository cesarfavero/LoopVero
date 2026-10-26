# `awaitShellTerminalOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shell-terminal-outcome.ts` · [README do módulo](../../../../../modules/core/box/shell-terminal-outcome-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590226-590252](../../../../../../reference/runtime/host-main.cjs#L590226-L590252) | `FunctionDeclaration` | sim | `watch4` |
| [evaluation:529949-529975](../../../../../../reference/runtime/sand-eval-runner.cjs#L529949-L529975) | `FunctionDeclaration` | sim | `watch2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590226-590252](../../../../../../reference/runtime/host-main.cjs#L590226-L590252) | 6 | 1 | 2 | 5 | 0 | 1 |
| [evaluation:529949-529975](../../../../../../reference/runtime/sand-eval-runner.cjs#L529949-L529975) | 6 | 1 | 2 | 5 | 0 | 1 |

### host:590226

Chamadas escritas diretamente neste corpo: `Math.min`, `delay3`, `msUntilLimit`, `parseShellTerminalFooter`, `shellRewatchPollMs`, `watch4.limit`, `watch4.read`, `watch4.shouldStop`, `withTimeout`.

Alvos de atribuição ou incremento: `missingReads`.

SHA-256 do trecho: `27ed19bfd6c440a4afb3cd802c3992d598d7158e432f032e9faa7b1237218807`.

### evaluation:529949

Chamadas escritas diretamente neste corpo: `Math.min`, `delay2`, `msUntilLimit`, `parseShellTerminalFooter`, `shellRewatchPollMs`, `watch2.limit`, `watch2.read`, `watch2.shouldStop`, `withTimeout`.

Alvos de atribuição ou incremento: `missingReads`.

SHA-256 do trecho: `6e76209fc2d8f5276d75d51121f5e218fd30be59e372be00d5ab1e7f241ba29d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
