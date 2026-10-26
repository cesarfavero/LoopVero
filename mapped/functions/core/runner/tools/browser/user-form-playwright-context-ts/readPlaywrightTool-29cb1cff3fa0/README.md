# `readPlaywrightTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767545-767553](../../../../../../../../reference/runtime/host-main.cjs#L767545-L767553) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex, toolName, args` |
| [evaluation:563062-563070](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563062-L563070) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex, toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767545-767553](../../../../../../../../reference/runtime/host-main.cjs#L767545-L767553) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563062-563070](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563062-L563070) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767545

Chamadas escritas diretamente neste corpo: `playwrightBoxMcpServerName`, `readPlaywrightToolOn`.

SHA-256 do trecho: `b87c4bfacf17d4cc715b5f6af3b45b0652d372a4f987a27ae14dfda60d1582b0`.

### evaluation:563062

Chamadas escritas diretamente neste corpo: `playwrightBoxMcpServerName`, `readPlaywrightToolOn`.

SHA-256 do trecho: `b87c4bfacf17d4cc715b5f6af3b45b0652d372a4f987a27ae14dfda60d1582b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
