# `Walker.member`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750028-750045](../../../../../../../../reference/runtime/host-main.cjs#L750028-L750045) | `method` | não | `node2, scope` |
| [evaluation:522879-522896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522879-L522896) | `method` | não | `node2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750028-750045](../../../../../../../../reference/runtime/host-main.cjs#L750028-L750045) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:522879-522896](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522879-L522896) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:750028

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`, `staticName`, `this.dataOnly`, `this.deniedReason`, `this.expr`, `this.isNumeric`.

SHA-256 do trecho: `67fcc0d89cd0df28fab7233581940beac38457f788c9ebb958ba5c643118d856`.

### evaluation:522879

Chamadas escritas diretamente neste corpo: `DENIED_PROPERTY_NAMES.has`, `elementOf`, `fail`, `isDataLike`, `isObjectKind`, `own2`, `staticName`, `this.dataOnly`, `this.deniedReason`, `this.expr`, `this.isNumeric`.

SHA-256 do trecho: `f6af9bd25c68a80e53c5000a718f48e8e3d83f7300ba52d4c211226cf94231cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
