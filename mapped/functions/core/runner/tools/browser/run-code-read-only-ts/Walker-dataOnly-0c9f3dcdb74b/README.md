# `Walker.dataOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749893-749896](../../../../../../../../reference/runtime/host-main.cjs#L749893-L749896) | `method` | não | `kind` |
| [evaluation:522744-522747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522744-L522747) | `method` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749893-749896](../../../../../../../../reference/runtime/host-main.cjs#L749893-L749896) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522744-522747](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522744-L522747) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:749893

Chamadas escritas diretamente neste corpo: `fail2`, `isDataLike`.

SHA-256 do trecho: `b2ced4ffa7cc5901f87dd66402ce39ab43a8feffb68c2fd853d8e6aeb82a114b`.

### evaluation:522744

Chamadas escritas diretamente neste corpo: `fail`, `isDataLike`.

SHA-256 do trecho: `3584c311173fd250b1c89ed58eccc1ddcde00e64df0180160b80ed9540da1b7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
