# `extensionSubject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/media/attachment-summary.ts` · [README do módulo](../../../../../modules/shared/media/attachment-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541869-541881](../../../../../../reference/runtime/host-main.cjs#L541869-L541881) | `FunctionDeclaration` | não | `source` |
| [evaluation:480885-480897](../../../../../../reference/runtime/sand-eval-runner.cjs#L480885-L480897) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541869-541881](../../../../../../reference/runtime/host-main.cjs#L541869-L541881) | 0 | 0 | 0 | 3 | 0 | 2 |
| [evaluation:480885-480897](../../../../../../reference/runtime/sand-eval-runner.cjs#L480885-L480897) | 0 | 0 | 0 | 3 | 0 | 2 |

### host:541869

Chamadas escritas diretamente neste corpo: `decodeURIComponent`, `new URL`.

Alvos de atribuição ou incremento: `pathname`.

SHA-256 do trecho: `8feae3f9c7489f0b7a0a0307fdd2234f1e038d63b1bc0063a053bd937d1374f0`.

### evaluation:480885

Chamadas escritas diretamente neste corpo: `decodeURIComponent`, `new URL`.

Alvos de atribuição ou incremento: `pathname`.

SHA-256 do trecho: `8feae3f9c7489f0b7a0a0307fdd2234f1e038d63b1bc0063a053bd937d1374f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
