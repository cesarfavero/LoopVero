# `Walker.assignTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750008-750027](../../../../../../../../reference/runtime/host-main.cjs#L750008-L750027) | `method` | não | `target, scope, kind, numeric3` |
| [evaluation:522859-522878](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522859-L522878) | `method` | não | `target, scope, kind, numeric3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750008-750027](../../../../../../../../reference/runtime/host-main.cjs#L750008-L750027) | 10 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:522859-522878](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522859-L522878) | 10 | 0 | 0 | 3 | 0 | 0 |

### host:750008

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `fail2`, `isDataLike`, `scope.lookup`, `staticName`, `this.dataOnly`, `this.expr`.

SHA-256 do trecho: `a7901ea45606887fdea1c48dbc149507a3db1e731b76c59536e5808ebdac5329`.

### evaluation:522859

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `fail`, `isDataLike`, `scope.lookup`, `staticName`, `this.dataOnly`, `this.expr`.

SHA-256 do trecho: `51048372033e49cacedab465635c8fdef437d59c460e78d23aee8a81d6424e06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
