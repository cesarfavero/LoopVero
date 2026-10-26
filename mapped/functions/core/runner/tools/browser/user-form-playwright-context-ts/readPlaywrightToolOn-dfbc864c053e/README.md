# `readPlaywrightToolOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767512-767544](../../../../../../../../reference/runtime/host-main.cjs#L767512-L767544) | `FunctionDeclaration` | sim | `ctx, exec2, server, toolName, args` |
| [evaluation:563029-563061](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563029-L563061) | `FunctionDeclaration` | sim | `ctx, exec2, server, toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767512-767544](../../../../../../../../reference/runtime/host-main.cjs#L767512-L767544) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563029-563061](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563029-L563061) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767512

Chamadas escritas diretamente neste corpo: `.map`, `.then`, `Object.entries`, `Object.fromEntries`, `exec2.executeTool`, `new McpArgs`, `withTimeout`.

SHA-256 do trecho: `3593881f3776ba13e4b4ffff1bc975ecdef53248ca55cb26e847dd363b98a4ea`.

### evaluation:563029

Chamadas escritas diretamente neste corpo: `.map`, `.then`, `Object.entries`, `Object.fromEntries`, `exec2.executeTool`, `new McpArgs`, `withTimeout`.

SHA-256 do trecho: `6a21bf32d3873a5e88cf5fa6db4cc21fb13f89ffd2fb72f08bca5ef34fe5f286`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
