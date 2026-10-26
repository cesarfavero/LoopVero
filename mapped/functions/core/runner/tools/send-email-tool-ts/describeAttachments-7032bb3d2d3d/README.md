# `describeAttachments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764357-764360](../../../../../../../reference/runtime/host-main.cjs#L764357-L764360) | `FunctionDeclaration` | não | `described2` |
| [evaluation:557725-557728](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557725-L557728) | `FunctionDeclaration` | não | `described2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764357-764360](../../../../../../../reference/runtime/host-main.cjs#L764357-L764360) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557725-557728](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557725-L557728) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764357

Chamadas escritas diretamente neste corpo: `.join`, `described2.map`.

SHA-256 do trecho: `a7cf6964920f1cfc964d6f141ab36a8438fe97f9e985440f82ac621a1a669c63`.

### evaluation:557725

Chamadas escritas diretamente neste corpo: `.join`, `described2.map`.

SHA-256 do trecho: `a7cf6964920f1cfc964d6f141ab36a8438fe97f9e985440f82ac621a1a669c63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
