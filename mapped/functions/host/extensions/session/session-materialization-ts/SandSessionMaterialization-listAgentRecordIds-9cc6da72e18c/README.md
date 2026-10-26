# `SandSessionMaterialization.listAgentRecordIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-materialization.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-materialization-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721406-721415](../../../../../../../reference/runtime/host-main.cjs#L721406-L721415) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721406-721415](../../../../../../../reference/runtime/host-main.cjs#L721406-L721415) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:721406

Chamadas escritas diretamente neste corpo: `keepAgentDirs`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `c8ae996c974848a734bf3385e747e880e1269f7bc5bd45741cde241850a085f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
