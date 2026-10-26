# `playwrightErrorHead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700135-700143](../../../../../../reference/runtime/host-main.cjs#L700135-L700143) | `FunctionDeclaration` | não | `message` |
| [evaluation:513913-513921](../../../../../../reference/runtime/sand-eval-runner.cjs#L513913-L513921) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700135-700143](../../../../../../reference/runtime/host-main.cjs#L700135-L700143) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513913-513921](../../../../../../reference/runtime/sand-eval-runner.cjs#L513913-L513921) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700135

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_ERROR_HEAD.exec`, `message.split`.

SHA-256 do trecho: `cf694e37db1e022e4ded9c42f8fafff46adca5b4c691980b0214ae0b5efa2c8f`.

### evaluation:513913

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_ERROR_HEAD.exec`, `message.split`.

SHA-256 do trecho: `cf694e37db1e022e4ded9c42f8fafff46adca5b4c691980b0214ae0b5efa2c8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
