# `classifyPlaywrightRunCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749679-749706](../../../../../../../../reference/runtime/host-main.cjs#L749679-L749706) | `FunctionDeclaration` | não | `code` |
| [evaluation:522530-522557](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522530-L522557) | `FunctionDeclaration` | não | `code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749679-749706](../../../../../../../../reference/runtime/host-main.cjs#L749679-L749706) | 8 | 0 | 0 | 9 | 0 | 1 |
| [evaluation:522530-522557](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522530-L522557) | 8 | 0 | 0 | 9 | 0 | 1 |

### host:749679

Chamadas escritas diretamente neste corpo: `code.includes`, `parse15`, `walk2`.

Alvos de atribuição ou incremento: `program`.

SHA-256 do trecho: `0d3ae9d7851fd74ce697d64768e0213bfb4d61023fb78d7c40a0926278e8f98d`.

### evaluation:522530

Chamadas escritas diretamente neste corpo: `code.includes`, `parse11`, `walk2`.

Alvos de atribuição ou incremento: `program`.

SHA-256 do trecho: `f947f725ff1ed08dbcbffd4452897af69e2505af8001955d1147df26c9d8b693`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
