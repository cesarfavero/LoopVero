# `openingStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/tools/places/places-summary.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768881-768894](../../../../../../../../reference/runtime/host-main.cjs#L768881-L768894) | `FunctionDeclaration` | não | `place, nowMs2` |
| [evaluation:564456-564469](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564456-L564469) | `FunctionDeclaration` | não | `place, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768881-768894](../../../../../../../../reference/runtime/host-main.cjs#L768881-L768894) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:564456-564469](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564456-L564469) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:768881

Chamadas escritas diretamente neste corpo: `wallClockAtPlaceOrUtc`.

SHA-256 do trecho: `9a27a5a527ec6b152e7cf65bef69e1a775f7c75c6ca39a618be5d7c2188f9aed`.

### evaluation:564456

Chamadas escritas diretamente neste corpo: `wallClockAtPlaceOrUtc`.

SHA-256 do trecho: `f39bc7056199ab782aaeea3229c23ea45a4bd56392dfada894874c66b1cfe638`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
