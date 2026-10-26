# `PlaywrightTreeRewrite.finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751071-751076](../../../../../../../reference/runtime/host-main.cjs#L751071-L751076) | `method` | não | `result` |
| [evaluation:523922-523927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523922-L523927) | `method` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751071-751076](../../../../../../../reference/runtime/host-main.cjs#L751071-L751076) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523922-523927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523922-L523927) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:751071

Chamadas escritas diretamente neste corpo: `new McpToolResult`, `rewriteMcpSuccessText`, `successOf`.

SHA-256 do trecho: `0e97275ba35287b24a1676b05ff10d13154c9f4976c911111f33b54b902515ae`.

### evaluation:523922

Chamadas escritas diretamente neste corpo: `new McpToolResult`, `rewriteMcpSuccessText`, `successOf`.

SHA-256 do trecho: `0e97275ba35287b24a1676b05ff10d13154c9f4976c911111f33b54b902515ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
