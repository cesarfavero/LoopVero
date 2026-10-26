# `reviewSandAutomationWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/sand-automation-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762279-762281](../../../../../../reference/runtime/host-main.cjs#L762279-L762281) | `FunctionDeclaration` | sim | `args` |
| [evaluation:554889-554891](../../../../../../reference/runtime/sand-eval-runner.cjs#L554889-L554891) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762279-762281](../../../../../../reference/runtime/host-main.cjs#L762279-L762281) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:554889-554891](../../../../../../reference/runtime/sand-eval-runner.cjs#L554889-L554891) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:762279

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `db16319b0e05132552592d42ab32b9066892d07b17e9386f1a51720eec099455`.

### evaluation:554889

Chamadas escritas diretamente neste corpo: `runSandAutoReviewFlow`.

SHA-256 do trecho: `db16319b0e05132552592d42ab32b9066892d07b17e9386f1a51720eec099455`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
