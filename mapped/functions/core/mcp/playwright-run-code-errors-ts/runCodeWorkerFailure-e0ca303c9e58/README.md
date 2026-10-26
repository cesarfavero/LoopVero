# `runCodeWorkerFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700267-700279](../../../../../../reference/runtime/host-main.cjs#L700267-L700279) | `FunctionDeclaration` | não | `failure3` |
| [evaluation:514048-514060](../../../../../../reference/runtime/sand-eval-runner.cjs#L514048-L514060) | `FunctionDeclaration` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700267-700279](../../../../../../reference/runtime/host-main.cjs#L700267-L700279) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514048-514060](../../../../../../reference/runtime/sand-eval-runner.cjs#L514048-L514060) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:700267

Chamadas escritas diretamente neste corpo: `Number`, `RUN_CODE_WORKER_EXIT.exec`, `linuxSignalOf`, `termSignalOf`, `workerFailureReason`.

SHA-256 do trecho: `e9a8dbaca9e345542188e63cce44cebcc272b82d74c464bfd93efd2cd97550f8`.

### evaluation:514048

Chamadas escritas diretamente neste corpo: `Number`, `RUN_CODE_WORKER_EXIT.exec`, `linuxSignalOf`, `termSignalOf`, `workerFailureReason`.

SHA-256 do trecho: `e9a8dbaca9e345542188e63cce44cebcc272b82d74c464bfd93efd2cd97550f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
