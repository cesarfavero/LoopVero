# `own2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749665-749667](../../../../../../../../reference/runtime/host-main.cjs#L749665-L749667) | `FunctionDeclaration` | não | `table, key` |
| [evaluation:522516-522518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522516-L522518) | `FunctionDeclaration` | não | `table, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749665-749667](../../../../../../../../reference/runtime/host-main.cjs#L749665-L749667) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522516-522518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522516-L522518) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:749665

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `427de16b952deec39092097011e84afeabe251dd1efb1255664768a438dbee97`.

### evaluation:522516

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `427de16b952deec39092097011e84afeabe251dd1efb1255664768a438dbee97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
