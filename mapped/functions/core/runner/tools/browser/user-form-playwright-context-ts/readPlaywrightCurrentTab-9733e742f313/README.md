# `readPlaywrightCurrentTab`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767563-767568](../../../../../../../../reference/runtime/host-main.cjs#L767563-L767568) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex` |
| [evaluation:563080-563085](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563080-L563085) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767563-767568](../../../../../../../../reference/runtime/host-main.cjs#L767563-L767568) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563080-563085](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563080-L563085) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767563

Chamadas escritas diretamente neste corpo: `mapRead`, `readPlaywrightTool`.

SHA-256 do trecho: `7bb323bfb0f2f5c2674c8b0283219f3e2e732e349ac07f0267a9b2067bcb0a43`.

### evaluation:563080

Chamadas escritas diretamente neste corpo: `mapRead`, `readPlaywrightTool`.

SHA-256 do trecho: `7bb323bfb0f2f5c2674c8b0283219f3e2e732e349ac07f0267a9b2067bcb0a43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
