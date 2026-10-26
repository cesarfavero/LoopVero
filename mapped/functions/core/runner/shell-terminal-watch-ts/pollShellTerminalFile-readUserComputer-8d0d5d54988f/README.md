# `pollShellTerminalFile/readUserComputer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533311-533319](../../../../../../reference/runtime/sand-eval-runner.cjs#L533311-L533319) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533311-533319](../../../../../../reference/runtime/sand-eval-runner.cjs#L533311-L533319) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:533311

Chamadas escritas diretamente neste corpo: `host.box.ensureReady`, `host.ctx.with`, `host.getConversationId`, `readShellTerminalSnapshot`, `sandTerminalFilePath`.

Alvos de atribuição ou incremento: `outputPath`.

SHA-256 do trecho: `43537f8ea95d8b389971356d47e800cf4e2bbb311ff6ee2708a16e0f9b27ed9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
