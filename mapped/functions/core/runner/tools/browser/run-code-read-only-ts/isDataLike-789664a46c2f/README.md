# `isDataLike`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749651-749653](../../../../../../../../reference/runtime/host-main.cjs#L749651-L749653) | `FunctionDeclaration` | não | `kind` |
| [evaluation:522502-522504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522502-L522504) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749651-749653](../../../../../../../../reference/runtime/host-main.cjs#L749651-L749653) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522502-522504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522502-L522504) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749651

Chamadas escritas diretamente neste corpo: `arrayOf`.

SHA-256 do trecho: `0a98142b2fe88cc4e7dd66cc840da3037e4a2f626952b093ab10d8122195d305`.

### evaluation:522502

Chamadas escritas diretamente neste corpo: `arrayOf2`.

SHA-256 do trecho: `71db44596b550b877fd6bd7dbe87f49d8c3360f3dff797839cd237c994fc97fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
