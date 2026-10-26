# `placeBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/tools/places/places-summary.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768909-768918](../../../../../../../../reference/runtime/host-main.cjs#L768909-L768918) | `FunctionDeclaration` | não | `place, nowMs2` |
| [evaluation:564484-564493](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564484-L564493) | `FunctionDeclaration` | não | `place, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768909-768918](../../../../../../../../reference/runtime/host-main.cjs#L768909-L768918) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564484-564493](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564484-L564493) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:768909

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `openingHoursLines`, `ratingLine`.

SHA-256 do trecho: `114f9bf132593f21b8dfc262280a9e4c356522279f7879409f9c56e0062c6035`.

### evaluation:564484

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `openingHoursLines`, `ratingLine`.

SHA-256 do trecho: `75cddf7322fb26e072dcb33bb67fbac9498b891c06325ebf2c74d08683e85dd9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
