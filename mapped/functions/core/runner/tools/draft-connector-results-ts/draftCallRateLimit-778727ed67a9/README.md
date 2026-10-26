# `draftCallRateLimit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732991-733000](../../../../../../../reference/runtime/host-main.cjs#L732991-L733000) | `FunctionDeclaration` | não | `result` |
| [evaluation:540513-540522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540513-L540522) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732991-733000](../../../../../../../reference/runtime/host-main.cjs#L732991-L733000) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540513-540522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540513-L540522) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:732991

Chamadas escritas diretamente neste corpo: `serverRefusedBeforeDispatch`.

SHA-256 do trecho: `9f20c750e4a60a67b623dce8dcb558c9a470975c9ae1469324c84cb83dde936f`.

### evaluation:540513

Chamadas escritas diretamente neste corpo: `serverRefusedBeforeDispatch`.

SHA-256 do trecho: `c14b730820a72dcc9cfbf85f4a71e1f5ea976583168e60c364ea8a4d6e1683cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
