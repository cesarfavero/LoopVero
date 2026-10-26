# `daysInMonth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-repeat.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-repeat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763204-763206](../../../../../../reference/runtime/host-main.cjs#L763204-L763206) | `FunctionDeclaration` | não | `month` |
| [evaluation:556169-556171](../../../../../../reference/runtime/sand-eval-runner.cjs#L556169-L556171) | `FunctionDeclaration` | não | `month` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763204-763206](../../../../../../reference/runtime/host-main.cjs#L763204-L763206) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556169-556171](../../../../../../reference/runtime/sand-eval-runner.cjs#L556169-L556171) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763204

Chamadas escritas diretamente neste corpo: `.getUTCDate`, `Date.UTC`, `new Date`.

SHA-256 do trecho: `b6915d94c5e1101c3e2062e4021f02c574274a67a71393e92738033e0eac9a10`.

### evaluation:556169

Chamadas escritas diretamente neste corpo: `.getUTCDate`, `Date.UTC`, `new Date`.

SHA-256 do trecho: `b6915d94c5e1101c3e2062e4021f02c574274a67a71393e92738033e0eac9a10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
