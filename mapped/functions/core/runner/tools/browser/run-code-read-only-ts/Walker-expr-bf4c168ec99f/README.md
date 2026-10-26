# `Walker.expr`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749897-750007](../../../../../../../../reference/runtime/host-main.cjs#L749897-L750007) | `method` | não | `node2, scope` |
| [evaluation:522748-522858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522748-L522858) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749897-750007](../../../../../../../../reference/runtime/host-main.cjs#L749897-L750007) | 47 | 4 | 0 | 28 | 0 | 0 |
| [evaluation:522748-522858](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522748-L522858) | 47 | 4 | 0 | 28 | 0 | 0 |

### host:749897

Chamadas escritas diretamente neste corpo: `DATA_CONSTRUCTORS.has`, `GLOBAL_FUNCTIONS.has`, `GLOBAL_VALUES.has`, `LOGICAL_ASSIGNMENTS.has`, `arrayOf`, `elementOf`, `fail2`, `isDataLike`, `isInlineFunction`, `isObjectKind`, `new Set`, `propertyKeyName`, `scope.lookup`, `this.assignTarget`, `this.call`, `this.dataOnly`, `this.expr`, `this.isNumeric`, `this.member`, `this.plainArgs`, `tracked.add`.

Alvos de atribuição ou incremento: `kind`.

SHA-256 do trecho: `01acae84e5fb7e2254ece2035a6f5261985f72f15f4de749a8ea404fc5a9c7fb`.

### evaluation:522748

Chamadas escritas diretamente neste corpo: `DATA_CONSTRUCTORS.has`, `GLOBAL_FUNCTIONS.has`, `GLOBAL_VALUES.has`, `LOGICAL_ASSIGNMENTS.has`, `arrayOf2`, `elementOf`, `fail`, `isDataLike`, `isInlineFunction`, `isObjectKind`, `new Set`, `propertyKeyName`, `scope.lookup`, `this.assignTarget`, `this.call`, `this.dataOnly`, `this.expr`, `this.isNumeric`, `this.member`, `this.plainArgs`, `tracked.add`.

Alvos de atribuição ou incremento: `kind`.

SHA-256 do trecho: `4683229e6b6283a7a4b328f28a266c170c05b79be7531acf2bb353a4fb24cf21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
