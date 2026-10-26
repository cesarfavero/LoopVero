# `returning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only-allowlist.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-allowlist-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749264-749266](../../../../../../../../reference/runtime/host-main.cjs#L749264-L749266) | `FunctionDeclaration` | não | `names3, kind` |
| [evaluation:522115-522117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522115-L522117) | `FunctionDeclaration` | não | `names3, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749264-749266](../../../../../../../../reference/runtime/host-main.cjs#L749264-L749266) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522115-522117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522115-L522117) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749264

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `names3.map`.

SHA-256 do trecho: `af2d17c6491ad8e77d5c8e8235c5b189478b65773b87b12583d62b54ea7b7f6b`.

### evaluation:522115

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `names3.map`.

SHA-256 do trecho: `af2d17c6491ad8e77d5c8e8235c5b189478b65773b87b12583d62b54ea7b7f6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
