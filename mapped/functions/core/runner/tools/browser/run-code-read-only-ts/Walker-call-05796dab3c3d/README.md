# `Walker.call`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750141-750185](../../../../../../../../reference/runtime/host-main.cjs#L750141-L750185) | `method` | não | `node2, scope` |
| [evaluation:522992-523036](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522992-L523036) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750141-750185](../../../../../../../../reference/runtime/host-main.cjs#L750141-L750185) | 17 | 0 | 0 | 12 | 0 | 0 |
| [evaluation:522992-523036](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522992-L523036) | 17 | 0 | 0 | 12 | 0 | 0 |

### host:750141

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `GLOBAL_FUNCTIONS.has`, `PAGE_EVENT_WAITERS.has`, `elementOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`, `scope.lookup`, `staticName`, `this.dataCall`, `this.deniedReason`, `this.expr`, `this.globalCall`, `this.helper`, `this.navigationArgs`, `this.plainArgs`, `this.playwrightArgs`, `this.trackedArrayCall`.

SHA-256 do trecho: `fcd2dce12aff4a1b80c65cebdc1dd58fa9d4a978a674880dd7a3cc1e22f328c5`.

### evaluation:522992

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `GLOBAL_FUNCTIONS.has`, `PAGE_EVENT_WAITERS.has`, `elementOf`, `fail`, `isDataLike`, `isObjectKind`, `own2`, `scope.lookup`, `staticName`, `this.dataCall`, `this.deniedReason`, `this.expr`, `this.globalCall`, `this.helper`, `this.navigationArgs`, `this.plainArgs`, `this.playwrightArgs`, `this.trackedArrayCall`.

SHA-256 do trecho: `6b5c2e4d1f5d27044665a9f50e8f580ae29e00a8d0a7dcd1f3c8070cda46c5c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
