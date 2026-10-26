# `playwrightRunCodeToolError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700280-700284](../../../../../../reference/runtime/host-main.cjs#L700280-L700284) | `FunctionDeclaration` | não | `text3` |
| [evaluation:514061-514065](../../../../../../reference/runtime/sand-eval-runner.cjs#L514061-L514065) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700280-700284](../../../../../../reference/runtime/host-main.cjs#L700280-L700284) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514061-514065](../../../../../../reference/runtime/sand-eval-runner.cjs#L514061-L514065) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700280

Chamadas escritas diretamente neste corpo: `runCodeFailure`, `runCodeFailureClass`, `runCodeWorkerFailure`.

SHA-256 do trecho: `4346767f08274b04f6a2757766497ec7b765faaff4f556a2add3862e0b64c6ef`.

### evaluation:514061

Chamadas escritas diretamente neste corpo: `runCodeFailure`, `runCodeFailureClass`, `runCodeWorkerFailure`.

SHA-256 do trecho: `4346767f08274b04f6a2757766497ec7b765faaff4f556a2add3862e0b64c6ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
