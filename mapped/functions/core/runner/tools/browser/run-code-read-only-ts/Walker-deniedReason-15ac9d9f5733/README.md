# `Walker.deniedReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750072-750076](../../../../../../../../reference/runtime/host-main.cjs#L750072-L750076) | `method` | não | `objKind, name18` |
| [evaluation:522923-522927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522923-L522927) | `method` | não | `objKind, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750072-750076](../../../../../../../../reference/runtime/host-main.cjs#L750072-L750076) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:522923-522927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522923-L522927) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:750072

Chamadas escritas diretamente neste corpo: `LISTENER_METHODS.has`, `own2`.

SHA-256 do trecho: `4b0fe9b815125d23d8b6eebde16a6409c3fdd14d624c3a9219f40f25dd3d00c5`.

### evaluation:522923

Chamadas escritas diretamente neste corpo: `LISTENER_METHODS.has`, `own2`.

SHA-256 do trecho: `4b0fe9b815125d23d8b6eebde16a6409c3fdd14d624c3a9219f40f25dd3d00c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
