# `withRedactedText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751046-751063](../../../../../../../reference/runtime/host-main.cjs#L751046-L751063) | `FunctionDeclaration` | não | `result, redact` |
| [evaluation:523897-523914](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523897-L523914) | `FunctionDeclaration` | não | `result, redact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751046-751063](../../../../../../../reference/runtime/host-main.cjs#L751046-L751063) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:523897-523914](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523897-L523914) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:751046

Chamadas escritas diretamente neste corpo: `result.clone`, `rewrite`.

Alvos de atribuição ou incremento: `item.content.value.text`, `redacted.result.value.error`.

SHA-256 do trecho: `24c32452c5f4973593025c4756336d2f99774ef8fe508f48493046dc6642e2f1`.

### evaluation:523897

Chamadas escritas diretamente neste corpo: `result.clone`, `rewrite`.

Alvos de atribuição ou incremento: `item.content.value.text`, `redacted.result.value.error`.

SHA-256 do trecho: `24c32452c5f4973593025c4756336d2f99774ef8fe508f48493046dc6642e2f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
