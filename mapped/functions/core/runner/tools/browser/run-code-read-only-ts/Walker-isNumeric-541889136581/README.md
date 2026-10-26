# `Walker.isNumeric`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750046-750071](../../../../../../../../reference/runtime/host-main.cjs#L750046-L750071) | `method` | não | `node2, scope` |
| [evaluation:522897-522922](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522897-L522922) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750046-750071](../../../../../../../../reference/runtime/host-main.cjs#L750046-L750071) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:522897-522922](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522897-L522922) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:750046

Chamadas escritas diretamente neste corpo: `NUMERIC_BINARY_OPERATORS.has`, `NUMERIC_GLOBAL_FUNCTIONS.has`, `scope.lookup`, `this.isNumeric`.

SHA-256 do trecho: `bef28487bbce595357bb152b75a535c30d76ae756dec1f9b39da7848f4fa2ca7`.

### evaluation:522897

Chamadas escritas diretamente neste corpo: `NUMERIC_BINARY_OPERATORS.has`, `NUMERIC_GLOBAL_FUNCTIONS.has`, `scope.lookup`, `this.isNumeric`.

SHA-256 do trecho: `bef28487bbce595357bb152b75a535c30d76ae756dec1f9b39da7848f4fa2ca7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
