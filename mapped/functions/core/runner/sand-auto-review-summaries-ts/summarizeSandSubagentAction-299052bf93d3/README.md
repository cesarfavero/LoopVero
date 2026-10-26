# `summarizeSandSubagentAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693916-693922](../../../../../../reference/runtime/host-main.cjs#L693916-L693922) | `FunctionDeclaration` | não | `args` |
| [evaluation:491352-491358](../../../../../../reference/runtime/sand-eval-runner.cjs#L491352-L491358) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693916-693922](../../../../../../reference/runtime/host-main.cjs#L693916-L693922) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:491352-491358](../../../../../../reference/runtime/sand-eval-runner.cjs#L491352-L491358) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:693916

Chamadas escritas diretamente neste corpo: `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`.

SHA-256 do trecho: `cab5f4706fcf32e922a3e864bd9a9fed14cb9ee0112aecbc449de8e5d608c775`.

### evaluation:491352

Chamadas escritas diretamente neste corpo: `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`.

SHA-256 do trecho: `cab5f4706fcf32e922a3e864bd9a9fed14cb9ee0112aecbc449de8e5d608c775`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
